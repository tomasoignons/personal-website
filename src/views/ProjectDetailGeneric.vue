<template>
  <div class="min-h-screen bg-base-100" v-if="project">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-base-200 to-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-8">
          <router-link 
            to="/projects" 
            class="inline-flex items-center font-semibold transition-all duration-200 group hover:scale-105"
            :class="buttonClass"
          >
            <svg class="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Projects
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <span class="badge badge-lg mb-4" :class="categoryBadgeClass">{{ project.category }}</span>
            <h1 class="text-4xl md:text-5xl font-bold text-base-content mb-6">{{ project.title }}</h1>
            <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
              {{ project.detailedDescription }}
            </p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank"
                class="btn gap-2 border-none hover:scale-105 transition-transform"
                :class="buttonClass"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
              <a 
                v-if="project.demo" 
                :href="project.demo" 
                target="_blank"
                class="btn gap-2 border-none hover:scale-105 transition-transform"
                :class="buttonClass"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                View Demo
              </a>
              <a 
                v-if="project.externalLink" 
                :href="project.externalLink" 
                target="_blank"
                class="btn btn-outline gap-2 border-none hover:scale-105 transition-transform"
                :class="buttonClass"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Visit Project
              </a>
            </div>
          </div>
          
          <div class="flex justify-center animate-slide-up">
            <div 
              class="w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl"
              :style="!project.image ? { background: projectGradient } : {}"
            >
              <img 
                v-if="project.image" 
                :src="project.image" 
                :alt="project.title"
                :class="project.objectFit || 'object-cover'"
                class="w-full h-full"
                @error="handleImageError"
              />
              <div 
                v-if="!project.image"
                class="w-full h-full flex items-center justify-center"
              >
                <svg class="w-24 h-24 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
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
              class="badge badge-lg hover:scale-105 transition-transform"
              :class="categoryBadgeClass"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div v-if="project.features" class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-base-content mb-6">Key Features</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <ul class="space-y-3">
              <li v-for="feature in project.features" :key="feature" class="flex items-start">
                <span class="badge badge-sm mr-3 mt-1" :class="categoryBadgeClass">✓</span>
                <span v-html="formatFeature(feature)"></span>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="project.technicalDetails" class="mb-16 animate-slide-up">
          <h2 class="text-3xl font-bold text-base-content mb-6">Technical Implementation</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <p>{{ project.technicalDetails }}</p>
          </div>
        </div>

        <div v-if="project.impact" class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-base-content mb-6">Impact and Results</h2>
          <div class="prose prose-lg max-w-none text-base-content/70">
            <p>{{ project.impact }}</p>
          </div>
        </div>

        <div class="card bg-base-200 animate-scale-in">
          <div class="card-body">
            <h3 class="card-title text-base-content">Interested in This Project?</h3>
            <p class="text-base-content/70">
              {{ getCallToActionText() }}
            </p>
            <div class="card-actions justify-end">
              <a 
                v-if="project.externalLink" 
                :href="project.externalLink" 
                target="_blank" 
                class="btn btn-outline hover:scale-105 transition-transform"
                :class="buttonClass"
              >
                Learn More
              </a>
              <router-link 
                to="/#contact" 
                class="btn border-none hover:scale-105 transition-transform"
                :class="buttonClass"
              >
                Get In Touch
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen bg-base-100 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-base-content mb-4">Project Not Found</h1>
      <p class="text-base-content/70 mb-8">The project you're looking for doesn't exist.</p>
      <router-link to="/projects" class="btn btn-primary">Back to Projects</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import projectsData from '@/data/projects.json'
import { getCategoryGradient, getCategoryBadgeClass } from '@/constants/projectStyles'

const route = useRoute()
const project = ref(null)

const projectId = computed(() => route.params.id)

// Get gradient for the project
const projectGradient = computed(() => {
  return project.value?.gradient || getCategoryGradient(project.value?.category)
})

// Extract color from gradient for use in borders and text
const gradientColor = computed(() => {
  const gradient = projectGradient.value
  const match = gradient?.match(/#[0-9a-f]{6}/i)
  return match ? match[0] : '#3b82f6'
})

// Get badge class based on category
const categoryBadgeClass = computed(() => {
  return getCategoryBadgeClass(project.value?.category)
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
  
  return categoryClasses[project.value?.category] || 'btn-primary'
})

onMounted(() => {
  loadProject()
  // Set page title
  if (project.value) {
    document.title = `${project.value.title} - Emmanuel Omont Portfolio`
  }
})

const loadProject = () => {
  if (projectsData[projectId.value]) {
    project.value = projectsData[projectId.value]
  }
}

const handleImageError = (event) => {
  // Hide the broken image and show gradient background
  event.target.style.display = 'none'
  event.target.parentElement.style.background = projectGradient.value
  
  // Add a star icon if not already present
  if (!event.target.parentElement.querySelector('svg')) {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    svg.setAttribute('class', 'w-24 h-24 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2')
    svg.setAttribute('fill', 'currentColor')
    svg.setAttribute('viewBox', '0 0 24 24')
    svg.innerHTML = '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>'
    event.target.parentElement.appendChild(svg)
  }
}

const formatFeature = (feature) => {
  // Format features with bold titles
  return feature.replace(/^([^:]+):/, '<strong>$1:</strong>')
}

const getCallToActionText = () => {
  if (!project.value) return ''
  
  const categoryTexts = {
    'Website': 'This web project showcases modern web development practices and user experience design.',
    'Data Analysis': 'This project showcases advanced data collection, processing, and analysis techniques.',
    'Startup': 'This startup experience demonstrates scalable backend development and innovation.',
    'Bots': 'This automation project shows expertise in bot development and intelligent automation.',
    'Machine Learning': 'This project demonstrates cutting-edge AI and machine learning capabilities.',
    'Telegram Bot': 'This automation project shows expertise in bot development and user engagement.',
    'Content Creation': 'This project highlights skills in content strategy, design, and community building.',
    'Research Project': 'This research showcases innovation in collaborative technologies and distributed systems.',
    'Mobile App': 'This mobile application demonstrates expertise in creating user-friendly mobile experiences.',
    'Web App': 'This web application showcases full-stack development capabilities and modern architecture.',
    'Automation': 'This automation project demonstrates efficiency and innovative problem-solving.',
    'Homelab': 'This homelab setup showcases infrastructure management and self-hosting expertise.',
    'TBD': 'This project demonstrates technical expertise and innovation.'
  }
  
  return categoryTexts[project.value.category] || 'This project demonstrates technical expertise and innovation.'
}
</script>

<style scoped>
/* Component-specific styles */
.hover-lift:hover {
  transform: translateY(-2px);
}
</style>