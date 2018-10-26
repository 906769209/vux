<template>
  <div id="app" :class="cl?'':'b'">
    <router-view></router-view>
    <loading v-model="isLoading" text="加载中..."></loading>
  </div>
</template>

<script>
import { Loading } from "vux";
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Loading
  },
  data() {
    return {
      cl: true
    };
  },
  watch: {
    //观察Vue实例上的数据变动
  },
  computed: {
    //DOM加载后马上执行能够缓存数据
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  },
  methods: {
    //触发事件
  },
  created() {
    //页面渲染前调用

    console.log("app渲染前");

    // var appid = this.Global.appid;
    // var wechat = new Wechat(appid);

    // wechat.config({
    //   debug: false,
    //   jsApiList: [
    //     "checkJsApi",
    //     "onMenuShareTimeline",
    //     "onMenuShareAppMessage",
    //     "onMenuShareQQ",
    //     "onMenuShareWeibo"
    //   ]
    // }); //初始

    // //微信授权;

    // if (wechat.getQuery("code")) {
    //   //授权模式
    //   wechat.ready(function() {
    //     //获取用户的信息
    //     wechat.getUserInfo(function(err, res) {
    //       if (err) {
    //         wechat.goAuth(
    //           "snsapi_userinfo",
    //           "state",
    //           wechat.filter("code", "state")
    //         );
    //       } else {
    //         console.log("授权成功")
    //         console.log(res);

    //       }
    //     });
    //   });
    // } else {
    //   //授权跳转
    //   wechat.goAuth("snsapi_userinfo", "state", wechat.filter("code", "state"));
    // }
  },
  mounted() {
    //页面渲染完成调用
    console.log("app渲染完成");
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

* {
  font-size: 0.22rem;
}
body,
html {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
}
body {
  background-color: #fbf9fe;
}
.img_rror {
  position: relative;
}

.weui-toast {
  width: 2.5rem !important;
  height: 2.5rem !important;
  top: 50% !important;
  margin-top: -1.25rem !important;
}
</style>
