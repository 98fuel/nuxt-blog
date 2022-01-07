<template>
  <div class="layout">
    <Header />
    <div class="container">
      <Main />
      <!-- <Aside /> -->
      
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
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
  .container {
    max-width: 700px;
    margin: 0 auto;
  }
}

</style>
