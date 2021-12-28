<template>
  <div class="wrapper">
    <div class="archive">
      <h2>留言</h2>
      <Comments />
    </div>
  </div>
</template>

<script>
import Comments from '@/components/Comments'
export default {
  components: {
    Comments
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 0 2%;
  .archive {
    padding: 25px 3% 15px;
    margin-top: 20px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgb(0 0 0 / 5%);
    background: #fff;
  }
}
</style>