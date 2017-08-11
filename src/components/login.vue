<template>
  <div class="page panel">
    <div class="page__bd">
      <div class="weui-cells weui-cells_form">

        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__hd">
            <label class="weui-label">手机号</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="tel" placeholder="请输入手机号"/>
          </div>
          <div class="weui-cell__ft">
            <button class="weui-vcode-btn">获取验证码</button>
          </div>
        </div>


        <div class="weui-cell">
          <div class="weui-cell__hd"><label class="weui-label">验证码</label></div>
          <div class="weui-cell__bd">
            <input class="weui-input" type="number" pattern="[0-9]*" placeholder="请输入验证码"/>
          </div>
        </div>



        <div class="weui-cell">

          <div class="weui-cell__bd">
            <router-link to="goods" class="weui-btn weui-btn_primary">登录</router-link>
          </div>

        </div>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">

</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
