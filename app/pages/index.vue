<script setup lang="ts">
import Header from '@/components/Header.vue'
import Home from '@/view/Home.vue';
import Footer from '@/view/Footer.vue';
import BestPractices from '@/view/BestPractices.vue';
import Resources from '@/view/Resources.vue';
import Problem from '@/view/Problem.vue';
</script>

<template>
  <div>
    <Header></Header>
    <main>
      <Home></Home>
      <Problem></Problem>
      <Resources></Resources>
      <BestPractices></BestPractices>
      <Footer></Footer>
    </main>
  </div>
</template>
