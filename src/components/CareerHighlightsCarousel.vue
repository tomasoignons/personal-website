<template>
  <div class="carousel-container relative">
    <!-- Carousel Track -->
    <div class="overflow-hidden">
      <div 
        class="carousel-track flex gap-6"
        :class="{ 'transition-transform duration-500 ease-in-out': isTransitioning }"
        :style="{ transform: `translateX(-${slideOffset}%)` }"
        @transitionend="handleTransitionEnd"
      >
        <div 
          v-for="(item, index) in visibleItems" 
          :key="`${item.id}-${index}`"
          class="carousel-card flex-shrink-0"
          :style="cardStyle"
        >
          <div class="card bg-base-100 shadow-xl hover-lift h-full">
            <figure class="h-48 overflow-hidden">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover"
                @error="handleImageError"
              />
            </figure>
            <div class="card-body">
              <div class="flex justify-between items-start mb-2">
                <span class="badge badge-primary badge-sm">{{ item.category }}</span>
                <span class="text-xs text-base-content/60">{{ item.date }}</span>
              </div>
              <h3 class="card-title text-base-content text-lg">{{ item.title }}</h3>
              <p class="text-base-content/70 text-sm line-clamp-5">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons at Bottom -->
    <div class="flex justify-center gap-4 mt-6">
      <button 
        @click="prev"
        class="btn btn-circle btn-ghost"
        :disabled="isTransitioning"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
        </svg>
      </button>
      <button 
        @click="next"
        class="btn btn-circle btn-ghost"
        :disabled="isTransitioning"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import highlightsData from '@/data/career-highlights.json'

const highlights = highlightsData
const currentIndex = ref(0)
const isTransitioning = ref(false)
const slideOffset = ref(100 / 3) // Start at middle position (33.333%)
const isMobile = ref(false)

// Number of cards visible at once (3 on desktop, 1 on mobile)
const visibleCards = computed(() => isMobile.value ? 1 : 3)

// Calculate card style based on number of visible cards
const cardStyle = computed(() => {
  const width = 100 / visibleCards.value
  const gap = visibleCards.value > 1 ? 1.5 : 0 // 1.5rem gap between cards on desktop
  return {
    width: `calc(${width}% - ${gap}rem)`
  }
})

// Helper to get item at any index (wraps around)
const getItemAtIndex = (index) => {
  const wrappedIndex = ((index % highlights.length) + highlights.length) % highlights.length
  return highlights[wrappedIndex]
}

// Always maintain 5 items in the DOM (2 before, current set of 3, 2 after for smooth transitions)
const visibleItems = computed(() => {
  const items = []
  for (let i = -1; i <= visibleCards.value + 1; i++) {
    items.push(getItemAtIndex(currentIndex.value + i))
  }
  return items
})

const next = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  slideOffset.value += 100 / visibleCards.value // Move by one card width
}

const prev = () => {
  if (isTransitioning.value) return
  
  isTransitioning.value = true
  slideOffset.value -= 100 / visibleCards.value // Move by one card width
}

const handleTransitionEnd = () => {
  isTransitioning.value = false
  
  // After transition, update currentIndex and reset slideOffset
  if (slideOffset.value > 100 / visibleCards.value) {
    // Moved right
    currentIndex.value++
    slideOffset.value = 100 / visibleCards.value
  } else if (slideOffset.value < 100 / visibleCards.value) {
    // Moved left
    currentIndex.value--
    slideOffset.value = 100 / visibleCards.value
  }
  
  // Wrap currentIndex to stay within bounds (for cleaner debugging)
  if (currentIndex.value >= highlights.length) {
    currentIndex.value = currentIndex.value % highlights.length
  } else if (currentIndex.value < 0) {
    currentIndex.value = ((currentIndex.value % highlights.length) + highlights.length) % highlights.length
  }
}

const handleImageError = (event) => {
  // Show gradient background if image fails
  event.target.style.display = 'none'
  event.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
}

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})
</script>

<style scoped>
.carousel-track {
  will-change: transform;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
