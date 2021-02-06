<template>
  <component
    :is="tag"
    class="font-bold"
    :class="[sizeClass]"
  >
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ui-title',
  props: {
    tag: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'md'
    }
  },
  computed: {
    sizeClass () {
      return {
        xxs: 'text-base',
        xs: 'text-lg',
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-4xl'
      }[this.size]
    }
  }
}
</script>
