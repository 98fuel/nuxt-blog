<template>
  <div>
    <HeaderMe />
    <div class="wrapper">
      <PageSidebar />
      <article class="article" v-for="article in articles" :key="article.attributes.title">
        <div class="top">
          <div class="article-meta">
            <div class="article-category">
              <nuxt-link
                :to="`/categories/${category}`"
                v-for="category in article.attributes.categories"
                :key="category"
              >{{ category }}</nuxt-link>
            </div>
          </div>
          <nuxt-link class="link" :to="article.path">
            <div class="article-title">
              <span>{{ article.attributes.title }}</span>
            </div>
            <div class="article-date">{{ formatDate(article.attributes.date) }}</div>
          </nuxt-link>
        </div>
        <!-- <div class="article-content" v-html="article.summary"></div> -->
      </article>
      <!-- <nav class="navigator">
        <pager
          :hide-if-one-page="false"
          :total-page="pagerCount"
          :current-page.sync="currentPage"
          @update:currentPage="updatePage"
        />
      </nav> -->
    </div>
  </div>
</template>

<script>
import HeaderMe from "@/components/HeaderMe";
import PageSidebar from '@/components/PageSidebar'
import Pager from '@/components/Pager'
import { perHomeCount } from "@/config";
import { getArticles, getPagerCount, formatDate } from "@/util";

export default {
  components: {
    HeaderMe,
    PageSidebar,
    Pager,
  },
  async asyncData () {
    const context = await require.context("~/content/posts", true, /\.md$/);
    const articles = await context.keys().map((key) => ({
      ...context(key),
      summary: context(key).html.split("<!-- more -->")[0],
      path: `/posts/${key.replace(".md", "").replace("./", "")}/`,
    }));
    // TODO 使用脚本来生成文章，默认添加标题和时间，根据生成时的创建时间来排序
    articles.sort(
      (a, b) =>
        new Date(b.attributes.date).getTime() -
        new Date(a.attributes.date).getTime()
    );
    return {
      articles: getArticles(1, perHomeCount, articles),
      allArticles: articles,
    };
  },
  data () {
    return {
      currentPage: 1,
    };
  },
  created () {

  },
  computed: {
    pagerCount () {
      return getPagerCount(this.allArticles.length, perHomeCount);
    },
  },
  methods: {
    updatePage (page) {
      this.currentPage = page;
      this.articles = getArticles(page, perHomeCount, this.allArticles);
    },
    formatDate (date) {
      return formatDate(date);
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 20px 0 20px;
  .article:nth-of-type(1) {
    margin-top: 6px;
  }
  .article {
    padding: 0 4%;
    opacity: 0.98;
    transition: all 0.2s linear;
    margin-bottom: 6px;
    position: relative;
    &:hover {
      background: rgb(229, 231, 235);
    }
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .link {
        flex: 1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          height: 1px;
          width: 100%;
          background: #eee;
        }
        &:hover {
          opacity: 1;
          .article-title {
            span {
              opacity: 0.9;
              &::after {
                width: 100%;
              }
            }
          }
        }
        .article-title {
          margin: 0;
          padding: 14px 0;
          font-weight: 500;
          font-size: 18px;
          color: #000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          span {
            transition: all 0.2s linear;
            position: relative;
            &::after {
              content: '';
              width: 0;
              height: 2px;
              background: #666;
              position: absolute;
              left: 0;
              bottom: 0;
              transition: all 0.2s linear;
            }
          }
        }
        .article-date {
          color: #000;
          font-size: 0.94rem;
          font-weight: 500;
          text-decoration: none;
        }
      }
      .article-meta {
        padding: 0;
        color: #6e7173;
        font-size: 0.94em;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        opacity: 0.8;

        .article-category {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          a {
            margin-right: 6px;
            background: #f3f3f3;
            padding: 0 8px;
            border-radius: 4px;
          }
        }
      }
    }
    .article-content {
      font-size: 15px !important;
      line-height: 1.77;
      color: inherit;
      text-justify: distribute;
      word-break: break-all;
      text-align: left;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      opacity: 0.9;
      color: #3e3939;
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
      padding-top: 10px;
      border-radius: 0;
      align-items: baseline;
      .top {
        display: block;
        .link {
          flex-direction: column;
          align-items: flex-start;
          .article-title {
            padding: 8px 0;
            font-size: 19px;
            font-weight: 600;
          }
        }
        .article-meta {
          margin-bottom: 10px;
          display: flex;
          justify-content: space-between;
          flex-direction: row-reverse;
          .article-category {
            margin-left: 0;
          }
        }
      }
    }
  }
}
</style>
