<template>
  <div class="min-h-screen bg-white" v-if="project">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-8">
          <router-link 
            to="/projects" 
            class="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Projects
          </router-link>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span 
              class="text-sm font-medium px-3 py-1 rounded-full mb-4 inline-block"
              :class="project.categoryClass"
            >
              {{ project.category }}
            </span>
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{{ project.title }}</h1>
            <p class="text-xl text-gray-600 mb-8 leading-relaxed">{{ project.description }}</p>
            
            <div class="flex flex-wrap gap-3 mb-8">
              <a 
                v-if="project.github" 
                :href="project.github" 
                target="_blank"
                class="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
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
                class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                Live Demo
              </a>
            </div>
          </div>
          
          <div class="flex justify-center">
            <div 
              class="w-full max-w-md h-80 rounded-2xl flex items-center justify-center"
              :style="{ background: project.gradient }"
            >
              <span class="text-white text-8xl">{{ project.icon }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Details -->
    <section class="py-20 bg-white">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div class="text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Year</h3>
            <p class="text-gray-600">{{ project.year }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Category</h3>
            <p class="text-gray-600">{{ project.category }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Status</h3>
            <p class="text-gray-600">{{ project.status || 'Completed' }}</p>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Technologies Used</h2>
          <div class="flex flex-wrap gap-3">
            <span 
              v-for="tech in project.technologies" 
              :key="tech"
              class="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium"
            >
              {{ tech }}
            </span>
          </div>
        </div>

        <div class="mb-16">
          <h2 class="text-3xl font-bold text-gray-900 mb-6">Project Overview</h2>
          <div class="prose prose-lg max-w-none text-gray-600">
            <p class="mb-6">{{ project.fullDescription }}</p>
            
            <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Key Features</h3>
            <ul class="space-y-2">
              <li v-for="feature in project.features" :key="feature" class="flex items-start">
                <svg class="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                {{ feature }}
              </li>
            </ul>

            <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Challenges & Solutions</h3>
            <p>{{ project.challenges }}</p>

            <h3 class="text-xl font-semibold text-gray-900 mt-8 mb-4">Results & Impact</h3>
            <p>{{ project.results }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Projects -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl font-bold text-gray-900 text-center mb-12">Other Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="relatedProject in relatedProjects" 
            :key="relatedProject.id"
            class="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer"
            @click="navigateToProject(relatedProject.id)"
          >
            <div 
              class="h-32"
              :style="{ background: relatedProject.gradient }"
            ></div>
            <div class="p-6">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">{{ relatedProject.title }}</h3>
              <p class="text-gray-600 text-sm">{{ relatedProject.shortDescription }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  <!-- Project Not Found -->
  <div v-else class="min-h-screen bg-white flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Project Not Found</h1>
      <p class="text-xl text-gray-600 mb-8">The project you're looking for doesn't exist.</p>
      <router-link 
        to="/projects" 
        class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
      >
        Back to Projects
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const projects = ref([
  {
    id: 1,
    title: "DatIN",
    description: "Collected data about 2M+ companies in Switzerland, including email and phone numbers, for comprehensive data analysis and insights.",
    fullDescription: "DatIN is a comprehensive data collection and analysis project focused on Swiss companies. The project involved gathering detailed information about over 2 million companies, including contact details, business information, and market data. This massive dataset enables deep analysis of the Swiss business landscape, market trends, and economic patterns.",
    category: "Data Analysis",
    categoryClass: "badge-primary",
    gradient: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
    technologies: ["Python", "Data Analysis", "Web Scraping", "APIs", "Database Management", "Data Visualization"],
    year: "2025",
    github: "https://github.com/tomasoignons",
    demo: null,
    features: [
      "Data collection from multiple sources",
      "Automated web scraping systems",
      "Data validation and cleaning algorithms",
      "Comprehensive database design",
      "Statistical analysis and insights",
      "Data visualization dashboards"
    ],
    challenges: "The main challenge was handling the massive scale of data while ensuring accuracy and compliance with data protection regulations. We implemented robust validation systems and efficient data processing pipelines.",
    results: "Successfully collected and processed data from 2M+ companies, providing valuable insights into the Swiss business ecosystem and enabling advanced market analysis."
  },
  {
    id: 2,
    title: "MemeHater",
    description: "Machine learning model to detect hateful memes using VisualBERT, fine-tuned with PyTorch and TensorFlow for improved accuracy.",
    fullDescription: "MemeHater is an advanced machine learning project designed to detect and classify hateful content in memes. Using state-of-the-art VisualBERT architecture, the model combines visual and textual analysis to understand context and detect harmful content that might not be obvious through text or image analysis alone.",
    category: "Machine Learning",
    categoryClass: "badge-secondary",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    technologies: ["Python", "VisualBERT", "PyTorch", "TensorFlow", "Computer Vision", "NLP"],
    year: "2024",
    github: "https://github.com/tomasoignons",
    demo: null,
    features: [
      "Multi-modal content analysis",
      "VisualBERT architecture implementation",
      "Custom fine-tuning pipeline",
      "Real-time inference capabilities",
      "Comprehensive evaluation metrics",
      "Bias detection and mitigation"
    ],
    challenges: "Balancing accuracy with bias prevention was crucial. We implemented careful dataset curation and multiple validation layers to ensure fair and accurate detection across different contexts and communities.",
    results: "Achieved high accuracy in detecting hateful memes while maintaining low false positive rates, contributing to safer online content moderation systems."
  },
  {
    id: 3,
    title: "HolyBot",
    description: "Telegram bot distributing discounts and deals to students, serving over 1000+ active users with automated deal aggregation.",
    fullDescription: "HolyBot is a popular Telegram bot specifically designed for students to discover and access exclusive discounts and deals. The bot aggregates offers from various sources, validates them, and distributes them to over 1000 active users in real-time, helping students save money on essential purchases.",
    category: "Telegram Bot",
    categoryClass: "badge-accent",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
    technologies: ["Node.js", "Telegram API", "Python", "Automation", "Database Management"],
    year: "2024",
    github: "https://github.com/tomasoignons",
    demo: null,
    features: [
      "Automated deal aggregation",
      "Real-time notifications",
      "User preference management",
      "Deal validation system",
      "Category-based filtering",
      "Analytics and user engagement tracking"
    ],
    challenges: "Scaling the bot to handle 1000+ concurrent users while maintaining real-time performance required optimizing the notification system and implementing efficient data structures for deal management.",
    results: "Successfully serves over 1000 active users with consistent uptime, helping students save significant amounts on their purchases while maintaining high user satisfaction."
  }
])

const project = computed(() => {
  const id = parseInt(route.params.id)
  return projects.value.find(p => p.id === id)
})

const relatedProjects = computed(() => {
  return projects.value
    .filter(p => p.id !== parseInt(route.params.id))
    .slice(0, 3)
    .map(p => ({
      ...p,
      shortDescription: p.description.substring(0, 100) + '...'
    }))
})

const navigateToProject = (id) => {
  router.push(`/project/${id}`)
}

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo(0, 0)
})
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>