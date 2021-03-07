<template>
  <ui-container class="grid desktop:grid-cols-3 grid-flow-rows gap-4">
    <div
      v-for="offer in offerList"
      :key="offer.id"
      class="border border-gray"
    >
      <g-link :to="offer.path">
        <g-image
          :alt="offer.imageList[0].alt"
          :src="offer.imageList[0].src"
          class="object-cover w-full h-96"
        />
      </g-link>

      <div class="p-4 text-center">
        <strong class="font-semibold">
          <g-link :to="offer.path">
            {{ offer.name }}
          </g-link>
        </strong>

        <strong class="block mt-3 text-lg">
          {{ offer.displayPrice }}
        </strong>

        <div class="flex flex-wrap justify-center mt-3 gap-2">
          <ui-tag
            v-for="stock in offer.stock"
            :key="stock.size"
            :variant="stock.count ? 'default' : 'disabled'"
            :class="{ 'line-through': stock.count === 0 }"
          >
            <strong>{{ stock.size }}</strong>
          </ui-tag>
        </div>
      </div>
    </div>
  </ui-container>
</template>

<script>
export default {
  name: 'OfferList',
  props: {
    offerList: {
      type: Array,
      required: true,
    },
  },
};
</script>
