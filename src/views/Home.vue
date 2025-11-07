<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex flex-col gap-20 items-center justify-center bg-gradient-to-br from-base-200 to-base-100 bg-red-500">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <!-- Typing Animation -->
        <div class="mb-4">
          <TypingAnimation />
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold text-base-content mb-6 animate-fade-in">
          Hi, I'm <span class="text-primary">Emmanuel Omont</span>.
        </h1>
        <p class="text-xl md:text-2xl text-base-content/70 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up" style="animation-delay: 0.2s; animation-fill-mode: both;">
          EPFL Bachelor Student in Computer Science passionate about Machine Learning, Backend Development, and innovative technology solutions.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style="animation-delay: 0.4s; animation-fill-mode: both;">
          <router-link 
            to="/projects" 
            class="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-200"
          >
            View My Work
          </router-link>
          <a 
            href="#contact" 
            class="btn btn-outline btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-200"
          >
            Let's Connect
          </a>
        </div>
      </div>
      <!-- Logo Band -->
      <LogoBand />
      
      <!-- Scroll indicator -->
      <button 
        @click="scrollToAbout"
        class="animate-bounce cursor-pointer bg-transparent border-none flex flex-col items-center justify-center gap-4"
      >
      <p class="text-xs text-base-content/40 mt-2">Scroll to explore</p>
        <svg class="w-6 h-6 text-base-content/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </button>
    </section>


    <!-- About Section -->
    <section id="about" class="py-20 bg-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-base-content mb-12">
          About <span class="text-primary">Me</span>
        </h2>
        
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <p class="text-lg text-base-content/80 leading-relaxed">
              I'm a Computer Science student at EPFL with a passion for creating impactful technology solutions. 
              My journey in tech has led me to explore diverse areas from machine learning to backend development.
            </p>
            <p class="text-lg text-base-content/80 leading-relaxed">
              Currently, I'm gaining hands-on experience as an R&D Engineer Intern at BoundaryAI, 
              where I work on cutting-edge AI solutions.
            </p>
            <p class="text-lg text-base-content/80 leading-relaxed">
              When I'm not coding, I'm exploring entrepreneurial opportunities and building tools 
              that solve real-world problems.
            </p>
          </div>
          
          <div class="bg-base-200 rounded-lg p-8 shadow-lg">
            <h3 class="text-2xl font-bold text-base-content mb-6">Quick Facts</h3>
            <div class="space-y-4">
              <div class="flex items-start gap-3">
                <span class="text-primary text-xl">🎓</span>
                <div>
                  <p class="font-semibold text-base-content">Education</p>
                  <p class="text-base-content/70">EPFL & ETHZ - Computer Science</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-primary text-xl">💼</span>
                <div>
                  <p class="font-semibold text-base-content">Current Role</p>
                  <p class="text-base-content/70">Lead Backend Dev at BoundaryAI</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-primary text-xl">🔧</span>
                <div>
                  <p class="font-semibold text-base-content">Core Skills</p>
                  <p class="text-base-content/70">Python, Java, C++, Vue.js, React, Node.js</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="text-primary text-xl">🌍</span>
                <div>
                  <p class="font-semibold text-base-content">Location</p>
                  <p class="text-base-content/70">Switzerland</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Career Highlights Carousel -->
    <section class="py-20 bg-base-200">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-base-content mb-4">
          Career <span class="text-primary">Highlights</span>
        </h2>
        <p class="text-center text-base-content/70 mb-12 max-w-2xl mx-auto">
          Milestones and achievements throughout my journey
        </p>
        <CareerHighlightsCarousel />
      </div>
    </section>

    <!-- Education Timeline -->
    <section class="py-20 bg-base-100 flex flex-col md:flex-row gap-10 max-w-7xl m-auto">
      <div class="max-w-4xl mx-auto px-6 flex-1/2">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-base-content mb-4">
          <span class="text-primary">Education</span>
        </h2>
        <p class="text-center text-base-content/70 mb-12">
          My academic background and learning journey
        </p>
        <Timeline :items="education" />
      </div>
      <div class="max-w-4xl mx-auto px-6 flex-1/2">
        <h2 class="text-4xl md:text-5xl font-bold text-center text-base-content mb-4">
          <span class="text-primary">Experience</span>
        </h2>
        <p class="text-center text-base-content/70 mb-12">
          Professional experience and roles I've undertaken
        </p>
        <Timeline :items="experience" />
      </div>
    </section>

    <!-- Experience Timeline -->
    <!-- <section class="py-20 bg-base-200">
    </section>     -->
    <!-- Highlights Section -->

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-4">Technical Expertise</h2>
          <p class="text-xl text-base-content/70">The tools and technologies I use to build the future</p>
        </div>
        
        <div class="flex flex-wrap justify-center gap-4 animate-on-scroll">
          <span class="badge badge-primary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Python</span>
          <span class="badge badge-secondary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Node.js</span>
          <span class="badge badge-accent badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Vue.js</span>
          <span class="badge badge-neutral badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">NuxtJS</span>
          <span class="badge badge-primary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">React</span>
          <span class="badge badge-secondary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Svelte</span>
          <span class="badge badge-accent badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Java</span>
          <span class="badge badge-neutral badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Scala</span>
          <span class="badge badge-primary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">C/C++</span>
          <span class="badge badge-secondary badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">Machine Learning</span>
          <span class="badge badge-accent badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">PyTorch</span>
          <span class="badge badge-neutral badge-lg px-4 py-3 font-medium hover:scale-105 transition-transform duration-200">TensorFlow</span>
        </div>
      </div>
    </section>

    <!-- Featured Projects Preview -->
    <section id="projects-preview" class="py-20 bg-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-4">Featured Projects</h2>
          <p class="text-xl text-base-content/70">Some of my recent work and achievements</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <ProjectCard 
            v-for="project in featuredProjects" 
            :key="project.id"
            :project="project"
          />
        </div>
        
        <div class="text-center animate-on-scroll">
          <router-link 
            to="/projects" 
            class="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-200"
          >
            View All Projects
          </router-link>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-base-100">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <div class="animate-on-scroll">
          <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-4">Connect With Me</h2>
          <p class="text-xl text-base-content/70 mb-12">
            Feel free to reach out through any of these platforms. I'm always open to 
            discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row justify-center gap-6 mb-12 animate-on-scroll">
          <a href="https://github.com/tomasoignons" target="_blank" class="btn btn-neutral gap-2 hover:scale-105 transition-transform duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/omont-emmanuel" target="_blank" class="btn btn-info gap-2 hover:scale-105 transition-transform duration-200">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a href="mailto:eomont@ethz.ch" class="btn btn-error gap-2 hover:scale-105 transition-transform duration-200">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Email
          </a>
        </div>
        
        <div class="text-base-content/70 animate-on-scroll">
          <p class="mb-2 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            emmanuel.omont@epfl.ch
          </p>
          <!-- <p class="mb-2 flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
            </svg>
            +33 6 42 16 67 89
          </p> -->
          <p class="flex items-center justify-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            Zürich, Switzerland
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import TypingAnimation from '@/components/TypingAnimation.vue'
import LogoBand from '@/components/LogoBand.vue'
import CareerHighlightsCarousel from '@/components/CareerHighlightsCarousel.vue'
import Timeline from '@/components/Timeline.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import educationData from '@/data/education.json'
import experienceData from '@/data/experience.json'
import projectsData from '@/data/projects.json'

const education = educationData
const experience = experienceData

// Filter projects with homePage: true
const featuredProjects = computed(() => {
  // Convert object to array and filter
  const projectsArray = Object.values(projectsData)
  return projectsArray.filter(project => project.homePage === true)
})

// Smooth scroll to about section
const scrollToAbout = () => {
  const aboutSection = document.getElementById('about')
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Intersection Observer for scroll animations
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate')
      }
    })
  }, observerOptions)

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })

  document.title = "Emmanuel - Software Engineer"
})
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>