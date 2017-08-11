<template>
  <div class="page">
    <div class="page__hd">
      <div class="tab">
        <div class="tab-item">
          <router-link to="goods" class="weui-btn weui-btn_default">商品</router-link>
          <!-- <a class="weui-btn weui-btn_default">商品</a>-->
        </div>
        <div class="tab-item">
          <router-link to="shoppingCart" class="weui-btn weui-btn_default">购物车</router-link>

        </div>
        <div class="tab-item">
          <router-link to="main" class="weui-btn weui-btn_default">我</router-link>
        </div>


      </div>
    </div>
    <div class="page__bd page__bd_spacing">


      <div class="page__bd page__bd_spacing">
        <a v-on:click="showDialogfun" class="weui-btn weui-btn_default" id="showIOSDialog1">Dialog样式一</a>

        <a href="javascript:;" class="weui-btn weui-btn_default" id="showIOSDialog2">Dialog样式二</a>

      </div>

      <div class="button-sp-area">
        <a v-on:click="openLoadeToast" class="weui-btn weui-btn_plain-default">加载中</a>
        <a v-on:click="openSucToast" class="weui-btn weui-btn_primary">加载成功</a>
        <a v-on:click="showPicker" class="weui-btn weui-btn_plain-default">单选列表</a>
        <label class="weui-cells__title" v-if="pickVal">
          选择的是：{{pickVal.value}}-{{pickVal.label}}
        </label>

        <a v-on:click="showDatePicker" class="weui-btn weui-btn_plain-default">时间选择</a>

        <label class="weui-cells__title">
          选择的日期是：{{dateVal}}
        </label>



        <a v-on:click="showgallery" class="weui-btn weui-btn_plain-primary">gallery</a>

        <a v-on:click="showSearchbar" class="weui-btn weui-btn_mini weui-btn_primary">搜索</a>


      </div>
    </div>
    <div class="page__ft">
      <a><img src="./images/icon_footer_link.png"/></a>
    </div>
  <v-toast v-show="isShow" :toastInfo="toastInfo"></v-toast>
  <v-gallery v-show="isglyShow" v-on:hidegly="hidegly"></v-gallery>
    <v-dialog v-show="showDialog" v-on:hideDialog="hideDialog"></v-dialog>
    <v-searchbar v-show="showSearch"></v-searchbar>
  </div>


</template>

<script type="text/ecmascript-6">
  import toastMsg  from './toast.vue'
  import gallery from './gallery.vue'
  import  dialog from './dialog.vue'
  import  searchbar from './searchbar.vue'

  export  default {
    components: {
      'v-toast': toastMsg,
      'v-gallery': gallery,
      'v-dialog': dialog,
      'v-searchbar': searchbar
    },
    data() {
      return {
        isShow: false,
        isglyShow: false,
        showDialog: false,
        showSearch: false,
        pickVal : null,
        toastInfo : {
          type : 1,
          title: ""
        },
        dateVal : "1990-01-01",
        lstData : [{
        label: '飞机票',
        value: 0
      }, {
        label: '火车票',
        value: 1
      }, {
        label: '的士票',
        value: 2
      }, {
        label: '公交票 (disabled)',
        disabled: true,
        value: 3
      }, {
        label: '其他',
        value: 4
      }]

      }
    },
    methods: {
      openLoadeToast : function () {
        this.isShow = true
        this.toastInfo ={
          type : 1,
            title: "加载中......."
        }

        setTimeout(() => {
          this.isShow = false
        }, 2000)
    },
      openSucToast : function () {
        this.isShow = true
        this.toastInfo ={
          type : 2,
          title: "加载成功"
        }

        setTimeout( () => {
          this.isShow = false
        }, 2000)
      },

    showPicker : function () {
        weui.picker(this.lstData, {
          onChange: function (result) {
            console.log(result);
          },
          onConfirm:  (result) => {
            let index = result[0]
            console.log(index)
            this.pickVal = this.lstData[index]
            console.log(this.pickVal)
          }
        })
    },

      showDatePicker: function () {
        weui.datePicker({
          start: 1990,
          end: new Date().getFullYear(),
          onChange: function (result) {
            console.log(result);
          },
          onConfirm: (result) => {
            this.dateVal = result[0] +"-"+ (result[1]+1) +"-"+ result[2]

            console.log(result);
          }
        });
      },

      showgallery: function () {
          this.isglyShow = true
      },
      hidegly: function () {
        this.isglyShow = false
      },
      showDialogfun: function () {
        this.showDialog = true
      },
      hideDialog: function (data) {
        console.log(data)

        this.showDialog = false
      },
      showSearchbar: function () {
        this.showSearch = true
      }
  }
  }


</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
