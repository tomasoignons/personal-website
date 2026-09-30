<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <h3 data-slot="card-title" :class="cn('flex items-center gap-2 text-lg font-semibold', props.class)">
    <slot />
  </h3>
</template>
