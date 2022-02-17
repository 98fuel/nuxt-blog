<template>
  <div class="layout">
    <Header />
    <div class="body">
      <!-- <div class="sidebar">
        <Aside />
      </div> -->
      <div class="container">
        <Main />
        <Footer />
      </div>
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
  // background: #c9cacc url(https://img.imhan.cn/bg.webp) no-repeat fixed center;
  background: #f6f7f8;
  background-size: cover;
  min-height: 100vh;
  .body {
    position: relative;
    display: flex;
    justify-content: space-between;
    max-width: 800px;
    margin: 0 auto;
    .container {
      max-width: 800px;
      padding-top: 20px;
      border-radius: 4px;
      position: relative;
      height: 100%;
      // overflow: hidden;
      flex: 1;
    }
    .footer {
      width: 100%;
    }
    .sidebar {
      width: 260px;
      padding-right: 20px;
    }
  }
}

@media (max-width: 900px) {
  .layout {
    .body {
      padding: 0;
      display: block;
      margin-left: 1%;
      margin-right: 1%;
      .container {
        max-width: 100%;
        width: 100%;
      }
      .sidebar {
        width: 100%;
        padding: 0;
        padding-top: 6px;
      }
    }
  }
}
</style>
