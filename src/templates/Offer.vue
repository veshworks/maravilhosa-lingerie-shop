<template>
  <Layout>
    {{ $page.offer.name }}

    <pre><code>{{ $page }}</code></pre>
  </Layout>
</template>

<script>
export default {
  name: 'Offer',
};
</script>

<page-query>
query ($id: ID!) {
  offer(id: $id) {
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
</page-query>
