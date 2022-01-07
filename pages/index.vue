<template>
  <div class="wrapper">
    <article
      class="article article-index"
      v-for="article in articles"
      :key="article.attributes.title"
    >
      <h1 class="article-title">
        <nuxt-link class="link" :to="article.path">{{ article.attributes.title }}</nuxt-link>
        <div class="article-date">{{ formatDate(article.attributes.date) }}</div>
      </h1>
      <div class="article-content markdown-body" v-html="article.summary"></div>
      <div class="article-meta">
        <div class="article-category">
          <nuxt-link
            class="link"
            :to="`/categories/${category}`"
            v-for="category in article.attributes.categories"
            :key="category"
          >{{category}}</nuxt-link>
        </div>
      </div>
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
  .article {
    padding: 25px 1% 15px;
    border-bottom: 2px solid #eee;
    .article-title {
      margin: 0;
      font-weight: 500;
      font-size: 1.3rem;
      color: #000;
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        position: relative;
        color: inherit;
        &::after {
          content: '';
          width: 0;
          height: 2px;
          background: #000;
          position: absolute;
          left: 0;
          bottom: 0;
          transition: all 0.2s linear;
        }
        &:hover::after {
          width: 100%;
        }
      }
      .article-date {
        color: #6e7173;
        font-size: 0.94rem;
        opacity: 0.8;
      }
    }
    .link {
      color: inherit;
    }

    .article-content {
      font-size: 15px;
      line-height: 1.77;
      color: #4b5563;
      padding-top: 8px;
      text-align: justify;
      text-justify: distribute;
      word-break: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      max-height: 140px;
      font-family: 'HYQiHei';
    }
    .article-meta {
      margin-top: 1rem;
      padding: 0;
      color: #6e7173;
      font-size: 0.94em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-category {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
          background: #f3f3f3;
          padding: 0 8px;
          border-radius: 4px;
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
        flex-direction: column;
        align-items: flex-start;
        .article-date {
          font-weight: 500;
        }
      }
    }
  }
}
</style>
