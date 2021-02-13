<template>
  <div class="container mx-auto">
    <header class="flex justify-center py-5 mb-8 bg-white border-b">
      <g-link to="/">
        <g-image
          :alt="$static.metadata.siteName"
          src="~/assets/maravilhosa-logo.png"
          width="290"
          height="119"
        />
      </g-link>
    </header>

    <slot/>

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

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
