<template>
  <Layout>
    <div class="grid desktop:grid-cols-3 grid-flow-rows gap-4">
      <div
        v-for="({ node: offer }) in $static.allOffer.edges"
        :key="offer.id"
        class=" border border-gray"
      >
        <g-image
          :alt="offer.imageList[0].alt"
          :src="offer.imageList[0].image"
        />

        <strong>
          <a :href="offer.path">
            {{ offer.name }}
          </a>
        </strong>

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
