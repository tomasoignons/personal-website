<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <div data-slot="card-content" :class="cn('flex flex-auto flex-col gap-2 p-6', props.class)">
    <slot />
  </div>
</template>
