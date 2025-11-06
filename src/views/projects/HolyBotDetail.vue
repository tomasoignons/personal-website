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
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a 
                href="https://t.me/holybot" 
                target="_blank"
                class="btn btn-outline gap-2"
                :style="{ borderColor: 'currentColor', color: project.gradient.match(/#[0-9a-f]{6}/i)?.[0] || '#3b82f6' }"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Try Bot
              </a>
            </div>
          </div>
          
          <div class="flex justify-center animate-slide-up">
            <div class="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="project.image" 
                :alt="project.title + ' Project'"
                class="w-full h-full object-scale-down "
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              />
              <div 
                class="w-full h-full bg-gradient-to-br hidden items-center justify-center"
                :class="[getBadgeClass.replace('badge-', 'from-'), getBadgeClass.replace('badge-', 'to-') + '-focus']"
                style="display: none"
              >
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
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
            <h3 class="card-title text-base-content">Try HolyBot Today!</h3>
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
              <a href="https://t.me/holybot" target="_blank" class="btn text-white border-none" :style="{ background: project.gradient }">Start Saving</a>
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

const { project, getBadgeClass, getButtonClass, getCallToActionText, getTechBadgeClass, formatFeature } = useProject('holybot')

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