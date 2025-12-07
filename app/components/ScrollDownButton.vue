<script setup>
defineProps({
    target: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a :href="target"
            class="text-gray-400 hover:text-primary-600 dark:text-gray-500 dark:hover:text-primary-400 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-chevron-down">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </a>
    </div>
</template>
