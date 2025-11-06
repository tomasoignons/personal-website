<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-base-200 to-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-8">
          <router-link 
            to="/projects" 
            class="inline-flex items-center text-primary hover:text-primary-focus transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Projects
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <span class="badge badge-lg mb-4" :style="{ background: project.gradient, color: 'white', border: 'none' }">{{ project.category }}</span>
            <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-6">{{ project.title }}</h1>
            <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
              {{ project.detailedDescription }}
            </p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              <a 
                v-if="project.externalLink"
                :href="project.externalLink" 
                target="_blank"
                class="btn gap-2 text-white border-none"
                :style="{ background: project.gradient }"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Visit Instagram
              </a>
            </div>
          </div>
          
          <div class="flex justify-center animate-slide-up">
            <div class="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="project.image" 
                :alt="project.title + ' Project'"
                class="w-full h-full object-cover"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              />
              <div 
                class="w-full h-full bg-gradient-to-br hidden items-center justify-center"
                :class="[getBadgeClass.replace('badge-', 'from-'), getBadgeClass.replace('badge-', 'to-') + '-focus']"
                style="display: none"
              >
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-20 bg-base-100">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div class="text-center">
            <h3 class="text-lg font-semibold text-base-content mb-2">Year</h3>
            <p class="text-base-content/60">{{ project.year }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-base-content mb-2">Category</h3>
            <p class="text-base-content/60">{{ project.category }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-base-content mb-2">Status</h3>
            <p class="text-base-content/60">{{ project.status }}</p>
          </div>
        </div>

        <div class="mb-16 animate-slide-up">
          <h2 class="text-3xl font-bold text-base-content mb-6">Technologies Used</h2>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tech in project.technologies" 
              :key="tech" 
              class="badge badge-lg"
              :class="getTechBadgeClass(tech)"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-base-content mb-6">Key Features</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <ul class="space-y-2 mb-6">
              <li v-for="feature in project.features" :key="feature" class="flex items-start">
                <span class="text-primary mr-2">•</span>
                <span v-html="formatFeature(feature)"></span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mb-16 animate-slide-up">
          <h2 class="text-3xl font-bold text-base-content mb-6">Technical Implementation</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <p>{{ project.technicalDetails }}</p>
          </div>
        </div>

        <div class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-base-content mb-6">Impact and Results</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <p>{{ project.impact }}</p>
          </div>
        </div>

        <div class="card bg-base-200 animate-scale-in">
          <div class="card-body">
            <h3 class="card-title text-base-content">Need Presentation Design Help?</h3>
            <p class="text-base-content/70">
              {{ getCallToActionText }}
            </p>
            <div class="card-actions justify-end">
              <a 
                v-if="project.externalLink" 
                :href="project.externalLink" 
                target="_blank" 
                class="btn btn-outline"
                :style="{ borderColor: 'currentColor', color: project.gradient.match(/#[0-9a-f]{6}/i)?.[0] || '#3b82f6' }"
              >
                Learn More
              </a>
              <router-link to="/#contact" class="btn text-white border-none" :style="{ background: project.gradient }">Get Design Help</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProject } from '@/composables/useProject'

const { project, getBadgeClass, getButtonClass, getCallToActionText, getTechBadgeClass, formatFeature } = useProject('mister-powerpoint')

onMounted(() => {
  // Set page title
  if (project.value) {
    document.title = `${project.value.title} - Emmanuel Omont Portfolio`
  }
})
</script>

<style scoped>
/* Component-specific styles */
</style>