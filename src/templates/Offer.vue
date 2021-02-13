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

        <ui-tag class="my-5">
          {{ tagline }}
        </ui-tag>

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
  components: {
    SpotlightImage,
  },
  computed: {
    price() {
      return price.format(this.$page.offer.fullPrice)
    },
    tagline() {
      if (this.$page.offer.stock === 0) {
        return 'Esgotado'
      }

      if (this.$page.offer.stock === 1) {
        return 'Ultima unidade'
      }

      return `Ultimas ${this.$page.offer.stock} unidades`
    },
    message() {
      return encodeURIComponent(`Oi, gostaria de comprar o "${this.$page.offer.name}" (por ${this.price}).\n\n${this.$page.metadata.siteUrl}${this.$page.offer.path}`)
    },
  },
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
    stock
    imageList {
      image
      alt
    }
  }
}
</page-query>
