<script setup>
import { Primitive } from 'reka-ui'
import { cn } from '@/lib/utils'
import { badgeVariants } from '.'

const props = defineProps({
  variant: { type: String, default: 'default' },
  size: { type: String, default: 'default' },
  class: { type: null, default: undefined },
  as: { type: [String, Object, Function], default: 'span' },
  asChild: { type: Boolean, default: false },
})
</script>

<template>
  <Primitive
    data-slot="badge"
    :as="as"
    :as-child="asChild"
    :class="cn(badgeVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
