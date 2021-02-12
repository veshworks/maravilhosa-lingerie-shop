<template>
  <Layout>
    {{ $page.offers.name }}

    <pre><code>{{ $page }}</code></pre>
  </Layout>
</template>

<script>
export default {
  name: 'Offers',
};
</script>

<page-query>
query ($id: ID!) {
  offers(id: $id) {
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
