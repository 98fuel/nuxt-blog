<template>
  <div>
    <HeaderMe />
    <div class="wrapper">
      <div class="archive">
        <h2>{{ article.attributes.title }}</h2>
        <div class="article-content markdown-body" v-html="article.html"></div>
        <!-- <div @click="onclickshuoshuo()">刷新</div> -->
        <div id="nuxt_shuoshuo">
          <div class="spinner">
            <div class="rect1"></div>
            <div class="rect2"></div>
            <div class="rect3"></div>
            <div class="rect4"></div>
            <div class="rect5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMe from "@/components/HeaderMe";
export default {
  components: {
    HeaderMe
  },
  async asyncData ({ params }) {
    // 调用 shuoshuo.md 内的数据
    const article = await import(`~/content/shuoshuo.md`);
    return {
      article
    };
  },
  // methods: {
  //   onclickshuoshuo () {
  //     let link = location.pathname;
  //     console.log(link);
  //     window.location.href = link;
  //     location.reload();
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .archive {
    padding: 25px 2% 15px;
    .article-content {
      font-size: inherit;
      line-height: 1.8;
      color: inherit;
      margin-top: 20px;
    }
  }
  #nuxt_shuoshuo {
  }
}
</style>