<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:border-b dark:border-slate-700">
    <div class="container-max px-4 sm;px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div>
          <NuxtLink to="/" class="flex items-cener space-x-2 font-bold text-lg">
            Template
          </NuxtLink>
        </div>
        <nav class="mx-auto flex max-w-5xl items-center justify-between p-4">
          <ul class=" hidden md:flex items-center space-x-8">
            <li v-for="item in nav" :key="item.to">
              <a :href="item.to" class="transition-colors" :class="activeSection === item.to
                ? 'text-blue-600 dark:text-blue-400 font-semibold'
                : 'text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300'">
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="flex items-center space-x-4">
          <!-- Dark mode toggle -->
          <button type="button" @click="toggleDark" class="text-xs p-2 rounded-lg border border-slate-300 dark:border-slate-600
        bg-slate-100 dark:bg-slate-800
        text-slate-700 dark:text-slate-200
        hover:bg-slate-200 dark:hover:bg-slate-700 transition hover:scale-110">
            <svg v-if="isDark" class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 5V3m0 18v-2M7.05 7.05 5.636 5.636m12.728 12.728L16.95 16.95M5 12H3m18 0h-2M7.05 16.95l-1.414 1.414M18.364 5.636 16.95 7.05M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            </svg>
            <svg v-else class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
            </svg>
          </button>

          <!-- Mobile menu toggle -->
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="md:hidden p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-menu ">
              <line x1="4" x2="20" y1="12" y2="12"></line>
              <line x1="4" x2="20" y1="6" y2="6"></line>
              <line x1="4" x2="20" y1="18" y2="18"></line>
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-x">
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>

          <!-- Mobile Menu Dropdown -->
          <Transition name="mobile-menu">
            <div v-if="isMobileMenuOpen"
              class="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 shadow-lg md:hidden">
              <ul class="flex flex-col p-4 space-y-4">
                <li v-for="item in nav" :key="item.to">
                  <a :href="item.to"
                    class="block text-lg py-2 px-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    :class="activeSection === item.to ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300'"
                    @click="isMobileMenuOpen = false">
                    {{ item.label }}
                  </a>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

const nav = [
  { label: 'Home', to: '#home' },
  { label: 'Best Practices', to: '#best-practices' },
  { label: 'Resources', to: '#resources' },
  { label: 'About', to: '#about' },
]

const activeSection = ref('#hero');
const isDark = ref(false);
const isMobileMenuOpen = ref(false);

const applyTheme = (dark) => {
  const root = document.documentElement
  if (dark) {
    root.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    root.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const toggleDark = () => {
  isDark.value = !isDark.value
}

// Only touch window/document on client
onMounted(() => {
  const saved = localStorage.getItem('theme')
  if (saved === 'dark') {
    isDark.value = true
  } else if (saved === 'light') {
    isDark.value = false
  } else if (window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches) {
    isDark.value = true
  }

  applyTheme(isDark.value)

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = `#${entry.target.id}`
        }
      })
    },
    {
      threshold: 0.4, // adjust sensitivity
    }
  )

  const sections = document.querySelectorAll('section[id]')
  sections.forEach((section) => observer.observe(section))
})

watch(isDark, (value) => {
  applyTheme(value)
})


</script>

<style scoped>
header {
  backdrop-filter: blur(10px);
}

.mobile-menu-enter-active {
  transition: clip-path 10.4s ease-out;
}

.mobile-menu-leave-active {
  transition: none;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  clip-path: inset(0 0 100% 0);
}

.mobile-menu-enter-active ul {
  animation: fadeIn 0.5s ease-out forwards;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
