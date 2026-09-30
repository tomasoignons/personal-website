<template>
  <div class="min-h-screen bg-background" v-if="project">
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-muted to-background">
      <div class="max-w-6xl mx-auto px-6">
        <div class="mb-8">
          <router-link
            to="/projects"
            class="inline-flex items-center font-semibold text-primary transition-all duration-200 group hover:scale-105"
          >
            <ChevronLeft class="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </router-link>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div class="animate-fade-in">
            <div class="flex flex-wrap gap-2 mb-4">
              <Badge
                v-for="cat in project.categories"
                :key="cat"
                size="lg"
                :variant="getCategoryVariant(cat)"
              >{{ cat }}</Badge>
            </div>
            <h1 class="text-4xl md:text-5xl font-bold text-foreground mb-6">{{ project.title }}</h1>
            <p class="text-xl text-foreground/70 mb-8 leading-relaxed">
              {{ project.detailedDescription }}
            </p>

            <div class="flex flex-wrap gap-3 mb-8">
              <Button
                v-if="project.github"
                as="a"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                :variant="buttonVariant"
                class="hover:scale-105"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </Button>
              <Button
                v-if="project.demo"
                as="a"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                :variant="buttonVariant"
                class="hover:scale-105"
              >
                <ExternalLink class="w-5 h-5" />
                View Demo
              </Button>
              <Button
                v-if="project.externalLink"
                as="a"
                :href="project.externalLink"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                class="hover:scale-105"
              >
                <ExternalLink class="w-5 h-5" />
                Visit Project
              </Button>
            </div>
          </div>

          <div class="flex justify-center animate-slide-up">
            <div
              class="relative w-full max-w-md h-80 rounded-2xl overflow-hidden shadow-2xl"
              :style="!project.image ? { background: projectGradient } : {}"
            >
              <img
                v-if="project.image"
                :key="project.id"
                :src="project.image"
                :alt="project.title"
                :class="project.objectFit || 'object-cover'"
                class="w-full h-full"
                @error="handleImageError"
              />
              <div
                v-else
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
    <section class="py-20 bg-background">
      <div class="max-w-4xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in">
          <div class="text-center">
            <h3 class="text-lg font-semibold text-foreground mb-2">Year</h3>
            <p class="text-foreground/60">{{ project.year }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-foreground mb-2">Category</h3>
            <p class="text-foreground/60">{{ project.categories?.join(', ') }}</p>
          </div>
          <div class="text-center">
            <h3 class="text-lg font-semibold text-foreground mb-2">Status</h3>
            <p class="text-foreground/60">{{ project.status }}</p>
          </div>
        </div>

        <div class="mb-16 animate-slide-up">
          <h2 class="text-3xl font-bold text-foreground mb-6">Technologies Used</h2>
          <div class="flex flex-wrap gap-3">
            <Badge
              v-for="tech in project.technologies"
              :key="tech"
              size="lg"
              :variant="badgeVariant"
              class="hover:scale-105"
            >
              {{ tech }}
            </Badge>
          </div>
        </div>

        <div v-if="project.features" class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-foreground mb-6">Key Features</h2>
          <ul class="space-y-3 text-lg text-foreground/70">
            <li v-for="feature in project.features" :key="feature" class="flex items-start">
              <Badge size="sm" :variant="badgeVariant" class="mr-3 mt-1">✓</Badge>
              <span v-html="formatFeature(feature)"></span>
            </li>
          </ul>
        </div>

        <div v-if="project.technicalDetails" class="mb-16 animate-slide-up">
          <h2 class="text-3xl font-bold text-foreground mb-6">Technical Implementation</h2>
          <p class="text-lg leading-relaxed text-foreground/70">{{ project.technicalDetails }}</p>
        </div>

        <div v-if="project.impact" class="mb-16 animate-fade-in">
          <h2 class="text-3xl font-bold text-foreground mb-6">Impact and Results</h2>
          <p class="text-lg leading-relaxed text-foreground/70">{{ project.impact }}</p>
        </div>

        <Card class="bg-muted animate-scale-in">
          <CardContent>
            <CardTitle class="text-foreground">Interested in This Project?</CardTitle>
            <p class="text-foreground/70">
              {{ callToActionText }}
            </p>
            <CardFooter class="justify-end">
              <Button
                v-if="project.externalLink"
                as="a"
                :href="project.externalLink"
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                class="hover:scale-105"
              >
                Learn More
              </Button>
              <Button
                :as="RouterLink"
                :to="{ path: '/', hash: '#contact' }"
                :variant="buttonVariant"
                class="hover:scale-105"
              >
                Get In Touch
              </Button>
            </CardFooter>
          </CardContent>
        </Card>
      </div>
    </section>
  </div>

  <!-- 404 State -->
  <div v-else class="min-h-screen bg-background flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
      <p class="text-foreground/70 mb-8">The project you're looking for doesn't exist.</p>
      <Button :as="RouterLink" to="/projects">Back to Projects</Button>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { ChevronLeft, ExternalLink } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card'
import projectsData from '@/data/projects.json'
import { getCategoryGradient, getCategoryVariant } from '@/constants/projectStyles'

const route = useRoute()

// Derived from the URL so direct loads and project-to-project navigation both work
const project = computed(() => projectsData[route.params.id] || null)

const primaryCategory = computed(() => {
  const cats = project.value?.categories
  return Array.isArray(cats) ? cats[0] : cats
})

// Get gradient for the project
const projectGradient = computed(() => {
  return project.value?.gradient || getCategoryGradient(primaryCategory.value)
})

const badgeVariant = computed(() => getCategoryVariant(primaryCategory.value))
const buttonVariant = computed(() => getCategoryVariant(primaryCategory.value, 'default'))

watchEffect(() => {
  document.title = project.value
    ? `${project.value.title} - Emmanuel Omont Portfolio`
    : 'Project Not Found - Emmanuel Omont'
})

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

const callToActionText = computed(() => {
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

  return categoryTexts[primaryCategory.value] || 'This project demonstrates technical expertise and innovation.'
})
</script>
