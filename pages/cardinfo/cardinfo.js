// pages/cardinfo/cardinfo.js
const app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    currFilterType: '',
    currFilterName: '',
    filtering: false,
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
      qualityName: "普通"
    }],
    locationList: [{
      locationIndex: 0,
      locationName: "竞速"
    }, {
      locationIndex: 1,
      locationName: "道具"
    }, {
      locationIndex: 2,
      locationName: "全能"
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
    currentCarList: [],
    carList: [{
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
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_hjcp.png",
      carSpecialList: []
    }, {
      carIndex: 1,
      carName: "蔷薇棉花糖",
      carQuality: "传奇",
      carLocation: "竞速",
      carDesc: "以\"棉花糖SR\" 为原型的致敬设计,配备全新9代引擎,带来极致的操控体验,这是棉花糖的力量,永不磨灭",
      carShift: 757,
      carAcceleration: 762,
      carCruve: 794,
      carAccelerationTime: 743,
      carGasSpeed: 833,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_qwmht.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_mht.png",
      carSpecialList: []
    }, {
      carIndex: 2,
      carName: "赤炎魔怪",
      carQuality: "传奇",
      carLocation: "竞速",
      carDesc: "超大型流线尾翼 精巧的嵌入型轮胎,张狂的炎纹贴花配合神秘的暗能漩涡引擎,造就了这台震撼全场的极速之魔",
      carShift: 783,
      carAcceleration: 794,
      carCruve: 809,
      carAccelerationTime: 762,
      carGasSpeed: 758,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_cymg.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_mg.png",
      carSpecialList: []
    }, {
      carIndex: 3,
      carName: "独角兽",
      carQuality: "传奇",
      carLocation: "道具",
      carDesc: "全新的六轮设计,加上未来感十足的车身线条,这是一辆充满科(hua)技(ji)感的车辆!",
      carShift: 670,
      carAcceleration: 708,
      carCruve: 733,
      carAccelerationTime: 707,
      carGasSpeed: 662,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_djs.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_djs.png",
      carSpecialList: ["逃脱水炸弹 水苍蝇时可使用瞬间加速器", "被水炸弹 水苍蝇击中时高概率获得氮气", "使用磁铁吸附目标是有概率获得导弹", "100%概率防御香蕉皮,地雷,不防御巨型香蕉皮"]
    }, {
      carIndex: 4,
      carName: "熊猫",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "俏皮的黑眼圈,肥硕的体型,慵懒萌呆的申请,处处显露出国宝无可匹敌的美丽 每个看到它的人都会忍不住感叹,这辆车也太可爱了吧",
      carShift: 674,
      carAcceleration: 689,
      carCruve: 704,
      carAccelerationTime: 718,
      carGasSpeed: 671,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xm.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_xm.png",
      carSpecialList: []
    }, {
      carIndex: 5,
      carName: "创世",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "漆黑的车身 金色的激光条纹似乎带着无穷的动力 作为一辆竞速系赛车 他拥有藐视一切的速度",
      carShift: 705,
      carAcceleration: 703,
      carCruve: 723,
      carAccelerationTime: 723,
      carGasSpeed: 695,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_cs.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_cs.png",
      carSpecialList: []
    }, {
      carIndex: 6,
      carName: "合金",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "集成合金SR的设计风格,配备全新9代引擎 稳固兼顾速度,这辆赛车代表着合金系列新时代的来临",
      carShift: 620,
      carAcceleration: 662,
      carCruve: 660,
      carAccelerationTime: 784,
      carGasSpeed: 627,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_hj.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_hj.png",
      carSpecialList: []
    }, {
      carIndex: 7,
      carName: "紫色流星",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "机甲风十足的电镀自紫车身,搭载新型双涡轮加速装置 她在飞驰的赛道上就如同流星划过 勇敢的车手啊 快去创造速度的奇迹",
      carShift: 696,
      carAcceleration: 669,
      carCruve: 671,
      carAccelerationTime: 723,
      carGasSpeed: 645,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_zslx.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_zslx.png",
      carSpecialList: []
    }, {
      carIndex: 8,
      carName: "马拉松",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "灵感源于马拉松SR的经典设计 配备全新99代引擎 坚韧且稳定 这就是永不陨落的马拉松传说",
      carShift: 666,
      carAcceleration: 655,
      carCruve: 648,
      carAccelerationTime: 784,
      carGasSpeed: 617,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_mls.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_mls.png",
      carSpecialList: []
    }, {
      carIndex: 9,
      carName: "洛迪敞篷跑车",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "诱人的曲线,宽大的轮毂(gu),这就是车手们梦寐以求的帅气跑车,独特的动力系统,足以让它在赛场上叱咤风云",
      carShift: 671,
      carAcceleration: 677,
      carCruve: 671,
      carAccelerationTime: 723,
      carGasSpeed: 645,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_ldcppc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_ldcppc.png",
      carSpecialList: []
    }, {
      carIndex: 10,
      carName: "香蕉车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "在第99次踩到香蕉皮摔倒后,胖墩终于研制除了不怕香蕉皮的道具车  他将这段经历称为 \"痛的领悟\"",
      carShift: 569,
      carAcceleration: 627,
      carCruve: 623,
      carAccelerationTime: 608,
      carGasSpeed: 597,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xjc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_xjc.png",
      carSpecialList: ["逃脱水炸弹 水苍蝇时可使用瞬间加速器", "道具赛中普通香蕉皮升级为巨型香蕉皮", "道具赛开局喷持续时间提升10%", "100%概率防御香蕉皮,不防御巨型香蕉皮"]
    }, {
      carIndex: 11,
      carName: "爆烈",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "以爆烈SR为原型,配备全新9代引擎,在新一代车型中仍可做到 \"一直被追赶, 但从未被超越\"",
      carShift: 676,
      carAcceleration: 684,
      carCruve: 682,
      carAccelerationTime: 784,
      carGasSpeed: 654,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_bl.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 12,
      carName: "尖峰[蓝]",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "全新的车身结构配上强力引擎,极大地降低了空气阻力,使尖峰拥有了风驰电掣般的速度,驾驶它的人能够尽情享受速度的激情",
      carShift: 612,
      carAcceleration: 703,
      carCruve: 704,
      carAccelerationTime: 700,
      carGasSpeed: 679,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_jf.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 13,
      carName: "金猪祈福车",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "猪年到,吉祥至--这是为了庆祝猪年而特意设计的金猪祈福车 祝福大家猪年吉祥如意,事事顺心;",
      carShift: 681,
      carAcceleration: 721,
      carCruve: 742,
      carAccelerationTime: 787,
      carGasSpeed: 679,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_jzqfc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 14,
      carName: "spyder",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "造型复古的敞篷跑车,休闲的红白条纹搭配,从未落伍的经典设计带你驶向梦开始的地方",
      carShift: 640,
      carAcceleration: 697,
      carCruve: 704,
      carAccelerationTime: 784,
      carGasSpeed: 645,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_spyder.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 15,
      carName: "龟龟车",
      carQuality: "史诗",
      carLocation: "竞速",
      carDesc: "外形上模仿了繁荣山丘原生大乌龟,配备全新9代引擎,性能上有了非常大的提升;",
      carShift: 633,
      carAcceleration: 638,
      carCruve: 635,
      carAccelerationTime: 644,
      carGasSpeed: 607,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_ggc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 16,
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
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_wl.png",
      carSpecialList: []
    }, {
      carIndex: 17,
      carName: "突袭",
      carQuality: "稀有",
      carLocation: "竞速",
      carDesc: "它响彻整个繁荣山丘的引擎轰鸣声和个性的外形,似乎让其他的车型都显得有些暗淡无光",
      carShift: 483,
      carAcceleration: 544,
      carCruve: 552,
      carAccelerationTime: 608,
      carGasSpeed: 517,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_tx.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 18,
      carName: "皮蛋卡丁车",
      carQuality: "稀有",
      carLocation: "道具",
      carDesc: "山丘大名鼎鼎的天才车手皮蛋突然消失了一阵子,再出现时,他带着这台别具一格的自制赛车霸道归来",
      carShift: 467,
      carAcceleration: 539,
      carCruve: 552,
      carAccelerationTime: 608,
      carGasSpeed: 504,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_pdkdc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: []
    }, {
      carIndex: 19,
      carName: "新手练习车",
      carQuality: "普通",
      carLocation: "全能",
      carDesc: "提升了安全性的基础款卡丁车 更适合新手模拟",
      carShift: 450,
      carAcceleration: 450,
      carCruve: 450,
      carAccelerationTime: 450,
      carGasSpeed: 450,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_xskdc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_lxkdc.png",
      carSpecialList: []
    }, {
      carIndex: 20,
      carName: "马桶车",
      carQuality: "史诗",
      carLocation: "道具",
      carDesc: "提升了安全性的基础款卡丁车 更适合新手模拟",
      carShift: 633,
      carAcceleration: 638,
      carCruve: 635,
      carAccelerationTime: 644,
      carGasSpeed: 607,
      carGetWay: "新号第一天任务获取,永久",
      carEvaluate: "手感不错,速度过慢",
      carPrice: 0,
      carApplique: -1,
      carPaint: -1,
      subImg: app.globalData.baseResUrl + "/images/car_images/car_img_mtc.png",
      carImg: app.globalData.baseResUrl + "/images/car_detail_images/img_detail_bl.png",
      carSpecialList: ["逃脱水炸弹 水苍蝇时可使用瞬间加速器", "被水炸弹击中时100%获得水苍蝇"]
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
        currFilterName: e.target.dataset.name,
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
  onQualityItemClick: function(e) {
    this.setData({
      currentTab: 0,
      filtering: true,
      currFilterType: "quality",
      currFilterName: e.currentTarget.dataset.filtername
    });
    this.toFilterCarList();
    return false;
  },
  /**
   * 定位下的Item点击回调
   */
  onLocationItemClick: function(e) {
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
  onSortItemClick: function(e) {
    this.setData({
      currentTab: 0,
      filtering: true,
      currFilterType: "sort",
      currFilterName: e.currentTarget.dataset.filtername
    });
    this.toFilterCarList();
    return false;
  },
  /* 跳转到车辆详情界面 */
  toCarDetail: function(e) {
    console.log(e.currentTarget.dataset.carindex);
    wx.navigateTo({
      url: '../cardetail/cardetail?carList=' + JSON.stringify(this.data.currentCarList) + '&&carindex=' + e.currentTarget.dataset.carindex
    })
  },

  /**
   * 过滤卡丁车List
   */
  toFilterCarList: function() {
    /* 过滤逻辑 */
    switch (this.data.currFilterType) {
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
        let tempList = [];
        console.log("this.data.currFilterType = " + this.data.currFilterType);
        console.log("this.data.currFilterName = " + this.data.currFilterName);
        if (this.data.currFilterName === '漂移') {
          tempList = this.data.carList.sort((x, y) => {
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
  filterQualityRule: function(carEntity) {
    return carEntity.carQuality == this.data.currFilterName;
  },
  filterLocationRule: function(carEntity) {
    return carEntity.carLocation == this.data.currFilterName;
  },
})