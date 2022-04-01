<template>
  <div class="header-me">
    <p>
      <nuxt-link class="article-title" to="/">子舒</nuxt-link>
    </p>
    <div class="article-meta">
      <ul class="article-category">
        <li>
          <nuxt-link to="/archives/">归档</nuxt-link>:
          <nuxt-link to="/categories/技术" exact-active-class="current">技术</nuxt-link>
          <nuxt-link to="/categories/随笔" exact-active-class="current">随笔</nuxt-link>
        </li>/
        <li>
          <nuxt-link to="/tags/">标签</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header-me {
  p {
    text-align: center;
    margin-top: 14px;
    .article-title {
      display: inline-block;
      margin: 0;
      color: #000;
      font-weight: 500;
      font-size: 24px;
      line-height: 1.2;
      padding: 8px 0;
    }
  }
  .article-meta {
    padding: 0;
    margin: 6px 0;
    color: #6e7173;
    font-size: 17px;
    text-indent: 0.15em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    opacity: 0.8;
    .article-category {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
      li {
        position: relative;
        margin-right: 10px;
        margin-left: 10px;
        a {
          display: inline-block;
          color: #6e7173;
          &:hover {
            color: #000;
          }
          &.current  {
            color: #000;
          }
        }
      }
    }
  }
}
</style>