<template>
  <div class="layout">
    <Header />
    <div class="container">
      <Main />
      <!-- <Aside /> -->
      <Footer />
    </div>
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
  .container {
    border-radius: 4px;
    position: relative;
    max-width: 800px;
    margin: 20px auto 60px;
    padding: 10px 2%;
    z-index: 9;
    background: #fff;
    margin-top: -100px;
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
  }
}
@media (max-width: 820px) {
  .layout {
    .container {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
}
</style>
