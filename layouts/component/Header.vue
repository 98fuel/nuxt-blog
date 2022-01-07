<template>
  <header class="header" @scroll="scrollEvent">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <img src="https://img.xiabanlo.cn/favicon.png" alt="favicon" />
          <span>子舒的博客</span>
        </nuxt-link>
      </h1>
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
    </div>
    <p class="description">路漫漫其修远兮，吾将上下而求索！</p>
  </header>
</template>

<script>
export default {
  methods: {
    scrollEvent () {
      console.log('scroll')
    }
  }
};
</script>

<style lang="scss" scoped>
.header {
  max-width: 700px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  z-index: 9;
  border-bottom: 1px solid #eee;
  transition: all 0.2s linear;
  .site-name {
    padding: 20px 0;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h1 {
      a {
        display: flex;
        align-items: center;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        img {
          height: 40px;
        }
        span {
          display: block;
          font-size: 1.6rem;
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
  .description {
    font-size: 0.88rem;
    padding: 0 1%;
    color: rgba(0, 0, 0, 0.6);
    transition: all 0.2s linear;
  }
}
.topheader {
  padding: 0 3%;
  position: sticky;
  top: 0;
  max-width: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  backdrop-filter: blur(5px);
  .site-name {
    padding: 8px 0;
    h1 {
      a {
        span {
          font-size: 1.3rem;
        }
      }
    }
  }
  .description {
    display: none;
  }
}
@media (max-width: 520px) {
  .header {
    .site-name {
      padding: 8px 0;
      flex-direction: column;
      h1 {
        a {
          span {
            font-size: 1.3rem;
          }
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
    .description {
      display: none;
    }
  }
}
</style>
