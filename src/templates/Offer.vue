<template>
  <Layout>
    <ui-container class="w-full grid grid-flow-row grid-cols-1full">
      <div class="w-full row-start-2">
        <h1 class="my-5 text-2xl">
          {{ $page.offer.name }}
        </h1>

        <strong class="text-2xl">
          {{ $options.price.format($page.offer.fullPrice) }}
        </strong>

        <ui-tag class="my-5">
          {{ tagline }}
        </ui-tag>

        <p>
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
  price,
  computed: {
    tagline() {
      if (this.$page.offer.stock === 0) {
        return 'Esgotado'
      }

      if (this.$page.offer.stock === 1) {
        return 'Ultima unidade'
      }

      return `Ultimas ${this.$page.offer.stock} unidades`
    },
  },
};
</script>

<page-query>
query ($id: ID!) {
  offer(id: $id) {
    id
    name
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
