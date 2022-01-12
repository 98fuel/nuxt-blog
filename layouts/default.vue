<template>
  <div class="layout">
    <Header />
    <div class="body">
      <div class="container">
        <Main />
        <Footer />
      </div>
      <div class="sidebar">
        <Aside />
      </div>
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
  .body {
    display: flex;
    justify-content: space-between;
    margin: 20px auto 60px;
    margin-top: -100px;
    max-width: 1000px;
    .container {
      border-radius: 4px;
      position: relative;
      height: 100%;
      max-width: 720px;
      overflow: hidden;
      flex: 1;
      padding: 10px 2%;
      z-index: 9;
      background: #fff;
      box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    }
    .sidebar {
      width: 280px;
      padding-left: 20px;
    }
  }
}
@media (max-width: 1020px) {
  .layout {
    .body {
      margin-left: 4px;
      margin-right: 4px;
    }
  }
}
@media (max-width: 900px) {
  .layout {
    .body {
      display: block;
      .container {
        max-width: 100%;
        width: 100%;
      }
      .sidebar {
        margin-top: 20px;
        padding: 0;
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
</style>
