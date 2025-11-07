<template>
  <div class="timeline-container">
    <div 
      v-for="(item, index) in items" 
      :key="item.id"
      class="timeline-item relative pl-8 pb-12 last:pb-0"
    >
      <!-- Vertical Line -->
      <div 
        v-if="index < items.length - 1"
        class="absolute left-[11px] top-6 bottom-0 w-0.5 bg-primary/30"
      ></div>
      
      <!-- Dot -->
      <div class="absolute left-0.5 top-1 w-5 h-5 rounded-full border-4 border-primary bg-base-100 z-10"></div>
      
      <!-- Content item.institution || item.company -->
      <div class="animate-on-scroll">
        <div class="flex flex-wrap items-start justify-between gap-2 mb-2">
          <h3 class="text-xl font-bold text-base-content">{{ item.degree || item.position }}</h3>
        </div>
        <h4 class="text-lg text-primary font-semibold mb-2 flex items-center gap-2">{{ item.institution || item.company }}<span class="text-gray-400 text-xs">|</span><span class="text-xs text-gray-400">{{ item.period }}</span></h4>
        <p class="text-base-content/70 mb-2">{{ item.description }}</p>
        <p class="text-sm text-base-content/50 flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
          {{ item.location }}
        </p>
        <div v-if="item.current" class="badge badge-success badge-sm mt-2">Current</div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style scoped>
.timeline-item:hover .absolute.left-0 {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}
</style>
