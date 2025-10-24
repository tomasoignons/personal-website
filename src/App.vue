<script setup>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div id="app">
    <AppHeader />
    <main class="pt-20">
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>

<style scoped>
/* Global styles can go here if needed */
</style>
