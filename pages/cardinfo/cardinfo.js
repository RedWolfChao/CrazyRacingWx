// pages/cardinfo/cardinfo.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currFilterType:'',
    currFilterName:'',
    filtering:false,
    qualityList: [{
      qualityIndex: 0,
      qualityName: "传奇"
    }, {
      qualityIndex: 1,
      qualityName: "史诗"
    }, {
      qualityIndex: 2,
      qualityName: "稀有"
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
    currentCarList:[],
    carList: [{
      carIndex: 0,
      carName: "黄金敞篷跑车",
      carQuality: "传奇",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_hjcp.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 1,
      carName: "创世",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 123,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_cs.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 2,
      carName: "spyder",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 456,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_spyder.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 3,
      carName: "熊猫",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 5678,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xm.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 4,
      carName: "马拉松",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 78,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_mls.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 5,
      carName: "香蕉车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 9999,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xjc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 6,
      carName: "马桶车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 8888,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_mtc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 7,
      carName: "紫色流星",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_zslx.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 8,
      carName: "驯鹿",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xl.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 9,
      carName: "敞篷老爷车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_cplyc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 10,
      carName: "龟龟车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_ggc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 11,
      carName: "合金",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_hj.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 12,
      carName: "金猪祈福车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_jzqfc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 13,
      carName: "洛迪敞篷跑车",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_ldcpjc.png",
      carImg: "",
      carSpecialList: []
    }, {
      carIndex: 14,
      carName: "威龙",
      carQuality: "稀有",
      carLocation: "竞速",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 505,
      carAcceleration: 512,
      carCruve: 536,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_wl.png",
      carImg: "",
      carSpecialList: []
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
    this.setData({
      currentCarList: this.data.carList
    });
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
    console.log("currentTab = " + this.data.currentTab);
    if (this.data.currentTab === e.target.dataset.current) {
      /* 如果点击的是相同的tab 表示回到默认 */
      this.setData({
        currFilterName:e.target.dataset.name,
        currentTab: 0,
        filtering: false,
        currentCarList: this.data.carList
      });
      return false;
    } else {
      this.setData({
        currentTab: e.target.dataset.current,
        currFilterName: e.target.dataset.name,
        filtering: false,
      });
    }
  },
  /**
   * 品质下的Item点击回调
   */
  onQualityItemClick:function(e){
    this.setData({
      currentTab: 0,
      filtering: true,
      currFilterType: "quality",
      currFilterName :e.currentTarget.dataset.filtername
    });
    this.toFilterCarList();
    return false;
  },
  /**
   * 定位下的Item点击回调
   */
  onLocationItemClick: function (e) {
    this.setData({
      currentTab: 0,
      filtering: true,
      currFilterType: "location",
      currFilterName: e.currentTarget.dataset.filtername
    });
    this.toFilterCarList();
    return false;
  },
  /**
   * 排序下的Item点击回调
   */
  onSortItemClick: function (e) {
    this.setData({
      currentTab: 0,
      filtering: true,
      currFilterType: "sort",
      currFilterName: e.currentTarget.dataset.filtername
    });
    this.toFilterCarList();
    return false;
  },

  /**
   * 过滤卡丁车List
   */
  toFilterCarList:function(){
    /* 过滤逻辑 */
    switch(this.data.currFilterType){
      /* 品质过滤 */
      case 'quality':
        this.setData({
          currentCarList: this.data.carList.filter(this.filterQualityRule)
        });
        break;
      /* 定位过滤 */
      case 'location':
        this.setData({
          currentCarList: this.data.carList.filter(this.filterLocationRule)
        });
        break;
      /* 排序 */
      case 'sort':
        /* sort */
        let tempList=[];
        console.log("this.data.currFilterType = " + this.data.currFilterType);
        console.log("this.data.currFilterName = " + this.data.currFilterName);
        if(this.data.currFilterName === '漂移'){
          tempList = this.data.carList.sort((x,y)=>{
            if (x.carShift < y.carShift) {
              return 1;
            }
            if (x.carShift > y.carShift) {
              return -1;
            }
            return 0;
          });
        } else if (this.data.currFilterName === '加速度') {
          tempList = this.data.carList.sort((x, y) => {
            if (x.carAcceleration < y.carAcceleration) {
              return 1;
            }
            if (x.carAcceleration > y.carAcceleration) {
              return -1;
            }
            return 0;
          });
        } else if (this.data.currFilterName === '弯道') {
          tempList = this.data.carList.sort((x, y) => {
            if (x.carCruve < y.carCruve) {
              return 1;
            }
            if (x.carCruve > y.carCruve) {
              return -1;
            }
            return 0;
          });
        } else if (this.data.currFilterName === '加速时间') {
          tempList = this.data.carList.sort((x, y) => {
            if (x.carAccelerationTime < y.carAccelerationTime) {
              return 1;
            }
            if (x.carAccelerationTime > y.carAccelerationTime) {
              return -1;
            }
            return 0;
          });
        } else if (this.data.currFilterName === '集气速度') {
          tempList = this.data.carList.sort((x, y) => {
            if (x.carGasSpeed < y.carGasSpeed) {
              return 1;
            }
            if (x.carGasSpeed > y.carGasSpeed) {
              return -1;
            }
            return 0;
          });
        } else if (this.data.currFilterName === '特殊效果') {
          tempList = this.data.carList.sort((x, y) => {
            if (x.carSpecialList.length < y.carSpecialList.length) {
              return 1;
            }
            if (x.carSpecialList.length > y.carSpecialList.length) {
              return -1;
            }
            return 0;
          });
        }
        this.setData({
          currentCarList: tempList
        });
        break;
    }
  },
  filterQualityRule:function(carEntity){
    return carEntity.carQuality == this.data.currFilterName;
  },
  filterLocationRule: function (carEntity) {
    return carEntity.carLocation == this.data.currFilterName;
  },
})