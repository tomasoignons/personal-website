<template>
  <Card class="shadow-xl hover-lift group relative h-full">
    <router-link
      :to="`/project/${project.id}`"
      class="cursor-pointer flex flex-col h-full"
    >
      <figure
        class="h-48 overflow-hidden relative"
        :style="!project.image ? { background: projectGradient } : {}"
      >
        <img
          v-if="project.image"
          :src="project.image"
          :alt="project.title"
          class="w-full h-full transition-transform duration-300 group-hover:scale-110"
          :class="project.objectFit || 'object-cover'"
          @error="handleImageError"
        />
        <div
          v-else
          class="w-full h-full flex items-center justify-center"
        >
          <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
        </div>
      </figure>
      <CardContent class="justify-between">
        <div class="flex flex-wrap gap-1">
          <Badge
            v-for="cat in project.categories"
            :key="cat"
            size="sm"
            :variant="getCategoryVariant(cat)"
          >{{ cat }}</Badge>
        </div>
        <CardTitle class="text-foreground">{{ project.title }}</CardTitle>
        <p class="text-foreground/70 line-clamp-3">{{ project.shortDescription || project.description }}</p>
        <CardFooter class="justify-between mt-4">
          <div class="flex gap-2 z-10">
            <Button
              v-if="project.github"
              as="a"
              :href="project.github"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon-sm"
              class="bg-background/90 hover:bg-background shadow-lg"
              aria-label="Source code"
              @click.stop
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </Button>
            <Button
              v-if="project.demo || project.externalLink"
              as="a"
              :href="project.demo || project.externalLink"
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
              size="icon-sm"
              class="bg-background/90 hover:bg-background shadow-lg"
              aria-label="Open project link"
              @click.stop
            >
              <ExternalLink class="w-4 h-4" />
            </Button>
          </div>
          <span :class="buttonVariants({ variant: getCategoryVariant(primaryCategory, 'default'), size: 'sm' })">
            View Project
            <ChevronRight class="w-4 h-4" />
          </span>
        </CardFooter>
      </CardContent>
    </router-link>
  </Card>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronRight, ExternalLink } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import { getCategoryGradient, getCategoryVariant } from '@/constants/projectStyles'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const primaryCategory = computed(() => {
  const cats = props.project.categories
  return Array.isArray(cats) ? cats[0] : cats
})

// Get gradient for the project based on category or use project's custom gradient
const projectGradient = computed(() => {
  return props.project.gradient || getCategoryGradient(primaryCategory.value)
})

const handleImageError = (event) => {
  // Hide the broken image and show gradient background
  event.target.style.display = 'none'
  event.target.parentElement.style.background = projectGradient.value

  // Add a star icon if not already present
  if (!event.target.parentElement.querySelector('svg')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'w-16 h-16 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')
    svg.setAttribute('fill', 'currentColor')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.innerHTML = '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
    event.target.parentElement.appendChild(svg)
  }
}
</script>
