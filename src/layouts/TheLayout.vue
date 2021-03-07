<template>
  <div class="container mx-auto">
    <header class="flex justify-center py-5 bg-white border-b">
      <g-link to="/">
        <g-image
          :alt="$static.metadata.siteName"
          src="~/assets/maravilhosa-logo.png"
          width="290"
          height="119"
        />
      </g-link>
    </header>

    <nav class="flex justify-center text-xs font-semibold uppercase bg-white border-b">
      <g-link
        to="/"
        class="p-3 hover:text-secondary transition-colors"
        exact-active-class="text-primary"
      >
        Destaques
      </g-link>

      <g-link
        v-for="({ node }) in $static.allCategories.edges"
        :key="node.category"
        :to="node.path"
        class="p-3 hover:text-secondary transition-colors"
        exact-active-class="text-primary"
      >
        {{ node.category }}
      </g-link>
    </nav>

    <div class="mt-8">
      <slot/>
    </div>

    <footer class="flex flex-col items-center py-5 mt-16 gap-4">
      <g-link to="/">
        <g-image
          :alt="$static.metadata.siteName"
          src="~/assets/maravilhosa-logo.png"
          width="290"
          height="119"
        />
      </g-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TheLayout',
}
</script>

<static-query>
query {
  metadata {
    siteName
  }
  allCategories {
    edges{
      node {
        category
        path
      }
    }
  }
}
</static-query>
