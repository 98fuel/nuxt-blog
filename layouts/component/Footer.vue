<template>
  <footer class="footer">
    <div class="wrapper">
      Copyright © 2020 -2021<a href="/">子舒的博客</a>, 技术栈使用 vue + nuxt.js 搭建而成。
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer {
  width: 75%;
  margin-top: 1.8em;
  .wrapper {
    line-height: 2.5;
    color: #6E7173;
    padding: .8em 0 3.6em;
    text-align: center;
  }
}
@media print, screen and (max-width: 48em) {
  .footer {
    width: 100%;
  }
}
</style>
