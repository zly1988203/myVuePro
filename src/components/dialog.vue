<template>
  <div class="js_dialog" id="iosDialog1">
    <div class="weui-mask"></div>
    <div class="weui-dialog">
      <div class="weui-dialog__hd"><strong class="weui-dialog__title">弹窗标题</strong></div>
      <div class="weui-dialog__bd">弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</div>
      <div class="weui-dialog__ft">
        <a v-on:click="hide" class="weui-dialog__btn weui-dialog__btn_default">辅助操作</a>
        <a href="javascript:;" class="weui-dialog__btn weui-dialog__btn_primary">主操作</a>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    methods: {
      hide: function () {
        this.$emit('hideDialog',{'action':'yes'})
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
