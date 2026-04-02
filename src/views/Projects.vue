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

    <!-- Filters -->
    <section class="py-8 bg-base-100 border-b border-base-200">
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex flex-col gap-4">
          <!-- Category filter -->
          <div>
            <p class="text-sm font-semibold text-base-content/60 mb-2 uppercase tracking-wider">Category</p>
            <div class="flex flex-wrap gap-2">
              <button
                class="badge badge-lg cursor-pointer transition-all duration-150 hover:scale-105"
                :class="selectedCategories.length === 0 ? 'badge-neutral' : 'badge-ghost opacity-60'"
                @click="selectedCategories = []"
              >All</button>
              <button
                v-for="cat in allCategories"
                :key="cat"
                class="badge badge-lg cursor-pointer transition-all duration-150 hover:scale-105"
                :class="selectedCategories.includes(cat) ? getCategoryBadgeClass(cat) : 'badge-ghost opacity-60'"
                @click="toggleCategory(cat)"
              >{{ cat }}</button>
            </div>
          </div>

          <!-- Technology filter -->
          <div>
            <p class="text-sm font-semibold text-base-content/60 mb-2 uppercase tracking-wider">Technology</p>
            <div class="flex flex-wrap gap-2">
              <input
                v-model="techSearch"
                type="text"
                placeholder="Search technologies..."
                class="input input-bordered input-sm w-48"
              />
              <button
                v-for="tech in visibleTechs"
                :key="tech"
                class="badge badge-lg cursor-pointer transition-all duration-150 hover:scale-105"
                :class="selectedTechs.includes(tech) ? 'badge-primary' : 'badge-ghost opacity-60'"
                @click="toggleTech(tech)"
              >{{ tech }}</button>
            </div>
          </div>

          <!-- Active filter summary -->
          <div v-if="selectedCategories.length > 0 || selectedTechs.length > 0" class="flex items-center gap-3">
            <span class="text-sm text-base-content/60">{{ filteredProjects.length }} project{{ filteredProjects.length !== 1 ? 's' : '' }} shown</span>
            <button class="btn btn-xs btn-ghost" @click="clearFilters">Clear all filters ×</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="py-20 bg-base-100">
      <div class="max-w-6xl mx-auto px-6">
        <div v-if="filteredProjects.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>
        <div v-else class="text-center py-16 text-base-content/50">
          No projects match the selected filters.
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
import { getCategoryBadgeClass } from '@/constants/projectStyles'
import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  document.title = `Emmanuel Omont - Projects`
})

const allProjects = Object.values(projectsData)

const selectedCategories = ref([])
const selectedTechs = ref([])
const techSearch = ref('')

const allCategories = computed(() => {
  const cats = new Set()
  allProjects.forEach(p => p.categories?.forEach(c => cats.add(c)))
  return [...cats].sort()
})

const allTechnologies = computed(() => {
  const techs = new Set()
  allProjects.forEach(p => p.technologies?.forEach(t => techs.add(t)))
  return [...techs].sort()
})

const visibleTechs = computed(() => {
  const search = techSearch.value.toLowerCase()
  const filtered = search
    ? allTechnologies.value.filter(t => t.toLowerCase().includes(search))
    : allTechnologies.value
  // Show selected techs first, then up to 20 others
  const selected = filtered.filter(t => selectedTechs.value.includes(t))
  const rest = filtered.filter(t => !selectedTechs.value.includes(t)).slice(0, 20)
  return [...selected, ...rest]
})

const filteredProjects = computed(() => {
  return allProjects.filter(project => {
    if (selectedCategories.value.length > 0) {
      const hasCategory = project.categories?.some(c => selectedCategories.value.includes(c))
      if (!hasCategory) return false
    }
    if (selectedTechs.value.length > 0) {
      const hasTech = project.technologies?.some(t => selectedTechs.value.includes(t))
      if (!hasTech) return false
    }
    return true
  })
})

const toggleCategory = (cat) => {
  const idx = selectedCategories.value.indexOf(cat)
  if (idx === -1) selectedCategories.value.push(cat)
  else selectedCategories.value.splice(idx, 1)
}

const toggleTech = (tech) => {
  const idx = selectedTechs.value.indexOf(tech)
  if (idx === -1) selectedTechs.value.push(tech)
  else selectedTechs.value.splice(idx, 1)
}

const clearFilters = () => {
  selectedCategories.value = []
  selectedTechs.value = []
  techSearch.value = ''
}
</script>

<style scoped>
/* Any component-specific styles can go here */
</style>