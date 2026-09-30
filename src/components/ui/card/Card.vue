<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <div data-slot="card" :class="cn('flex flex-col overflow-hidden rounded-lg bg-card text-card-foreground', props.class)">
    <slot />
  </div>
</template>
