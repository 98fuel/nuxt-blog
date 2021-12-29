<template>
  <div>
    <div class="wrapper">
      <article class="article">
        <h1 class="article-title">{{ article.attributes.title }}</h1>
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
          <div class="article-visitors">
            访问:
            <span id="twikoo_visitors">0</span>
          </div>
        </div>
        <div class="article-content markdown-body" v-html="article.html"></div>
        <div class="article-copyright"></div>
        <div class="article-tags">
          <nuxt-link
            class="link"
            :to="`/tags/${tag}`"
            v-for="tag in article.attributes.tags"
            :key="tag"
          >{{tag}}</nuxt-link>
        </div>
        <!-- <div class="article-nav">
        <nuxt-link class="link" to="/">上一篇文章</nuxt-link>
        <nuxt-link class="link" to="/">下一篇文章</nuxt-link>
        </div>-->
      </article>
    </div>
    <!-- <Comments /> -->
  </div>
</template>

<script>
import { getArticles, getPagerCount, formatDate } from '@/util'
// import Comments from '@/components/Comments'

export default {
  // components: {
  //   Comments
  // },
  async asyncData ({ params }) {
    const article = await import(`~/content/posts/${params.slug}.md`);
    return {
      article
    };
  },
  methods: {
    formatDate (date) {
      return formatDate(date)
    }
  },
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
      color: #555;
      text-align: left;
      font-weight: 600;
      font-size: 1.4rem;
    }
    .article-meta {
      padding: 0;
      margin: 0;
      border-bottom: 1px solid #eee;
      color: #6e7173;
      font-size: 0.9em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
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
      .article-visitors {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
        }
        &::before {
          font-family: 'FontAwesome';
          content: '\f06e';
          padding-right: 0.3em;
        }
      }
    }
    .article-content {
      font-size: 16px;
      line-height: 1.8;
      color: #444;
      padding-top: 15px;
      text-align: left;
      text-justify: distribute;
      word-break: normal;
      font-family: 'HYQiHei';
    }
    .article-tags {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin-top: 2em;
      &::before {
        font-family: 'FontAwesome';
        content: '\f02b';
        margin-right: 10px;
      }
      .link {
        margin-right: 10px;
      }
    }
    .article-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      margin-top: 15px;
      margin-bottom: 20px;
      padding: 10px;
      white-space: nowrap;
      border-top: 1px solid #eee;
      .link {
        line-height: 25px;
        font-size: 15px;
        color: #555;
        &:first-child::before {
          font-family: 'FontAwesome';
          content: '\f0d9';
          padding-right: 0.3em;
        }
        &:last-child::after {
          font-family: 'FontAwesome';
          content: '\f0da';
          padding-left: 0.3em;
        }
      }
    }
  }
}

@media (max-width: 520px) {
  .wrapper {
    .article {
      .article-title {
        font-size: 1.2rem;
      }
    }
  }
}
</style>
