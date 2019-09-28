// pages/spdetail/spdetail.js
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
    indicatorDots: true,//显示指示面板
    autoplay: true,//自动切换
    interval: 3000,//切换时间
    duration: 1200,//延迟时间
    circular: true,//衔接图片
    iscollect: false,  //切换图片
    
  },
  // 点击触发
  collect: function () {
    this.setData({iscollect: !this.data.iscollect})
  },
  // 调用图片自适应
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