<template>
  <div class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center px-6">
      <p class="text-primary font-semibold mb-2">404</p>
      <h1 class="text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
      <p class="text-foreground/70 mb-8">The page you're looking for doesn't exist.</p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button :as="RouterLink" to="/">Back to Home</Button>
        <Button :as="RouterLink" to="/projects" variant="outline">View Projects</Button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>
