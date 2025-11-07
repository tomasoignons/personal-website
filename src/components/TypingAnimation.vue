<template>
  <div class="typing-animation text-primary text-sm md:text-base font-medium h-6 md:h-8">
    <span>{{ displayedText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const phrases = [
  'Computer Science',
  'DevOps',
  'Aspiring Entrepreneur'
]

const displayedText = ref('')
const currentPhraseIndex = ref(0)
const isDeleting = ref(false)
const typingSpeed = ref(100)
let typingTimeout = null

const type = () => {
  const currentPhrase = phrases[currentPhraseIndex.value]
  
  if (isDeleting.value) {
    // Delete character
    displayedText.value = currentPhrase.substring(0, displayedText.value.length - 1)
    typingSpeed.value = 50
    
    if (displayedText.value === '') {
      isDeleting.value = false
      currentPhraseIndex.value = (currentPhraseIndex.value + 1) % phrases.length
      typingSpeed.value = 500 // Pause before typing next phrase
    }
  } else {
    // Type character
    displayedText.value = currentPhrase.substring(0, displayedText.value.length + 1)
    typingSpeed.value = 100
    
    if (displayedText.value === currentPhrase) {
      typingSpeed.value = 2000 // Pause before deleting
      isDeleting.value = true
    }
  }
  
  typingTimeout = setTimeout(type, typingSpeed.value)
}

onMounted(() => {
  typingTimeout = setTimeout(type, 500)
})

onUnmounted(() => {
  if (typingTimeout) {
    clearTimeout(typingTimeout)
  }
})
</script>

<style scoped>
.typing-animation {
  min-height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cursor {
  animation: blink 1s infinite;
  margin-left: 2px;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>
