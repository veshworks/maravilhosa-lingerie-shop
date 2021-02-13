<template>
  <Layout>
    <ui-container class="grid desktop:grid-cols-3 grid-flow-rows gap-4">
      <div
        v-for="offer in allOffer"
        :key="offer.id"
        class="border border-gray"
      >
        <g-link :to="offer.path">
          <g-image
            :alt="offer.imageList[0].alt"
            :src="offer.imageList[0].image"
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
        </div>
      </div>
    </ui-container>
  </Layout>
</template>

<script>
import { price } from '~/utils'

export default {
  computed: {
    allOffer() {
      return this.$static.allOffer.edges.map(({ node: offer }) => ({
        ...offer,
        displayPrice: price.format(offer.fullPrice),
      }))
    },
  }
}
</script>

<static-query>
query {
  allOffer {
    edges {
      node {
        id
        path
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
  }
}
</static-query>
