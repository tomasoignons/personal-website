<template>
  <div class="card bg-base-100 shadow-xl hover-lift group relative flex flex-col h-full">
    <router-link 
      :to="`/project/${project.id}`"
      class="cursor-pointer flex flex-col h-full"
      @click="scrollToTop"
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
      <div class="card-body justify-between">
        <div class="badge badge-sm" :class="categoryBadgeClass">{{ project.category }}</div>
        <h3 class="card-title text-base-content">{{ project.title }}</h3>
        <p class="text-base-content/70 line-clamp-3">{{ project.shortDescription || project.description }}</p>
        <div class="card-actions justify-between mt-4">
          <div class="flex gap-2 z-10">
            <a 
              v-if="project.github" 
              :href="project.github" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-none shadow-lg"
              @click.stop
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a 
              v-if="project.demo || project.externalLink" 
              :href="project.demo || project.externalLink" 
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-circle btn-sm bg-base-100/90 hover:bg-base-100 border-none shadow-lg"
              @click.stop
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
          <button class="btn btn-sm" :class="buttonClass">
            View Project
            <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </router-link>
    
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getCategoryGradient, getCategoryBadgeClass } from '@/constants/projectStyles'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

// Get gradient for the project based on category or use project's custom gradient
const projectGradient = computed(() => {
  return props.project.gradient || getCategoryGradient(props.project.category)
})

// Get badge class based on category
const categoryBadgeClass = computed(() => {
  return getCategoryBadgeClass(props.project.category)
})

// Get button class based on category
const buttonClass = computed(() => {
  const categoryClasses = {
    'Website': 'btn-primary',
    'Data Analysis': 'btn-success',
    'Startup': 'btn-error',
    'Bots': 'btn-warning',
    'Machine Learning': 'btn-info',
    'Telegram Bot': 'btn-warning',
    'Content Creation': 'btn-secondary',
    'Research Project': 'btn-accent',
    'Mobile App': 'btn-success',
    'Web App': 'btn-info',
    'Automation': 'btn-warning',
    'Homelab': 'btn-neutral',
    'TBD': 'btn-ghost'
  }
  
  return categoryClasses[props.project.category] || 'btn-primary'
})

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

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

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
