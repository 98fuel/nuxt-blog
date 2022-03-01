<template>
  <div class="index">
    <div class="index-header">
      <Header />
    </div>
    <div class="wrapper">
      <div class="archive">
        <nuxt-link to="/blog/" class="goblog">前往Blog...</nuxt-link>
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
        <a href="/feed.xml" target="_blank">rss</a>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header';

export default {
  components: {
    Header
  },
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
  position: relative;
  padding-bottom: 100px;
  min-height: 100vh;
  background: #001522;
  .index-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #001522;
    z-index: 999;
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
      .goblog {
        display: none;
      }
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
      display: none;
    }
    .wrapper {
      .archive {
        padding-top: 16px !important;
        .goblog {
          display: block;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgb(221, 225, 227);
          color: #001522;
          padding: 6px 0;
          border-radius: 4px;
          position: sticky;
          top: 16px;
          &:hover {
            opacity: 0.9;
          }
        }
      }
    }
  }
}
</style>