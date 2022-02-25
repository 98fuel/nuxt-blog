<template>
  <div class="wrapper">
    <div class="archive">
      <h3>评论~</h3>
      <div id="artalk">
        <a @click="onclickcomment()" class="reload">点击加载评论功能</a>
      </div>
      <link href="https://cdn.imhan.cn/list/artalk.css" rel="stylesheet" />
      <script src="https://cdn.imhan.cn/list/artalk.min.js"></script>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  methods: {
    onclickcomment () {
      let link = location.pathname;
      console.log(link);
      window.location.href = link + "#artalk";
      location.reload();
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  .archive {
    padding: 25px 1% 15px;
    margin-top: 20px;
    h3 {
      margin-bottom: 20px;
      font-weight: 600;
    }
    .reload {
      background: #0084ffcc;
      color: #fff;
      padding: 6px 10px;
      border-radius: 4px;
      transition: all 0.2s linear;
      display: block;
      text-align: center;
      &:hover {
        opacity: 0.9;
        cursor: pointer;
      }
    }
  }
}
</style>