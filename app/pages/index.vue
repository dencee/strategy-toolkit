<script setup lang="ts">
import Header from '@/components/Header.vue'
import Home from '@/view/Home.vue';
import About from '@/view/About.vue';
import BestPractices from '@/view/BestPractices.vue';
import Resources from '@/view/Resources.vue';
</script>

<template>
  <div>
    <Header></Header>
    <main>
      <Home></Home>
      <BestPractices></BestPractices>
      <Resources></Resources>
      <About></About>
    </main>
  </div>
</template>
