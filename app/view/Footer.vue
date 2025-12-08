<script setup>
const { navLinks, activeSection, observer } = useNav();

</script>

<template>
  <footer class="py-4 bg-white dark:bg-dark-900">
    <div class="container-max p-8">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-1">
            <li v-for="item in navLinks" :key="item.to">
              <NuxtLink :to="'/' + item.to"
                class="text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300 transition-colors"
                :class="activeSection === item.to ? 'text-blue-600 dark:text-blue-400 font-semibold' : 'text-slate-700 dark:text-slate-300'">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">External Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="https://sites.google.com/view/daniels-math-corner" external target="_blank"
                class="text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                Daniel's Math Corner</NuxtLink>
            </li>
            <li>
              <NuxtLink to="https://github.com/dencee/strategy-toolkit" external target="_blank"
                class="text-gray-700 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-300 transition-colors">
                Site Source Code</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped></style>