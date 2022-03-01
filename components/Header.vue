<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>子舒</span>
        </nuxt-link>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/blog/" class="nav-link" exact-active-class="current">博客</nuxt-link>
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
  position: sticky;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0 4px 6px -1px;
  backdrop-filter: blur(32px);
  z-index: 10;
  transition: all 0.2s linear;
  padding: 6px 3%;
  .site-name {
    z-index: 999;
    margin: 0 auto;
    max-width: 1100px;
    transition: all 0.2s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    h1 {
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        transition: all 0.2s linear;
        opacity: 0.9;
        padding: 0 8px;
        border-radius: 4px;
        &:hover {
          opacity: 1;
        }
        span {
          display: block;
          font-size: 19px;
          word-break: break-all;
          font-family: BodoniModa, LXGWWenKai, serif;
          font-weight: 600;
        }
      }
    }
    .nav-menu {
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
.scrollhead {
  box-shadow: rgb(0 0 0 / 10%) 0 4px 6px -1px;
}

@media (max-width: 900px) {
  .header {
    .site-name {
      margin: 0;
      padding: 0 2%;
      justify-content: center;
      h1 {
        z-index: 9;
        a {
          span {
            display: block;
          }
          img {
            display: none;
          }
        }
      }
      .nav-menu {
        margin: 0;
        position: fixed;
        left: -310px;
        top: 0;
        width: 300px;
        height: 100vh;
        background: rgb(246, 247, 248);
        flex-direction: column;
        padding-top: 20%;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
        text-align: left;
        transition: all 0.2s linear;
        .nav-link {
          display: block;
          font-size: 17px;
        }
      }
      .menu-show {
        left: -10px;
      }
    }
    .menu-icon {
      display: block;
      position: relative;
      width: 40px;
      height: 40px;
      position: absolute;
      top: 3px;
      left: 30px;
      z-index: 99999999;
      &:hover {
        cursor: pointer;
      }
      span {
        position: absolute;
        background: #666;
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
}
</style>
