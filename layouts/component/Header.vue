<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>不如吃茶去</span>
        </nuxt-link>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/" class="author">
          <img src="https://img.imhan.cn/author.png" alt="author" />
          <span>【子舒】</span>
        </nuxt-link>
        <nuxt-link to="/" class="nav-link" exact-active-class="current">首页</nuxt-link>
        <nuxt-link to="/archives/" class="nav-link" exact-active-class="current">归档</nuxt-link>
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
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 4px 6px -1px;
  backdrop-filter: blur(32px);
  z-index: 10;
  transition: all 0.2s linear;
  padding: 6px 5%;
  .site-name {
    z-index: 999;
    margin: 0 auto;
    max-width: 1000px;
    transition: all 0.2s linear;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    h1 {
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0.6);
        transition: all 0.2s linear;
        &:hover {
          color: #000;
        }
        span {
          display: block;
          font-size: 22px;
          word-break: break-all;
          font-family: BodoniModa, LXGWWenKai, serif;
          font-weight: 600;
        }
      }
    }
    .nav-menu {
      margin: 0;
      position: fixed;
      left: -300px;
      top: 0;
      width: 300px;
      height: 100vh;
      background: rgb(246, 247, 248);
      flex-direction: column;
      padding-top: 6%;
      box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
      text-align: left;
      transition: all 0.2s linear;
      .author {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
        img {
          max-width: 86px;
          border-radius: 50%;
          transition: all 0.2s linear;
          &:hover {
            box-shadow: 0 5px 10px rgb(0 0 0 / 40%);
          }
        }
        span {
          color: #666;
          font-size: 18px;
        }
      }
      .nav-link {
        text-align: center;
        width: 100%;
        display: block;
        color: #333333d6;
        font-style: inherit;
        word-break: keep-all;
        transition: all 0.2s linear;
        // font-family: 'Noto Sans SC', sans-serif;
        padding: 6px 4px;
        font-size: 17px;
        &:hover {
          color: #fff;
          // text-decoration: underline;
          background: #2b2b2bcb;
        }
        &.current {
          color: #fff;
          // text-decoration: underline;
          background: #2b2b2b;
        }
        i {
          &::before {
            margin-right: 4px;
          }
        }
      }
    }
    .menu-show {
      left: 0;
    }
  }
  .menu-icon {
    display: block;
    position: relative;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 6px;
    left: 30px;
    z-index: 99999999;
    &:hover {
      cursor: pointer;
    }
    span {
      position: absolute;
      background: rgba(0, 0, 0, 0.8);
      width: 30px;
      height: 3px;
      transition: all 0.2s linear;
      border-radius: 30px;
    }
    span:nth-child(1) {
      top: 28%;
    }
    span:nth-child(2) {
      top: 50%;
    }
    span:nth-child(3) {
      top: 72%;
    }
  }
  .menu-icon-show {
    span:nth-child(1) {
      top: 50%;
      transform: rotate(-45deg);
    }
    span:nth-child(2) {
      display: none;
    }
    span:nth-child(3) {
      top: 50%;
      transform: rotate(45deg);
    }
  }
}
.scrollhead {
  box-shadow: rgb(0 0 0 / 10%) 0 4px 6px -1px;
}

@media (max-width: 900px) {
  .header {
    .site-name {
      margin: 0;
      padding: 0 2%;
      h1 {
        z-index: 9;
        a {
          color: #000;
          span {
            display: block;
          }
          img {
            display: none;
          }
        }
      }
      .nav-menu {
        padding-top: 20%;
        width: 60%;
        left: -60%;
        .nav-link {
        }
      }
      .menu-show {
        left: 0;
      }
    }
    .menu-icon {
    }
  }
}
</style>
