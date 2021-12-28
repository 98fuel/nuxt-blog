<template>
  <main class="main">
    <Nuxt />
  </main>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main {
  width: 75%;
}
@media print, screen and (max-width: 48em) {
  .main {
    width: 100%;
    padding-right: 15px;
  }
}
@media print, screen and (max-width: 35.5em) {
  .main {
    padding-right: 0;
  }
}
</style>
