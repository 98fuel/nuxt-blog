<template>
  <div class="wrapper">
    <div class="archive">
      <h3>评论~</h3>
      <link href="https://cdn.jsdelivr.net/npm/artalk@2.1.4/dist/Artalk.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/artalk@2.1.4/dist/Artalk.js"></script>
      <div id="Comments">
        <a onclick="javascript:location.reload();" class="reload">点击加载评论功能</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
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
      background: #38b2ac;
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