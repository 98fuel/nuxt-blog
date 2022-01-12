<template>
  <header class="header" @scroll="scrollEvent">
    <div class="bg"></div>
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <img src="https://cdn.jsdelivr.net/gh/Nov8nana/cdn/img/favicon1.png" />
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
    <p class="description">
      <i>路漫漫其修远兮，吾将上下而求索！</i>
    </p>
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
  position: relative;
  max-width: 100%;
  height: 240px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .bg {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 240px;
    background-image: linear-gradient(
      to bottom,
      #1a374d,
      rgba(64, 104, 130, 0)
    );
    // box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    z-index: -1;
  }
  .site-name {
    z-index: 999;
    padding: 8px 3%;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-image: linear-gradient(to right, #1a374d, #406882);
    position: fixed;
    width: 100%;
    top: 0;
    transition: all 0.2s linear;
    box-shadow: 0 5px 10px rgb(0 0 0 / 5%);
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
          font-size: 1.3rem;
          color: #fff;
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
        color: #eee;
        font-size: 1rem;
        font-style: inherit;
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
  .description {
    font-size: 16px;
    padding: 0 1% 14px;
    color: rgb(233, 230, 230);
    transition: all 0.2s linear;
    display: block;
    width: 100%;
    text-align: center;
  }
}
.topheader {
  .site-name {
    box-shadow: 0 5px 10px rgb(0 0 0 / 20%);
    h1 {
    }
  }
  .description {
  }
}
@media (max-width: 520px) {
  .header {
    align-items: flex-start;
    .site-name {
      flex-direction: column;
      position: relative;
      h1 {
        padding: 20px 0;
        a {
          span {
            font-size: 1.3rem;
          }
        }
      }
      .nav-menu {
        position: sticky;
        top: 0;
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
