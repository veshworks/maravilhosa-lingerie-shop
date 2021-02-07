<template>
  <div class="container mx-auto">
    <header class="flex justify-center my-5">
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
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
