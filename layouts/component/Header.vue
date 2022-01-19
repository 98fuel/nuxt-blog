<template>
  <header class="header">
    <div class="site-name">
      <h1>
        <nuxt-link class="logo" to="/">
          <span>子舒的博客</span>
        </nuxt-link>
      </h1>
      <div class="nav-menu">
        <nuxt-link to="/" class="nav-link" exact-active-class="current">Home</nuxt-link>
        <nuxt-link to="/archives" class="nav-link" exact-active-class="current">Posts</nuxt-link>
        <nuxt-link to="/tags" class="nav-link" exact-active-class="current">Tags</nuxt-link>
        <nuxt-link to="/message" class="nav-link" exact-active-class="current">Message</nuxt-link>
        <nuxt-link to="/about" class="nav-link" exact-active-class="current">About</nuxt-link>
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
  position: relative;
  border-bottom: 1px solid #eee;
  .site-name {
    z-index: 999;
    padding: 8px 1%;
    margin: 0 auto;
    // max-width: 1280px;
    max-width: 980px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.2s linear;
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
          color: #6f777d;
          word-break: break-all;
          font-family: BodoniModa, LXGWWenKai, serif;
          font-weight: 600;
          &:hover {
            color: #000;
          }
        }
      }
    }
    .nav-menu {
      padding: 0;
      .nav-link {
        padding: 10px 2px 4px;
        margin: 3px 10px 3px;
        line-height: 30px;
        color: #6f777d;
        font-size: 1rem;
        font-style: inherit;
        border: 1px solid transparent;
        &:hover {
          color: #000;
        }
        &.current {
          color: #000;
          border-bottom: 2px solid #000;
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
        text-align: center;
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
