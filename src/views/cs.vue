<template>
  <div class="page">cs
    
  </div>
</template>

<script>
import { querystring } from "vux";

export default {
  components: {
    querystring
  },
  props: {},
  data() {
    return {};
  },
  watch: {
    //观察Vue实例上的数据变动
  },
  computed: {
    //DOM加载后马上执行能够缓存数据
  },
  methods: {
    //触发事件
  },
  created() {
    //页面渲染前调用
  },
  mounted() {
    //页面渲染完成调用
    let shareUrl = location.href.split("#")[0] + "#" + this.$route.path;
    this.wx.friends(
      "2018cs",
      "爱相伴cs",
      shareUrl,
      "https://customer-cdn.tuzhanai.com/xfxb/static/y8gA5ll8.png"
    ); //分享好友
    this.wx.circle(
      "爱相伴2cs",
      shareUrl,
      "https://customer-cdn.tuzhanai.com/xfxb/static/y8gA5ll8.png"
    ); //分享朋友圈
  }
};
</script>
<style lang="less" scoped>
</style>