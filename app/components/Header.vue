<template>
  <header
    class="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:border-b dark:border-slate-700"
  >
    <nav class="mx-auto flex max-w-5xl items-center justify-between p-4">
      <NuxtLink to="/" class="font-bold text-lg">
        Template
      </NuxtLink>

      <ul class="flex items-center gap-6">
        <li v-for="item in nav" :key="item.to">
          <a
            :href="item.to"
            class="transition-colors"
            :class="activeSection === item.to
              ? 'text-blue-600 dark:text-blue-400 font-semibold'
              : 'text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300'"
          >
            {{ item.label }}
          </a>
        </li>

        <!-- Dark mode toggle -->
        <li>
          <button
            type="button"
            @click="toggleDark"
            class="text-xs px-3 py-1 rounded-full border border-slate-300 dark:border-slate-600
                   bg-slate-100 dark:bg-slate-800
                   text-slate-700 dark:text-slate-200
                   hover:bg-slate-200 dark:hover:bg-slate-700 transition"
          >
            {{ isDark ? '☀️ Light' : '🌙 Dark' }}
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
// import { useRoute } from '#app'

// const route = useRoute()

const nav = [
  { label: 'Home', to: '#home' },
  { label: 'Best Practices', to: '#best-practices' },
  { label: 'Resources', to: '#resources' },
  { label: 'About', to: '#about' },
]

const activeSection = ref('#hero')
const isDark = ref(false)

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
</style>
