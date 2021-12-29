<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">子舒的博客</nuxt-link>
      </h1>
      <!-- <p class="description">路漫漫其修远兮，吾将上下而求索！</p> -->
    </div>
    <div class="nav-menu">
      <nuxt-link to="/" class="nav-link" exact-active-class="current">
        <i>首页</i>
      </nuxt-link>

      <nuxt-link to="/archives" class="nav-link" exact-active-class="current">
        <i>归档</i>
      </nuxt-link>

      <nuxt-link to="/message" class="nav-link" exact-active-class="current">
        <i>留言</i>
      </nuxt-link>

      <nuxt-link to="/about" class="nav-link" exact-active-class="current">
        <i>关于</i>
      </nuxt-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  height: 48px;
  background-image: linear-gradient(to right, #2e4c6d, #daddfc);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 9;
  padding: 0 2%;
  box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
  .site-name {
    .logo {
      display: block;
      font-size: 1.3rem;
      color: #fff;
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
    padding: 0;
    .nav-link {
      padding: 3px 10px 3px;
      line-height: 30px;
      color: #444;
      font-size: 0.98rem;
      border: 1px solid transparent;
      &:hover {
        color: #fff;
      }
      &.current {
        color: #fff;
      }
      i {
        &::before {
          margin-right: 4px;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .nav-menu {
    .nav-link {
      i {
        font-style: inherit;
      }
    }
  }
}
@media (max-width: 350px) {
  .header {
    .site-name {
      display: none;
    }
  }
}
</style>
