<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <p data-slot="card-description" :class="cn('text-sm text-muted-foreground', props.class)">
    <slot />
  </p>
</template>
