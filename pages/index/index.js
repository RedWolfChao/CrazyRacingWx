//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    charImageUrl:'https://raw.githubusercontent.com/RedWolfChao/CrazyRacingWx/master/images/charInfo.png',
    cardImageUrl:'https://raw.githubusercontent.com/RedWolfChao/CrazyRacingWx/master/images/cardInfo.png',
    mapImageUrl:'https://raw.githubusercontent.com/RedWolfChao/CrazyRacingWx/master/images/mapInfo.png',
    otherImageUrl: 'https://raw.githubusercontent.com/RedWolfChao/CrazyRacingWx/master/images/otherInfo.png',
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
