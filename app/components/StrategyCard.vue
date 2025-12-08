<script setup>
import { ref } from 'vue'

defineProps({
  title: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: false,
    default: 'text-gray-900 dark:text-white'
  }
})

const isOpen = ref(false)
</script>

<template>
  <div
    class="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden transition-all duration-300 hover:shadow-md h-fit">
    <button @click="isOpen = !isOpen" class="w-full flex items-center justify-between p-4 text-left focus:outline-none">
      <h3 class="text-x2 font-bold " :class="[ textColor ]">{{ title }}</h3>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
        class="transform transition-transform duration-300 text-gray-500 dark:text-gray-400 flex-shrink-0 ml-4"
        :class="{ 'rotate-180': isOpen }">
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
    <div v-show="isOpen" class="px-6 pb-6 text-gray-600 dark:text-gray-300">
      <slot />
    </div>
  </div>
</template>
