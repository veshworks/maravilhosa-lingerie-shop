<template>
  <Layout>
    <ui-container class="w-full grid grid-flow-row grid-cols-1full">
      <div class="w-full row-start-2">
        <h1 class="my-5 text-2xl">
          {{ $page.offer.name }}
        </h1>

        <strong class="text-2xl">
          {{ price }}
        </strong>

        <div class="flex flex-wrap my-5 gap-2">
          <ui-tag
            v-for="stock in $page.offer.stock"
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
          {{ $page.offer.description }}
        </p>
      </div>

      <SpotlightImage
        :image-list="$page.offer.imageList"
        class="w-full row-start-1"
      />
    </ui-container>
  </Layout>
</template>

<script>
import SpotlightImage from '~/components/SpotlightImage.vue'
import { price } from '~/utils'

export default {
  name: 'Offer',
  metaInfo() {
    return {
      title: this.$page.offer.name,
    }
  },
  components: {
    SpotlightImage,
  },
  computed: {
    price() {
      return price.format(this.$page.offer.fullPrice)
    },
    message() {
      return encodeURIComponent(`Oi, gostaria de comprar o "${this.$page.offer.name.trim()}" (por ${this.price}).\n\n${this.$page.metadata.siteUrl}${this.$page.offer.path}`)
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
    stock {
      size
      count
    }
    imageList {
      image
      alt
    }
  }
}
</page-query>
