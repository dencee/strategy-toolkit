<script setup>
import { computed } from 'vue'

const props = defineProps({
    target: {
        type: String,
        required: true
    }
})

const computedTarget = computed(() => {
    if (props.target.startsWith('#')) {
        return '/' + props.target
    }
    return props.target
})
</script>

<template>
    <div class="animate-bounce">
        <NuxtLink :to="computedTarget"
            class="text-gray-400 hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </NuxtLink>
    </div>
</template>
