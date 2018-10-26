export const globalData = {
  appid: "wxd95f328551915796", //智能 
  bgmBtn: true,
  luckydrawNum: 0, //抽奖次数
};

var wechat = new Wechat(globalData.appid);
wechat.config({
  debug: false,
  jsApiList: [
    "checkJsApi",
    "onMenuShareTimeline",
    "onMenuShareAppMessage",
    "onMenuShareQQ",
    "onMenuShareWeibo"
  ]
}); //初始

export const wxShare = {
  friends: (title, desc, share_url, imgUrl, callBack) => {
    wechat.shareFriend({
        appmessageTitle: title,
        appmessageDesc: desc,
        link: share_url,
        imgUrl: imgUrl,
      },
      () => {

        console.log("分享成功");
        callBack(true)
      },
      () => {
        console.log("分享失败");
        callBack(false)
      }
    );
  },
  circle: (desc, share_url, imgUrl, callBack) => {
    wechat.shareTimeline({
        timelineTitle: desc,
        link: share_url,
        imgUrl: imgUrl,
      },
      () => {
        callBack(true)
      },
      () => {
        callBack(false)
      }
    );
  }
};


//参数解析
export const getUrlKey = (name) => {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
};

//验证
export const validations = {
  empty: (text) => {
    if (text == "" || text == null) {
      return false;
    } else {
      return true;
    }
  },
  telCheck: (text) => {
    if (!/^[1][3,4,5,6,7,8][0-9]{9}$/.test(text)) {
      return false;
    } else {
      return true;
    }
  }

};


export default {
  globalData,
  getUrlKey,
  validations,
  wxShare
}