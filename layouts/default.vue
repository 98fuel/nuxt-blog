<template>
  <div class="layout">
    <Header />
    <div class="container">
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './component/Header'
import Main from './component/Main'
import Footer from './component/Footer'

export default {
  components: {
    Header,
    Main,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  margin-left: 1%;
  margin-right: 1%;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #d6d6d6;
  box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
  .container {
    display: flex;
  }
}
@media print, screen and (max-width: 48em) {
  .layout {
    .container {
      display: block;
    }
  }
}
</style>
