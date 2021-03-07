<template>
  <TheLayout>
    <OfferList :offer-list="allCategoryOffers" />
  </TheLayout>
</template>

<script>
import OfferList from '~/components/OfferList'
import { allOffersFormatter } from '~/utils'

export default {
  name: 'Categories',
  components: {
    OfferList,
  },
  computed: {
    allCategoryOffers() {
      return allOffersFormatter(this.$page.allOffer)
    },
  },
};
</script>

<page-query>
query ($category: String) {
  allOffer(filter: { category: { eq: $category } }) {
    edges {
      node {
        id
        path
        name
        price
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
</page-query>
