<template>
  <div class="layout">
    <Header />
    <div class="container">
      <Main />
      <Aside />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './component/Header'
import Main from './component/Main'
import Aside from './component/Aside'
import Footer from './component/Footer'

export default {
  components: {
    Header,
    Main,
    Aside,
    Footer
  },
  // async fetch () {

  // }
}
</script>

<style lang="scss" scoped>
.layout {
  max-width: 1000px;
  margin: 0 auto;
  background: #fff;
  box-shadow: 0 0 6px 4px rgb(0 0 0 / 5%);
  .container {
    display: flex;
    background: #f9f9f9;
  }
}
@media print, screen and (max-width: 48em) {
  .layout {
    .container {
      display: block;
    }
  }
}
@media print, screen and (max-width: 35.5em) {
  .layout {
    .container {
     
    }
  }
}
</style>
