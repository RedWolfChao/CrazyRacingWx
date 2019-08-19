// pages/mapinfo/mapinfo.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    testImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_mht.png",
    //  当前被激活的tab
    currentTab: 0,
    // 被激活的item[打开的]
    activeItemIndex: -1,
    // tab list
    tabList: [{
      tabIndex: 0,
      tabName: "R"
    }, {
      tabIndex: 1,
      tabName: "L3"
    }, {
      tabIndex: 2,
      tabName: "L2"
    }, {
      tabIndex: 3,
      tabName: "L1"
    }],
    //  地图类别list
    mapTypeList: [{
      typeIndex: 0,
      typeName: "城镇",
      icon: ""
    }, {
      typeIndex: 1,
      typeName: "海盗",
      icon: ""
    }, {
      typeIndex: 2,
      typeName: "太空",
      icon: ""
    }, {
      typeIndex: 3,
      typeName: "WKC",
      icon: ""
    }],
    //  地图list
    mapList: [{
      mapIndex: 0,
      mapType: 0,
      mapName: "城镇运河",
      difficulty: 1,
      level: "R",
      shortCutNum: 0,
      shortCutDesc: [{
        desc: "",
        videoUrl: ""
      }],
      subImg: "",
      mapImg: ""
    }, {
        mapIndex: 1,
        mapType: 0,
        mapName: "城镇高速公路",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      }, {
        mapIndex: 2,
        mapType: 0,
        mapName: "城镇命运之桥",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      }, {
        mapIndex: 3,
        mapType: 1,
        mapName: "海盗某某图",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      }, {
        mapIndex: 4,
        mapType: 1,
        mapName: "海盗某某图2",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      }, {
        mapIndex: 5,
        mapType: 3,
        mapName: "帅狮狂飙",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      }, {
        mapIndex: 6,
        mapType: 2,
        mapName: "太空曲折滑坡",
        difficulty: 1,
        level: "R",
        shortCutNum: 0,
        shortCutDesc: [{
          desc: "",
          videoUrl: ""
        }],
        subImg: "",
        mapImg: ""
      },],
    showMapList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

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

  },
  /* 类别Item点击事件 */
  clickCategoryItem: function (e) {
    let activeItemIndex = this.data.activeItemIndex;
    const chooseItemIndex = e.currentTarget.dataset.current;
    if (chooseItemIndex == undefined) {
      return;
    }
    if (activeItemIndex != chooseItemIndex) {
      //  该item未被激活
      //  开启item激活状态
      this.setData({
        activeItemIndex: chooseItemIndex
      });
    } else {
      //  该item已经被激活
      //  关闭item激活
      this.setData({
        activeItemIndex: -1
      });
    }
    this.setData({
      showMapList: this.data.mapList.filter(this.filterCategoryRule)
    });
    console.log("showMapList");
    console.log(this.data.showMapList);
  },
  /* Tab点击事件 */
  clickTab: function (e) {
    //  如果点击的没有变化 那么就return
    const changeTab = e.currentTarget.dataset.current;
    const currTab = this.data.currentTab;
    if (changeTab == currTab) {
      return;
    } else {
      this.setData({
        currentTab: changeTab
      });
    }
  },
  /* 过滤根据类别[城镇,海盗,太空,WKC...] */
  filterCategoryRule: function (mapEntity){
    const mapType = mapEntity.mapType;
    console.log("mapType = " + mapType);
    console.log("this.data.activeItemIndex = " + this.data.activeItemIndex);
    return mapType == this.data.activeItemIndex;
  }
})