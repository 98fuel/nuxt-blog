<template>
  <div class="comments">
    <!-- Twikoo -->
    <div id="tcomment"></div>
    <script src="https://cdn.jsdelivr.net/npm/twikoo@1.4.9/dist/twikoo.all.min.js"></script>
    <!-- lightGallery -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/css/lightgallery.css" />
    <script src="https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/lightgallery.min.js"></script>
  </div>
</template>

<script>
const envId = 'shuxhan-2gcz5b7m7f845ec3';
const el = '#tcomment';
export default {
  name: 'Comments',
  mounted () {
    this.initTwikoo()
    this.initJs()
  },
  methods: {
    initTwikoo () {
      try {
        twikoo.init({
          envId,
          el,
          onCommentLoaded: this.initLightGallery
        })
      } catch (e) { }
    },
    initLightGallery () {
      // This function is compiled to ES5
      var commentContents = document.getElementsByClassName('tk-content');
      for (var i = 0; i < commentContents.length; i++) {
        var commentItem = commentContents[i];
        var imgEls = commentItem.getElementsByTagName('img');
        if (imgEls.length > 0) {
          for (var j = 0; j < imgEls.length; j++) {
            var imgEl = imgEls[j];
            var aEl = document.createElement('a');
            aEl.setAttribute('class', 'tk-lg-link');
            aEl.setAttribute('href', imgEl.getAttribute('src'));
            aEl.setAttribute('data-src', imgEl.getAttribute('src'));
            aEl.appendChild(imgEl.cloneNode(false));
            imgEl.parentNode.insertBefore(aEl, imgEl.nextSibling);
            imgEl.remove();
          }
          lightGallery(commentItem, {
            selector: '.tk-lg-link',
            share: false
          });
        }
      }
    },
    initJs () {
      const twikooJs = this.$refs.twikooJs
      if (twikooJs) {
        twikooJs.onload = this.initTwikoo
        this.$router.afterEach(this.onRoute)
      }
    },
    onRoute (to, from) {
      if (to.path !== from.path) this.initTwikoo()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>