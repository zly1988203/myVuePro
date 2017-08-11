<template>
  <div id="loadingToast">
    <div class="weui-mask_transparent"></div>
    <div class="weui-toast">
      <i v-if="toastInfo.type===1" class="weui-loading weui-icon_toast"></i>
      <i v-else="" class="weui-icon-success-no-circle weui-icon_toast"></i>
      <p class="weui-toast__content">{{toastInfo.title}}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      toastInfo: {
         type: Object
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
