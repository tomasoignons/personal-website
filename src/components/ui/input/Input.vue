<script setup>
import { cn } from '@/lib/utils'

const props = defineProps({
  class: { type: null, default: undefined },
})

const model = defineModel({ type: [String, Number] })
</script>

<template>
  <input
    v-model="model"
    data-slot="input"
    :class="cn(
      'h-10 w-full min-w-0 rounded-full border border-input bg-background px-4 text-sm text-foreground outline-none transition-colors placeholder:text-foreground/50 focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/40 disabled:cursor-not-allowed disabled:opacity-50',
      props.class,
    )"
  />
</template>
