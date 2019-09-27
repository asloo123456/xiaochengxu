// 引入图片自适应文件
var WxAutoImage = require('../../js/wxAutoImageCal.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/swiper1.jpg',
      '../../images/swiper2.jpg',
      '../../images/swiper3.jpg'
    ],
    indicatorDots: true,
    autoplay:true,
    circular:true,
    interval: 3000,
    duration: 1200,
    iconArray: [
      {
        "iconUrl": '../../images/icon-qiandao.png',
        "iconText": '签到'
      },
      {
        "iconUrl": '../../images/icon-fujin.png',
        "iconText": '附近'
      },
      {
        "iconUrl": '../../images/icon-zhanhui.png',
        "iconText": '游展'
      },
      {
        "iconUrl": '../../images/icon-fuli.png',
        "iconText": '福利'
      },
      {
        "iconUrl": '../../images/icon-muma.png',
        "iconText": '玩乐'
      },
      {
        "iconUrl": '../../images/icon-xingxing.png',
        "iconText": '周边'
      },
      {
        "iconUrl": '../../images/icon-tiyu.png',
        "iconText": '体育'
      },
      {
        "iconUrl": '../../images/icon-qinzi.png',
        "iconText": '亲子'
      }
    ],
    itemArray: [
      {
        "itemUrl": '../../images/huaju1.jpeg',
        "itemText": '11月20日话剧《风声》'
      },
      {
        "itemUrl": '../../images/huaju2.jpg',
        "itemText": '11月20日话剧《原野》'
      },
      {
        "itemUrl": '../../images/huaju1.jpeg',
        "itemText": '11月28日“夜店”演唱会'
      },
    ]
  },
  // 使用自定义图片自适应
  cusImageLoad: function (e) {
    var that = this;
    that.setData(WxAutoImage.wxAutoImageCal(e));
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