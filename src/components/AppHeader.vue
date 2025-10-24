<template>
  <header class="fixed top-0 left-0 right-0 bg-base-100/95 backdrop-blur-sm border-b border-base-300 z-50 shadow-sm">
    <nav class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Name -->
        <router-link to="/" class="text-2xl font-bold text-base-content hover:text-primary transition-colors duration-200">
          Emmanuel Omont
        </router-link>
        
        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link 
            to="/" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            :class="{ 'text-primary font-medium': $route.path === '/' }"
          >
            Home
          </router-link>
          <a 
            href="/#about" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            @click="scrollToSection('#about')"
          >
            About
          </a>
          <router-link 
            to="/projects" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            :class="{ 'text-primary font-medium': $route.path.startsWith('/project') }"
          >
            Projects
          </router-link>
          <a 
            href="/#contact" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            @click="scrollToSection('#contact')"
          >
            Contact
          </a>
        </div>
        
        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu"
          class="md:hidden btn btn-ghost btn-sm p-2"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-base-300">
        <div class="flex flex-col space-y-4 mt-4">
          <router-link 
            to="/" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            :class="{ 'text-primary font-medium': $route.path === '/' }"
            @click="closeMobileMenu"
          >
            Home
          </router-link>
          <a 
            href="/#about" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            @click="scrollToSection('#about'); closeMobileMenu()"
          >
            About
          </a>
          <router-link 
            to="/projects" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            :class="{ 'text-primary font-medium': $route.path.startsWith('/project') }"
            @click="closeMobileMenu"
          >
            Projects
          </router-link>
          <a 
            href="/#contact" 
            class="text-base-content/70 hover:text-base-content transition-colors duration-200"
            @click="scrollToSection('#contact'); closeMobileMenu()"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

const scrollToSection = (sectionId) => {
  if (route.path !== '/') {
    // Navigate to home first, then scroll
    router.push('/').then(() => {
      setTimeout(() => {
        const element = document.querySelector(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    })
  } else {
    // Already on home page, just scroll
    const element = document.querySelector(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>