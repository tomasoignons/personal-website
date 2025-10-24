<template>
  <div class="min-h-screen bg-base-100">
    <!-- Header -->
    <section class="py-20 bg-gradient-to-br from-base-200 to-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="text-center mb-16 animate-fade-in">
          <h1 class="text-4xl md:text-6xl font-bold text-base-content mb-6">My Projects</h1>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
            A collection of projects I've worked on, showcasing different technologies, 
            challenges solved, and innovations created.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 bg-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, index) in projects" 
            :key="project.id"
            class="card bg-base-100 shadow-xl hover-lift cursor-pointer animate-slide-up"
            :style="{ 'animation-delay': `${index * 0.1}s`, 'animation-fill-mode': 'both' }"
            @click="navigateToProject(project.id)"
          >
            <figure class="h-48 relative overflow-hidden group">
              <img 
                v-if="project.image" 
                :src="project.image" 
                :alt="project.title"
                class="w-full h-full transition-transform duration-300 group-hover:scale-105"
                :class="project.objectFit? project.objectFit : 'object-scale-down'"
              />
              <div 
                v-else
                class="w-full h-full flex items-center justify-center"
                :style="{ background: project.gradient }"
              >
                <svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </figure>
            <div class="card-body">
              <div class="badge" :class="project.categoryClass">
                {{ project.category }}
              </div>
              <h3 class="card-title text-base-content">{{ project.title }}</h3>
              <p class="text-base-content/70">{{ project.shortDescription }}</p>
              
              <div class="flex flex-wrap gap-2 my-4">
                <span 
                  v-for="tech in project.technologies.slice(0, 3)" 
                  :key="tech"
                  class="badge badge-ghost badge-sm"
                >
                  {{ tech }}
                </span>
                <span v-if="project.technologies.length > 3" class="badge badge-ghost badge-sm">
                  +{{ project.technologies.length - 3 }}
                </span>
              </div>
              
              <div class="card-actions justify-between items-center">
                <span class="text-sm text-base-content/50">{{ project.year }}</span>
                <div class="flex gap-2">
                  <a 
                    v-if="project.github" 
                    :href="project.github" 
                    target="_blank"
                    class="btn btn-ghost btn-sm"
                    @click.stop
                  >
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a 
                    v-if="project.demo || project.externalLink" 
                    :href="project.demo || project.externalLink" 
                    target="_blank"
                    class="btn btn-ghost btn-sm"
                    @click.stop
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-base-200">
      <div class="max-w-4xl mx-auto px-6 text-center animate-fade-in">
        <h2 class="text-3xl md:text-4xl font-bold text-base-content mb-4">Interested in Working Together?</h2>
        <p class="text-xl text-base-content/70 mb-8">
          I'm always excited to take on new challenges and collaborate on innovative projects.
        </p>
        <router-link 
          to="/#contact" 
          class="btn btn-primary btn-lg px-8 hover:scale-105 transition-transform duration-200"
        >
          Get In Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import projectsData from '@/data/projects.json'

const router = useRouter()

// Convert JSON object to array for iteration
const projects = computed(() => {
  return Object.values(projectsData)
})

const navigateToProject = (id) => {
  router.push(`/project/${id}`).then(() => {
    // Scroll to top of the page after navigation
    window.scrollTo({ top: 0, behavior: 'smooth' })
  })
}
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>