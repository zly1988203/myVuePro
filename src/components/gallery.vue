<template>
  <div class="page">
    <div class="page__hd">
      <h1 class="page__title">Gallery</h1>
      <p class="page__desc">画廊，可实现上传图片的展示或幻灯片播放</p>
    </div>
    <div class="weui-gallery" style="display: block">
      <span class="weui-gallery__img" style="background-image: url(/src/components/images/pic_article.png);"></span>
      <div class="weui-gallery__opr">
        <a v-on:click="hidegly" class="weui-gallery__del">
          <i class="weui-icon-delete weui-icon_gallery-delete"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

    data() {
        return {
          isglyShow :{
            type: String
          }
        }
    },
    methods: {
      hidegly: function () {
        this.$emit('hidegly');

      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
