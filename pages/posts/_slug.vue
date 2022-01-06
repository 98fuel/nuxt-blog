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
        </div>
        <div class="markdown-body article-content" v-html="article.html"></div>
        <div class="article-updated">最后更新时间: {{ formatDate(article.attributes.updated) }}</div>
        <div class="article-tags">
          <nuxt-link
            class="link"
            :to="`/tags/${tag}`"
            v-for="tag in article.attributes.tags"
            :key="tag"
          >{{tag}}</nuxt-link>
        </div>
      </article>

      <article class="article article-ps">
        <div>
          出于个人的考虑，移除了文章内的评论框。如果你想评论留言，请移步 <a href="/message">留言板</a>。
        </div>
      </article>
      <Imgbig />
    </div>
  </div>
</template>

<script>
import { formatDate } from '@/util'
import Imgbig from '@/components/Imgbig'

export default {
  components: {
    Imgbig,
  },
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
  .article {
    padding: 25px 3% 15px;
    .article-title {
      margin: 0;
      color: #000;
      font-weight: 500;
      font-size: 24px;
    }
    .article-meta {
      padding: 0;
      margin: 0;
      margin-top: 4px;
      color: #6e7173;
      font-size: 0.94em;
      text-indent: 0.15em;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      opacity: 0.8;
      .article-date {
        margin-right: 12px;
      }
      .article-category {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .link {
          margin-right: 6px;
        }
      }
    }
    .article-content {
      font-size: 16px;
      line-height: 2;
      color: #444;
      padding-top: 15px;
      text-align: left;
      text-justify: distribute;
      word-break: normal;
      font-family: 'HYQiHei';
    }
    .article-updated {
      margin-top: 1rem;
      font-size: 0.96rem;
      color: #6e7173;
      background: #eee;
      padding-left: 10px;
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
  }
  .article-ps {
    padding: 15px 3%;
    opacity: 0.9;
    font-size: 0.96rem;
    a {
      color: #0366d6;
      text-decoration: underline;
    }
  }
}

</style>
