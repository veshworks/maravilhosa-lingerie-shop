<template>
  <ui-container
    v-if="offerList.length > 0"
    class="grid desktop:grid-cols-3 grid-flow-rows gap-4"
  >
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

      <div class="p-4 grid grid-cols-1fr2auto gap-3">
        <strong class="font-semibold col-start-1 col-end-2">
          <g-link :to="offer.path">
            {{ offer.name }}
          </g-link>
        </strong>

        <div class="flex flex-col items-end justify-end h-100 col-start-2 col-end-3 row-start-1 row-end-3">
          <del
            v-if="offer.fullPrice"
            class="block text-sm text-gray-600"
          >{{ offer.displayFullPrice }}</del>

          <strong class="block text-lg">
            {{ offer.displayPrice }}
          </strong>
        </div>

        <div class="flex flex-wrap gap-2 col-start-1 col-end-2 row-start-2 row-end-3">
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
  <ui-container
    v-else
    class="text-center desktop:my-48"
  >
    <ui-icon :name="['fal', 'fa-heart-broken']" size="7x" />

    <strong class="block mt-6 text-xl desktop:text-2xl">Não existem itens nessa lista</strong>

    <p class="mt-8 desktop:text-lg">
      Tente selecionar outra categoria para ver outras listas.
    </p>
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
