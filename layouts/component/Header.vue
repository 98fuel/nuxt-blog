<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">子舒的博客</nuxt-link>
      </h1>
      <p class="description">
        路漫漫其修远兮，吾将上下而求索！
      </p>
    </div>
    <div class="nav-menu">
      <nuxt-link to="/" class="nav-link" exact-active-class="current">
        <i class="fa fa-home"> 首页</i>
      </nuxt-link>
      <nuxt-link to="/archives" class="nav-link" exact-active-class="current">
        <i class="fa fa-archive"> 归档</i>
      </nuxt-link>
      <!-- <nuxt-link to="/tags" class="nav-link" exact-active-class="current">
        <i class="fa fa-tag"> 标签</i>
      </nuxt-link> -->
      <nuxt-link to="/about" class="nav-link" exact-active-class="current">
        <i class="fa fa-user"> 关于</i>
      </nuxt-link>
      <!-- <nuxt-link to="/history" class="nav-link" exact-active-class="current">
        <i class="fa fa-book"> 历史</i>
      </nuxt-link> -->
      <nuxt-link to="/message" class="nav-link" exact-active-class="current">
        <i class="fa fa-comments"> 留言</i>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  padding: 30px 0 0;
  text-align: center;
  border-bottom: 1px solid #ddd;
  position: relative;
  background-image: linear-gradient(to right, #2E4C6D, #DADDFC);
  .site-name {
    margin-bottom: 20px;
    .logo {
      display: block;
      font-size: 26px;
      font-family: "Times New Roman", Georgia, Times, sans-serif;
      color: #000;
      word-break: break-all;
      &:hover {
        opacity: 0.9;
      }
    }
    .description {
      margin: 0.2em 0 0;
      color: #000;
    }
  }
  .nav-menu {
    margin: 10px 0 2px;
    padding: 0;
    .nav-link {
      padding: 3px 20px 3px;
      line-height: 30px;
      color: #444;
      font-size: 16px;
      border: 1px solid transparent;
      &:hover {
        color: #fff;
        border-bottom-color: #fff;
      }
      &.current {
        color: #fff;
        border-bottom-color: #fff;
      }
    }
  }
}
@media print, screen and (max-width: 48em) {
  .header {
    .site-name {
      margin-bottom: 20px;
      text-align: center;
    }
    .nav-menu {
      position: relative;
      text-align: center;
      justify-content: center;
      flex-wrap: wrap;
      .nav-link {
        padding: 0 15px;
        line-height: 27px;
        height: 27px;
        font-size: 13px;
      }
    }
  }
}
</style>
