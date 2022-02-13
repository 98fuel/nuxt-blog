<template>
  <div class="layout">
    <Header />
    <div class="body">
      <!-- <div class="sidebar">
        <Aside />
      </div>-->
      <div class="container">
        <Main />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './component/Header'
import Main from './component/Main'
// import Aside from './component/Aside'
import Footer from './component/Footer'

export default {
  components: {
    Header,
    Main,
    // Aside,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
.layout {
  .body {
    margin-left: 75px;
    position: relative;
    min-height: 100vh;
    padding-bottom: 100px;
    .container {
      padding-top: 20px;
      border-radius: 4px;
      position: relative;
      height: 100%;
      max-width: 700px;
      margin: 0 auto;
      overflow: hidden;
      flex: 1;
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    .sidebar {
      width: 260px;
      padding-right: 20px;
    }
    .toc {
      width: 300px;
      display: none;
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
      padding: 0;
      margin-top: 12vw;
      padding-bottom: 140px;
      .container {
        max-width: 100%;
        width: 100%;
        padding-top: 0;
      }
      .sidebar {
        margin-top: 20px;
        padding: 0;
        max-width: 100%;
        width: 100%;
      }
      .toc {
        max-width: 100%;
        width: 100%;
      }
    }
  }
}
</style>
