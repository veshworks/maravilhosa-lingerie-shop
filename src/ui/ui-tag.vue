<template>
  <div
    class="px-3 py-2 text-xs uppercase border border-gray-300 w-max"
    :class="{
      'bg-gray-100 text-gray-400': 'disabled' === variant,
    }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ui-tag',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: value => [
        'default',
        'disabled',
      ].includes(value),
    },
  },
};
</script>
