<template>
  <div
    v-if="selected"
    class="flex flex-col gap-4"
  >
    <div class="h-96">
      <g-image
        :src="selected.src"
        :alt="selected.alt"
        class="object-contain w-full h-full"
      />
    </div>

    <div class="flex flex-wrap justify-center w-full gap-4">
      <button
        v-for="(image, index) in imageList"
        :key="index"
        @click="selectedIndex = index"
        class="flex-shrink-0 w-12 h-12"
        :class="{
          'shadow-selected': selectedIndex === index,
        }"
      >
        <g-image
          :src="image.src"
          :alt="image.alt"
          width="100"
          height="100"
          class="object-cover w-full h-full"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SpotlightImage',
  props: {
    imageList: {
      type: Array,
      required: true,
    },
  },
  data: () => ({
    selectedIndex: 0,
  }),
  computed: {
    selected() {
      return this.imageList[this.selectedIndex]
    }
  },
};
</script>
