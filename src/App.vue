<template>
<div id="app">
  <v-header></v-header>
<div class="container" id="container">
  <div class="page tabbar">
    <div class="page__bd">
      <div class="weui-tab">
        <div class="weui-tab__panel">
          <router-view></router-view>
        </div>
        <div class="weui-tabbar">
          <router-link to="goods" class="weui-tabbar__item weui-bar__item_on">
                    <span style="display: inline-block;position: relative;">
                        <img src="./components/images/icon_tabbar.png" alt="" class="weui-tabbar__icon"/>
                        <span class="weui-badge" style="position: absolute;top: -2px;right: -13px;">8</span>
                    </span>
            <p class="weui-tabbar__label">商品</p>

          </router-link>
          <router-link to="shoppingCart" class="weui-tabbar__item">
            <img src="./components/images/icon_tabbar.png" alt="" class="weui-tabbar__icon"/>
            <p class="weui-tabbar__label">购物车</p>

          </router-link>

          <router-link to="main" class="weui-tabbar__item">
            <img src="./components/images/icon_tabbar.png" alt="" class="weui-tabbar__icon"/>
            <p class="weui-tabbar__label">我</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</div>


</div>


</template>

<script type="text/ecmascript-6">
  import header from 'components/header.vue'

  export default {
    components: {
       'v-header': header
    }
  }

//  $(function(){
//    $('.weui-tabbar__item').on('click', function () {
//      $(this).addClass('weui-bar__item_on').siblings('.weui-bar__item_on').removeClass('weui-bar__item_on');
//    });
//  });

</script>

<style lang="stylus"  rel="stylesheet/stylus">
    #app
      .tab
          display:flex
          width:100%
          height:40px
          line-height:40px
          .tab-item
            flex:1
            text-align:center

</style>
