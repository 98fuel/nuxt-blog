<template>
  <div class="wrapper">
    <article class="article" v-for="article in articles" :key="article.attributes.title">
      <h1 class="article-title">
        <nuxt-link class="link" :to="article.path">{{ article.attributes.title }}</nuxt-link>
      </h1>
      <div class="article-meta">
        <div class="article-date">{{ formatDate(article.attributes.date) }}</div>
        <div class="article-category">
          <nuxt-link
            class="link"
            :to="`/categories/${category}`"
            v-for="category in article.attributes.categories"
            :key="category"
          >{{category}}</nuxt-link>
        </div>
      </div>
      <!-- <div class="article-content markdown-body" v-html="article.summary"></div> -->
      <!-- <div class="article-more">
        <nuxt-link class="link" :to="article.path">阅读全文</nuxt-link>
      </div> -->
    </article>
    <nav class="navigator">
      <pager
        :hide-if-one-page="false"
        :total-page="pagerCount"
        :current-page.sync="currentPage"
        @update:currentPage="updatePage"
      />
    </nav>
  </div>
</template>

<script>
import Pager from '@/components/Pager'
import { perHomeCount } from '@/config'
import { getArticles, getPagerCount, formatDate } from '@/util'

export default {
  async asyncData () {
    const context = await require.context('~/content/posts', true, /\.md$/)
    // console.log(context(context.keys()[0]))
    const articles = await context.keys().map(key => ({
      ...context(key),
      summary: context(key).html.split('<!-- more -->')[0],
      path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }))
    // TODO 使用脚本来生成文章，默认添加标题和时间，根据生成时的创建时间来排序
    articles.sort((a, b) => new Date(b.attributes.date).getTime() - new Date(a.attributes.date).getTime())
    return { articles: getArticles(1, perHomeCount, articles), allArticles: articles }
  },
  components: {
    Pager
  },
  data () {
    return {
      currentPage: 1,
    }
  },
  computed: {
    pagerCount () {
      return getPagerCount(this.allArticles.length, perHomeCount)
    },
  },
  methods: {
    updatePage (page) {
      this.currentPage = page
      this.articles = getArticles(page, perHomeCount, this.allArticles)
    },
    formatDate (date) {
      return formatDate(date)
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2%;
  .article {
    padding: 25px 3% 15px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
    background: #fff;
    .article-title {
      margin: 0;
      color: #000;
      text-align: left;
      font-weight: 500;
      font-size: 1.26rem;
      a {
        position: relative;
        &:hover {
          color: #444;
        }
        &::after {
          content: '';
          width: 0;
          height: 2px;
          background: #444;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.2s linear;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    .link {
      color: inherit;
    }
    .article-meta {
      padding: 0;
      margin: 0;
      color: #6e7173;
      font-size: 0.94em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-date {
        margin-right: 12px;
        &::before {
          font-family: 'FontAwesome';
          content: '\f073';
          padding-right: 0.3em;
        }
      }
      .article-category {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
        }
        &::before {
          font-family: 'FontAwesome';
          content: '\f07c';
          padding-right: 0.3em;
        }
      }
    }
    .article-content {
      font-size: 15px;
      line-height: 1.77;
      color: #444;
      padding-top: 15px;
      text-align: justify;
      text-justify: distribute;
      word-break: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
      max-height: 140px;
      font-family: 'HYQiHei';
    }
    .article-more {
      display: flex;
      justify-content: flex-end;
      margin-top: 10px;
      .link {
        font-size: 14px;
        color: #444;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        &::after {
          font-family: 'FontAwesome';
          content: '\f101';
          padding-left: 0.3em;
        }
        &:hover {
          background: #f8f8f8;
        }
      }
    }
  }
  .navigator {
    list-style: none;
    margin-top: 25px;
    padding: 25px 0 0;
    font-size: 14px;
    text-align: center;
  }
}

@media (max-width: 520px) {
  .wrapper {
    .article {
      .article-title {
        font-size: 1.2rem;
        font-weight: 600;
      }
    }
  }
}
</style>
