// pages/cardinfo/cardinfo.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    qualityList: [{
      qualityIndex: 0,
      qualityName: "传奇"
    }, {
      qualityIndex: 1,
      qualityName: "史诗"
    }, {
      qualityIndex: 2,
      qualityName: "普通"
    }, {
      qualityIndex: 3,
      qualityName: "渣滓"
    }],
    locationList: [{
      locationIndex: 0,
      locationName: "竞速"
    }, {
      locationIndex: 1,
      locationName: "道具"
    }, {
      locationIndex: 2,
      locationName: "全能?"
    }, ],
    sortList: [{
      sortIndex: 0,
      sortName: "漂移"
    }, {
      sortIndex: 1,
      sortName: "加速度"
    }, {
      sortIndex: 2,
      sortName: "弯道"
    }, {
      sortIndex: 3,
      sortName: "加速时间"
    }, {
      sortIndex: 4,
      sortName: "集气速度"
    }, {
      sortIndex: 5,
      sortName: "特殊效果"
    }],
    carList: [{
      carIndex: 0,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }, {
      carIndex: 1,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }, {
      carIndex: 2,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }, {
      carIndex: 3,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }, {
      carIndex: 4,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }, {
      carIndex: 5,
      carName: "棉花糖",
      shift: 1000,
      acceleration: 1000,
      curve: 1000,
      n2o: 1000,
      carImage: "https://raw.githubusercontent.com/RedWolfChao/WxCrazyRacingRec/master/images/ic_car_info.png",
      specialList: []
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  /**
   * 点击切换
   */
  clickTab: function(e) {
    console.log("e.target.dataset.current = " + e.target.dataset.current);
    console.log("currentTab = " + this.data.currentTab);
    if (this.data.currentTab === e.target.dataset.current) {
      /* 如果点击的是相同的tab 表示回到默认 */
      this.setData({
        currentTab: 0
      });
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current
      });
    }
  }
})