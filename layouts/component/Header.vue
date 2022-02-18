<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>子舒的博客</span>
        </nuxt-link>
      </h1>
      <div class="nav-menu">
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
  background-color: #e8ecf3;
  backdrop-filter: blur(32px);
  z-index: 10;
  transition: all 0.2s linear;
  .site-name {
    z-index: 999;
    margin: 0 auto;
    max-width: 1000px;
    transition: all 0.2s linear;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      a {
        display: flex;
        align-items: center;
        flex-direction: column;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        color: rgba(0, 0, 0, 0.8);
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
      padding: 7px 0;
      text-align: center;
      display: flex;
      .nav-link {
        display: block;
        padding: 4px 8px;
        color: #333333a1;
        font-size: 16px;
        font-style: inherit;
        word-break: keep-all;
        transition: all 0.2s linear;
        &:hover {
          color: #333;
          text-decoration: underline;
        }
        &.current {
          color: #333;
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
  .menu-icon {
    display: none;
  }
}
.scrollhead {
  box-shadow: 0 10px 20px rgb(0 0 0 / 10%);
}

@media (max-width: 900px) {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 6px 5%;
    .site-name {
      margin: 0;
      padding: 0 2%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        z-index: 9;
        a {
          span {
            display: block;
            font-size: 1.3rem;
          }
          img {
            display: none;
          }
        }
      }
      .nav-menu {
        margin: 0;
        position: fixed;
        left: -60%;
        top: 0;
        width: 60%;
        height: 100vh;
        background: rgb(246, 247, 248);
        flex-direction: column;
        padding-top: 14%;
        box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%);
        padding-left: 20%;
        text-align: left;
        transition: all 0.2s linear;
        .nav-link {
          display: inline-block;
          padding: 6px 4px;
          font-size: 16px;
        }
      }
      .menu-show {
        left: 0;
      }
    }
    .menu-icon {
      display: block;
      position: relative;
      width: 30px;
      height: 17px;
      span {
        position: absolute;
        background: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 2px;
        transition: all 0.2s linear;
      }
      span:nth-child(1) {
        top: 0;
      }
      span:nth-child(2) {
        top: 50%;
      }
      span:nth-child(3) {
        top: 100%;
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
