<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">不如吃茶去</nuxt-link>
        <span>--- 子舒的博客</span>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/" class="nav-link" exact-active-class="current">博客</nuxt-link>
        <nuxt-link to="/archives/" class="nav-link" exact-active-class="current">分类</nuxt-link>
        <nuxt-link to="/tags/" class="nav-link" exact-active-class="current">标签</nuxt-link>
        <nuxt-link to="/message/" class="nav-link" exact-active-class="current">留言</nuxt-link>
        <nuxt-link to="/about/" class="nav-link" exact-active-class="current">关于</nuxt-link>
        <nuxt-link to="/love/" class="nav-link" exact-active-class="current">爱情</nuxt-link>
      </div>
    </div>
    <div class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  backdrop-filter: blur(32px);
  z-index: 10;
  transition: all 0.1s linear;
  padding: 20px 3%;
  border-bottom: 1px solid #eee;
  background-image: linear-gradient(
    to right,
    rgb(207, 207, 206),
    rgb(119, 119, 119)
  );
  .site-name {
    z-index: 999;
    margin: 0 auto;
    max-width: 1100px;
    transition: all 0.2s linear;
    position: relative;
    h1 {
      a {
        display: inline-block;
        transition: all 0.2s linear;
        opacity: 0.9;
        padding: 0 8px;
        border-radius: 4px;
        font-size: 24px;
        word-break: break-all;
        font-family: BodoniModa, LXGWWenKai, serif;
        font-weight: 600;
        color: rgb(65, 65, 65);
        &:hover {
          opacity: 1;
        }
      }
      span {
        font-size: 16px;
      }
    }
    .nav-menu {
      margin-top: 10px;
      .nav-link {
        text-align: center;
        width: 100%;
        color: #333333d6;
        font-style: inherit;
        word-break: keep-all;
        padding: 6px 4px;
        box-sizing: border-box;
        font-size: 16px;
        &:hover {
          color: #000;
          text-decoration: underline;
          opacity: 0.9;
        }
        &.current {
          color: #000;
          text-decoration: underline;
        }
        i {
          &::before {
            margin-right: 4px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .header {
    padding: 0 3%;
    .site-name {
      margin: 0;
      padding: 10px 2%;
      h1 {
        margin-bottom: 10px;
        a {
          padding: 0;
        }
      }
      .nav-menu {
        .nav-link {
          font-size: 17px;
        }
      }
    }
  }
}
</style>
