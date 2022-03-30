<template>
  <div class="layout">
    <Header />
    <div class="opacity"></div>
    <div class="body" id="body">
      <div class="container">
        <!-- <Aside /> -->
        <Main />
      </div>
    </div>
    <Imgbig />
    <Footer />
  </div>
</template>

<script>
import Header from "./component/Header";
import Main from "./component/Main";
// import Aside from './component/Aside';
import Imgbig from "@/components/Imgbig";
import Footer from "./component/Footer";

export default {
  components: {
    Header,
    Main,
    // Aside,
    Imgbig,
    Footer,
  },
};
</script>

<style lang="scss">
.layout {
  background: #f3f3f3;
  background-size: cover;
  min-height: 100vh;
  .opacity {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 9;
  }
  .body {
    position: relative;
    margin-top: -100px;
    padding-top: 20px;
    .container {
      max-width: 850px;
      margin: 0 auto;
      padding: 20px 2% 30px;
      border-radius: 4px;
      position: relative;
      height: 100%;
      z-index: 1;
    }
  }
}

@media (max-width: 900px) {
  .layout {
    .body {
      padding: 0;
      display: block;
      margin-top: 0;
      .container {
        max-width: 100%;
        width: 100%;
        padding-top: 16px;
      }
    }
  }
}
@media (max-width: 600px) {
  .layout {
    .body {
      margin-top: 40px;
    }
  }
}
</style>
