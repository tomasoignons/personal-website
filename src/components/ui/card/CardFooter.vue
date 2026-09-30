<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <div data-slot="card-footer" :class="cn('flex flex-wrap items-center gap-2', props.class)">
    <slot />
  </div>
</template>
