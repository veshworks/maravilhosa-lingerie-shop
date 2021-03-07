<template>
  <Layout>
    <OfferList :offer-list="allOffers" />
  </Layout>
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
  allOffer {
    edges {
      node {
        id
        path
        name
        fullPrice
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
