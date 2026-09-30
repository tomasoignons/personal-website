<template>
  <header class="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
    <nav class="max-w-6xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo/Name -->
        <router-link to="/" class="text-2xl font-bold text-foreground hover:text-primary transition-colors duration-200">
          Emmanuel Omont
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="text-foreground/70 hover:text-foreground transition-colors duration-200"
            :class="{ 'text-primary font-medium': isActive(link) }"
          >
            {{ link.label }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <Button
          variant="ghost"
          size="icon-sm"
          class="md:hidden"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMobileMenu"
        >
          <X v-if="mobileMenuOpen" class="w-6 h-6" />
          <Menu v-else class="w-6 h-6" />
        </Button>
      </div>

      <!-- Mobile Navigation -->
      <div v-if="mobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-border">
        <div class="flex flex-col space-y-4 mt-4">
          <router-link
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="text-foreground/70 hover:text-foreground transition-colors duration-200"
            :class="{ 'text-primary font-medium': isActive(link) }"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'

const route = useRoute()

const links = [
  { label: 'Home', to: '/', match: (path) => path === '/' },
  { label: 'About', to: { path: '/', hash: '#about' } },
  { label: 'Projects', to: '/projects', match: (path) => path.startsWith('/project') },
  { label: 'CV', to: '/cv', match: (path) => path === '/cv' },
  { label: 'Contact', to: { path: '/', hash: '#contact' } }
]

const isActive = (link) => (link.match ? link.match(route.path) : false)

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
