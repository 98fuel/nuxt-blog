<template>
  <div class="toc">
    <div class="autoMenu wrapper" id="autoMenu"></div>
    <script src="https://cdn.imhan.cn/list/toc.js"></script>
  </div>
</template>

<script>
export default {
  name: 'Toc',
}
</script>

<style lang="scss" scoped>
.toc {
  height: 0;
  position: sticky;
  margin-left: 102%;
  top: 100px;
}
</style>