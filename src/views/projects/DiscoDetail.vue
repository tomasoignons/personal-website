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
            <span class="badge mb-4" :class="getBadgeClass">{{ project.category }}</span>
            <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-6">{{ project.title }}</h1>
            <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
              {{ project.detailedDescription }}
            </p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              <a 
                v-if="project.externalLink"
                :href="project.externalLink" 
                target="_blank"
                class="btn gap-2"
                :class="getButtonClass"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Visit Platform
              </a>
                <a 
                    v-if="project.externalLink"
                    :href="project.externalLink" 
                    target="_blank"
                    class="btn btn-outline gap-2"
                    :class="getButtonClass"
                    >Visit Site
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                </a>
            </div>
          </div>
          
          <div class="flex justify-center animate-slide-up">
            <div class="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                :src="project.image" 
                :alt="project.title + ' Project'"
                class="w-full h-full object-scale-down"
                onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
              />
              <div 
                class="w-full h-full bg-gradient-to-br hidden items-center justify-center"
                :class="[getBadgeClass.replace('badge-', 'from-'), getBadgeClass.replace('badge-', 'to-') + '-focus']"
                style="display: none"
              >
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2zm0 4.24L9.47 8.63 7 8.87l2.5 2.43-.59 3.44L12 13.23l3.09 1.51-.59-3.44L17 8.87l-2.47-.24L12 6.24z"/>
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
            <h3 class="card-title text-base-content">Interested in ML Research?</h3>
            <p class="text-base-content/70">
              {{ getCallToActionText }}
            </p>
            <div class="card-actions justify-end">
              <a 
                v-if="project.externalLink" 
                :href="project.externalLink" 
                target="_blank" 
                class="btn btn-outline"
                :class="getButtonClass"
              >
                Learn More
              </a>
              <router-link to="/#contact" class="btn" :class="getButtonClass">Discuss Research</router-link>
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

const { project, getBadgeClass, getButtonClass, getCallToActionText, getTechBadgeClass, formatFeature } = useProject('disco')

onMounted(() => {
  // Set page title
  document.title = `${project.title} - Emmanuel Omont Portfolio`
})
</script>

<style scoped>
/* Component-specific styles */
</style>