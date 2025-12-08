<script setup>
const { isDark } = useTheme()
</script>

<template>
  <section id="home"
    class="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-indigo-100 dark:from-dark-900 dark:via-dark-800 dark:to-dark-700 z-0">

    <div class="absolute top-0 left-0 w-full mt-8 z-0">
      <img src="~/assets/images/hero-traffic-lights.png" alt="Hero Traffic Lights"
        class="w-full h-48 md:h-64 object-cover" :class="{ 'opacity-50': isDark }">
    </div>

    <div class="container-max section-padding relative z-20 mt-12 md:mt-18">
      <div class="flex flex-wrap justify-center gap-3 mb-4">
        <span
          class="inline-block px-4 py-2 rounded-full bg-orange-300 text-orange-800 dark:bg-orange-900 dark:text-orange-200 text-sm font-medium">New
          Teacher</span>
        <span
          class="inline-block px-4 py-2 rounded-full bg-blue-300 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-sm font-medium">Lesson
          Pacing</span>
        <span
          class="inline-block px-4 py-2 rounded-full bg-green-300 text-green-800 dark:bg-green-900 dark:text-green-200 text-sm font-medium">Instructional
          Design</span>
        <span
          class="inline-block px-4 py-2 rounded-full bg-purple-300 text-purple-800 dark:bg-purple-900 dark:text-purple-200 text-sm font-medium">Time
          Management</span>
      </div>
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          style="opacity: 1; transform: none;">
          Problem of Practice:
          <span class="block text-2xl sm:text-3xl font-medium text-gray-600 dark:text-gray-300 mt-4">
            Instructional Pacing!
          </span>
        </h1>
        <div>By: <span class="font-semibold">Daniel Commins</span></div>
        <div>December 7, 2025</div>
      </div>
      <div class="flex justify-center pt-4">
        <ScrollDownButton target="#problem" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
