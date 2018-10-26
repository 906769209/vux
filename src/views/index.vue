<template>
  <div class="page">
    <div @click="tz">1234</div>
    
    
  </div>
</template>

<script>

export default {
  components: {
  },
  props: {},
  data() {
    return {
      
    };
  },
  watch: {
    //观察Vue实例上的数据变动
  },
  computed: {
    //DOM加载后马上执行能够缓存数据
  },
  methods: {
    //触发事件
    tz() {
      this.$router.push({ name: "cs", params: { id: "1" } });
      console.log("1");
    },
    get(data) {
      this.$axios
        .get("/user/get", {
          params: data
        })
        .then(res => {
          console.log(res);
          if (res.data.ret == 200) {
            console.log("成功");
          } else {
            this.$vux.toast.show({
              text: res.data.error,
              time: "2000",
              width: "5rem",
              position: "middle",
              type: "text"
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.$vux.toast.show({
            text: err,
            time: "2000",
            width: "5rem",
            position: "middle",
            type: "text"
          });
        });
    },
    post(data) {
      this.$axios
        .post("/share/rank_list", {
          params: data
        })
        .then(res => {
          console.log(res);
          if (res.data.ret == 200) {
            console.log("成功");
          } else {
            this.$vux.toast.show({
              text: res.data.error,
              time: "2000",
              width: "5rem",
              position: "middle",
              type: "text"
            });
          }
        })
        .catch(err => {
          console.log(err);
          this.$vux.toast.show({
            text: err,
            time: "2000",
            width: "5rem",
            position: "middle",
            type: "text"
          });
        });
    }
  },
  created() {
    //页面渲染前调用
    console.log("index渲染前");
  },
  mounted() {
    //页面渲染完成调用
    // console.log(this.$store.state.count)
    console.log("index渲染完成调用");
    let shareUrl = location.href.split("#")[0] + "#" + this.$route.path;
    let _friends = this.wx.friends(
      "2018",
      "爱相伴",
      shareUrl,
      "https://customer-cdn.tuzhanai.com/xfxb/static/y8gA5ll8.png",
      (res, data) => {
        if (!res) {
          console.log("分享失败回调");
          return;
        }
        console.log("分享成功回调");
      }
    ); //分享好友

    this.wx.circle(
      "爱相伴2",
      shareUrl,
      "https://customer-cdn.tuzhanai.com/xfxb/static/y8gA5ll8.png",
      (res, data) => {
        if (!res) {
          console.log("分享失败回调");
          return;
        }
        console.log("分享成功回调");
      }
    ); //分享朋友圈
  }
};
</script>
<style lang="less" scoped>
.page,
.pages {
  width: 100%;
  height: 100%;
}
.pages {
  position: relative;
}
img{
  display: block;
  width: 100%;
}

</style>