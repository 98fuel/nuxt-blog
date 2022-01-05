<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>子舒的博客</span>
        </nuxt-link>
      </h1>
      <p class="description">路漫漫其修远兮，吾将上下而求索！</p>
    </div>
    <div class="nav-menu">
      <nuxt-link to="/" class="nav-link" exact-active-class="current">
        <i>首页</i>
      </nuxt-link>

      <nuxt-link to="/archives" class="nav-link" exact-active-class="current">
        <i>归档</i>
      </nuxt-link>

      <nuxt-link to="/tags" class="nav-link" exact-active-class="current">
        <i>标签</i>
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
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 9;
  padding: 0 2%;
  border-bottom: 1px solid #eee;
  .site-name {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      a {
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        span {
          display: block;
          padding: 1rem 0;
          font-size: 2rem;
          color: rgba(0, 0, 0, 0.623);
          word-break: break-all;
          font-family: BodoniModa, LXGWWenKai, serif;
          font-weight: 600;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
    .description {
      margin: 0.2em 0 0;
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .nav-menu {
    padding: 0;
    .nav-link {
      padding: 3px 10px 3px;
      line-height: 30px;
      color: #a8a29e;
      font-size: 1rem;
      font-style: normal;
      border: 1px solid transparent;
      &:hover {
        color: #333;
      }
      &.current {
        color: #333;
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
  header {
    .site-name {
      .description {
        display: none;
      }
    }
    .nav-menu {
      .nav-link {
        i {
          font-style: inherit;
        }
      }
    }
  }
}
</style>
