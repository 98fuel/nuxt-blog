<template>
  <div>
    <PageSidebar />
    <HeaderMe />
    <div class="wrapper">
      <div class="archive">
        <h2>{{ article.attributes.title }}</h2>
        <p>收集一些自己拍的照片，留作一个纪念。</p>
        <div class="article-content markdown-body" id="photo" v-html="article.html"></div>
        <Imgbig />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderMe from "@/components/HeaderMe";
import PageSidebar from '@/components/PageSidebar';
import Imgbig from "@/components/Imgbig";
export default {
  components: {
    HeaderMe,
    PageSidebar,
    Imgbig
  },
  async asyncData ({ params }) {
    // 调用 photo.md 内的数据
    const article = await import(`~/content/photo.md`);
    return {
      article
    };
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  .archive {
    padding: 25px 2% 15px;
    p {
      margin-top: 20px;
    }
    .article-content {
      font-size: inherit;
      line-height: 1.8;
      color: inherit;
      margin-top: 20px;
    }
  }
}
</style>