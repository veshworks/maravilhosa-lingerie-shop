<template>
  <Layout>
    <div class="grid desktop:grid-cols-3 grid-flow-rows gap-4">
      <div
        v-for="({ node: offer }) in $static.allOffers.edges"
        :key="offer.id"
        class=" border border-gray"
      >
        <g-image
          :alt="offer.imageList[0].alt"
          :src="offer.imageList[0].image"
        />

        <g-link :href="offer.path">
          <strong>
            {{ offer.name }}
          </strong>
        </g-link>

        <p>
          {{ offer.description }}
        </p>

        <div>
          {{ offer.fullPrice }}
        </div>

        {{ offer.stock }}
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<static-query>
query {
  allOffers {
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
