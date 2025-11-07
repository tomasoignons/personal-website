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
          <ProjectCard 
            v-for="project in projects" 
            :key="project.id"
            :project="project"
          />
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
import ProjectCard from '@/components/ProjectCard.vue'
import projectsData from '@/data/projects.json'
import { onMounted } from 'vue'


onMounted(() => {
  document.title = `Emmanuel Omont - Projects`
})
// Convert projects object to array
const projects = Object.values(projectsData)
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>