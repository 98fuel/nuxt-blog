<template>
  <div class="index">
    <div class="index-header">
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
    </div>
    <div class="wrapper">
      <div class="archive">
        <div class="article-content markdown-body" v-html="article.html"></div>
      </div>
    </div>
    <div class="footer">
      <div>
        © 2020 -2022 ·
        <a href="https://beian.miit.gov.cn/" target="_blank">
          <span>浙ICP备2022002453号-1</span>
        </a>
        <br />Powered by
        <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>
        &
        <a href="https://github.com/imhan0cn/nuxt-blog">Github</a>
        &
        <a href="/feed.xml" target="_blank">Rss</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ params }) {
    // 调用 index.md 内的数据
    const article = await import(`~/content/index.md`);
    return {
      article
    };
  },
}
</script>

<style lang="scss" scoped>
.index {
  position: absolute;
  top: 0;
  width: 100%;
  padding-bottom: 100px;
  min-height: 100vh;
  background: #001522;
  .index-header {
    position: sticky;
    left: 0;
    top: 0;
    width: 100%;
    background-color: #001522;
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
          color: rgba(221, 225, 227, 0.8);
          &:hover {
            opacity: 1;
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
        .nav-link {
          text-align: center;
          width: 100%;
          color: rgba(221, 225, 227, 0.8);
          font-style: inherit;
          word-break: keep-all;
          padding: 6px 4px;
          box-sizing: border-box;
          font-size: 16px;
          &:hover {
            color: #fff;
            text-decoration: underline;
            opacity: 0.9;
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
  }
  .wrapper {
    box-shadow: none;
    border: none;
    background: #001522;
    margin: 0;
    .archive {
      padding: 30px 4% 15px !important;
      max-width: 800px;
      margin: 0 auto;
      .article-content {
        font-size: inherit;
        line-height: 2;
        color: rgba(221, 225, 227, 0.8) !important;
        margin-top: 20px;
      }
    }
  }
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    color: rgba(221, 225, 227, 0.8) !important;
    font-size: 14px;
    padding-bottom: 16px;
    a {
      color: rgba(221, 225, 227, 0.8) !important;
    }
  }
}

@media (max-width: 900px) {
  .index {
    .index-header {
      .site-name {
        margin: 0;
        padding: 0 2%;
        justify-content: center;
        flex-direction: column;
        h1 {
          z-index: 9;
          a {
            span {
              display: block;
            }
          }
        }
        .nav-menu {
          width: 100%;
          display: flex;
          justify-content: space-between;
          .nav-link {
            display: block;
            font-size: 17px;
          }
        }
      }
    }
    .wrapper {
      .archive {
        padding-top: 16px !important;
      }
    }
  }
}
</style>