// pages/cardetail/cardetail.js
const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempCarInfo:{
      carIndex: 0,
      carName: "黄金敞篷跑车",
      carQuality: "传奇",
      carLocation: "竞速",
      carDesc: "一身耀眼的黄金战衣,华丽而尊贵,让看到他的赛车手都情不自禁的充满的斗志!",
      carShift: 777,
      carAcceleration: 737,
      carCruve: 769,
      carAccelerationTime: 702,
      carGasSpeed: 731,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_hjcppc.png",
      carImg: "",
      carSpecialList: []
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      tempCarInfo: JSON.parse(options.carList)[options.carindex]
    });
    wx.setNavigationBarTitle({
      title: this.data.tempCarInfo.carName,
    }) 

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})