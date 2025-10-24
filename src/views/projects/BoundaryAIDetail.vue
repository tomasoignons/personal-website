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
                Visit {{ project.title.split(' ')[0] }}
              </a>
            </div>
          </div>
          
          <div class="flex justify-center animate-slide-up">
            <div class="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                v-if="project.image"
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
              <div 
                v-else
                class="w-full h-full flex items-center justify-center"
                :style="{ background: project.gradient }"
              >
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
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
              v-for="(tech, index) in project.technologies" 
              :key="tech"
              class="badge badge-lg"
              :class="getTechBadgeClass(index)"
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
            <h3 class="card-title text-base-content">Interested in AI-Powered Analytics?</h3>
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
              <router-link to="/#contact" class="btn" :class="getButtonClass">Discuss Opportunities</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Set page title
  document.title = 'BoundaryAI Backend - Emmanuel Omont Portfolio'
})
</script>

<style scoped>
/* Component-specific styles */
</style>