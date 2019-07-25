//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    charImageUrl:'http://images.17173.com/vlog/20070118/20070118152037823.jpg',
    cardImageUrl:'http://img4.cache.netease.com/photo/0031/2010-04-12/643QV8JU0RBT0031.jpg',
    mapImageUrl:'http://gmcdn.kikinote.net/wp-content/uploads/2016/02/2013110311334929.jpg',
    otherImageUrl: 'http://i1.sinaimg.cn/gm/o/i/2007-12-24/U158P115T41D135239F757DT20071224165633.jpg',
    skillImageUrl:'http://image.17173.com/bbs/v1/2012/08/06/1344256713943.jpg'

  },
  //事件处理函数
  onImageClick: function (event) {
    console.log(event.target.id);
    wx.navigateTo({
       url: event.target.id
     })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
