<template>
  <div class="layout">
    <Header />
    <div class="body">
      <div class="sidebar">
        <Aside />
      </div>
      <div class="container">
        <Main />
      </div>
      <div class="toc">
      
      </div>
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
  .body {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 1%;
    max-width: 1280px;
    margin-top: 16px;
    .container {
      border-radius: 4px;
      position: relative;
      height: 100%;
      max-width: 700px;
      overflow: hidden;
      flex: 1;
    }
    .sidebar {
      width: 260px;
      padding-right: 20px;
    }
    .toc {
      width: 300px;
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
