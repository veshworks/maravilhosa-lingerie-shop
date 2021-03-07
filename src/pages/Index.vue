<template>
  <TheLayout>
    <OfferList :offer-list="allOffers" />
  </TheLayout>
</template>

<script>
import OfferList from '~/components/OfferList'
import { allOffersFormatter } from '~/utils'

export default {
  components: {
    OfferList,
  },
  computed: {
    allOffers() {
      return allOffersFormatter(this.$static.allOffer);
    },
  }
}
</script>

<static-query>
query {
  allOffer(limit: 9, filter: { isFeatured: { eq: true } }) {
    edges {
      node {
        id
        path
        name
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
  }
}
</static-query>
