<template>
  <TheLayout>
    <ui-container class="w-full grid grid-flow-row grid-cols-1full desktop:grid-cols-2">
      <div class="w-full mobile:row-start-2">
        <h1 class="my-5 text-2xl desktop:mt-0">
          {{ offer.name }}
        </h1>

        <del
          v-if="offer.fullPrice"
          class="text-gray-600"
        >{{ offer.displayFullPrice }}</del>
        <strong class="block text-2xl">
          {{ offer.displayPrice }}
        </strong>

        <div class="flex flex-wrap my-5 gap-2">
          <ui-tag
            v-for="stock in offer.stock"
            :key="stock.size"
            :variant="stock.count ? 'default' : 'disabled'"
            :class="{ 'line-through': stock.count === 0 }"
          >
            <strong>{{ stock.size }}</strong> | {{ tagline(stock.count) }}
          </ui-tag>
        </div>

        <a
          :href="`https://wa.me/5512991552955?text=${message}`"
          target="_blank"
          class="block px-5 py-3 font-semibold text-center text-white uppercase bg-primary hover:bg-secondary transition-colors"
        >
          <i class="fab fa-whatsapp fa-lg"></i> Quero este
        </a>

        <p class="mt-5">
          {{ offer.description }}
        </p>
      </div>

      <SpotlightImage
        :image-list="offer.imageList"
        class="w-full row-start-1"
      />
    </ui-container>
  </TheLayout>
</template>

<script>
import { offerFormatter } from '~/utils'
import SpotlightImage from '~/components/SpotlightImage.vue'

export default {
  name: 'Offer',
  metaInfo() {
    return {
      title: this.offer.name,
    }
  },
  components: {
    SpotlightImage,
  },
  computed: {
    offer() {
      return offerFormatter(this.$page.offer)
    },
    message() {
      const {
        offer,
        $page: { metadata: { siteUrl } }
      } = this

      const currentPageLink = `${siteUrl}${offer.path}`

      return encodeURIComponent(
        `Oi, gostaria de comprar o "${offer.name.trim()}" (por ${offer.displayPrice}).\n\n${currentPageLink}`
      )
    },
  },
  methods: {
    tagline(quantity) {
      if (quantity === 0) {
        return 'Esgotado'
      }

      if (quantity === 1) {
        return 'Ultima unidade'
      }

      if (quantity <= 3) {
        return `Ultimas ${quantity} unidades`
      }

      return `${quantity} unidades`
    },
  }
};
</script>

<page-query>
query ($id: ID!) {
  metadata {
    siteUrl
  }
  offer(id: $id) {
    id
    name
    path
    description
    fullPrice
    price
    stock {
      size
      count
    }
    imageList {
      src
      alt
    }
  }
}
</page-query>
