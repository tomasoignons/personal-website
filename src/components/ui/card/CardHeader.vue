<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})
</script>

<template>
  <div data-slot="card-header" :class="cn('flex flex-col gap-2 p-6 pb-0', props.class)">
    <slot />
  </div>
</template>
