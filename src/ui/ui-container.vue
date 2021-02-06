<template>
  <component :is="tag" class="container mx-auto px-4">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'ui-container',
  props: {
    tag: {
      type: String,
      default: 'div'
    }
  }
}
</script>
