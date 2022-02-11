<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>子舒</span>
          <img src="https://img.imhan.cn/author1.png" alt="logo" />
        </nuxt-link>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/" class="nav-link" exact-active-class="current">首页</nuxt-link>
        <nuxt-link to="/archives" class="nav-link" exact-active-class="current">归档</nuxt-link>
        <nuxt-link to="/tags" class="nav-link" exact-active-class="current">标签</nuxt-link>
        <nuxt-link to="/message" class="nav-link" exact-active-class="current">留言</nuxt-link>
        <nuxt-link to="/about" class="nav-link" exact-active-class="current">关于</nuxt-link>
        <a class="nav-link" href="https://love.imhan.cn" target="_blank">爱情</a>
      </div>
    </div>
    <p class="description">
      <i>路漫漫其修远兮，吾将上下而求索！</i>
    </p>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 75px;
  height: 100%;
  background-color: #2c3e50;
  box-shadow: 0 3px 5px #2c3e50;
  z-index: 10;
  .site-name {
    z-index: 999;
    padding: 20px 1%;
    margin: 0 auto;
    transition: all 0.2s linear;
    h1 {
      a {
        &:hover {
          cursor: inherit;
        }
        display: flex;
        align-items: center;
        flex-direction: column;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        img {
          height: 50px;
          border-radius: 50%;
          display: block;
          &:hover {
            transform: rotate(666turn);
            transition-delay: 0.3s;
            transition-property: all;
            transition-duration: 59s;
            transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
          }
        }
        span {
          display: block;
          font-size: 16px;
          color: #ecf0f1;
          word-break: break-all;
          font-family: BodoniModa, LXGWWenKai, serif;
          font-weight: 600;
          display: none;
        }
      }
    }
    .nav-menu {
      padding: 0;
      text-align: center;
      margin-top: 10px;
      .nav-link {
        display: inline-block;
        padding: 4px 2px;
        line-height: 30px;
        color: #ecf0f1;
        font-size: 1rem;
        font-style: inherit;
        word-break: keep-all;
        transition: all 0.2s linear;
        &:hover {
          color: #fff;
          text-decoration: underline;
        }
        &.current {
          color: #fff;
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
  .description {
    font-size: 16px;
    padding: 0 1% 14px;
    color: rgb(233, 230, 230);
    transition: all 0.2s linear;
    display: none;
    width: 100%;
    text-align: center;
  }
}

@media (max-width: 900px) {
  .header {
    width: 100%;
    height: 12vw;
    line-height: 12vw;
    box-shadow: none;
    .site-name {
      padding: 0 2%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
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
        .nav-link {
          padding: 0 4px;
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
