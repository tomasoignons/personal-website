<template>
  <div class="logo-band-container w-screen overflow-hidden bg-base-100 py-4 border-gray-800 border-t border-b h-20 flex items-center">
    <div class="logo-band flex items-center gap-8" ref="logoBand">
      <!-- Duplicate the logos multiple times for seamless scrolling -->
      <template v-for="setIndex in 3" :key="`set-${setIndex}`">
        <div 
          v-for="(logo, index) in logosData" 
          :key="`logo-${setIndex}-${index}`" 
          class="logo-item flex-shrink-0 shadow-md"
        >
          <img 
            :src="logo.image" 
            :alt="logo.alt"
            class="h-8 md:h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
            @error="handleImageError"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import logosData from '@/data/logos.json'

const logoBand = ref(null)
let animationId = null
let position = 0
let singleSetWidth = 0

const animate = () => {
  if (!logoBand.value) return

  // Move at 100px per second = 100/60 pixels per frame at 60fps
  position -= 50 / 60
  
  // Reset position when we've scrolled exactly one set width
  if (Math.abs(position) >= singleSetWidth) {
    position = position + singleSetWidth
  }
  
  logoBand.value.style.transform = `translateX(${position}px)`
  animationId = requestAnimationFrame(animate)
}

const handleImageError = (event) => {
  // Replace with a placeholder if image fails
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2NjYyIvPjwvc3ZnPg=='
}

onMounted(() => {
  // Calculate the width of one complete set of logos
  if (logoBand.value) {
    // Wait for next tick to ensure DOM is fully rendered
    setTimeout(() => {
      if (logoBand.value) {
        const firstChild = logoBand.value.children[0]
        const lastChildOfFirstSet = logoBand.value.children[logosData.length - 1]
        
        if (firstChild && lastChildOfFirstSet) {
          // Calculate width of one set (including gap)
          const firstRect = firstChild.getBoundingClientRect()
          const lastRect = lastChildOfFirstSet.getBoundingClientRect()
          singleSetWidth = lastRect.right - firstRect.left // 64px is the gap (gap-16 = 4rem = 64px)
          
          animate()
        }
      }
    }, 100)
  }
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
})
</script>

<style scoped>
.logo-band-container {
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
  max-width: none;
}

.logo-band {
  will-change: transform;
}

.logo-item {
  min-width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
