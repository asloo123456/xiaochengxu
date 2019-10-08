// 引入图片自适应文件
var WxAutoImage = require('../../js/wxAutoImageCal.js');
const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"//写env表示指定环境id
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../images/swiper1.jpg',
      '../../images/swiper2.jpg',
      '../../images/swiper3.jpg'
    ],//轮播图片
    indicatorDots: true,
    autoplay:true,
    circular:true,
    interval: 3000,
    duration: 1200,
    iconArray: [],//放icon
    itemArray: [],//放话剧图片
    products:[], //猜你喜欢
  },
  // 完成跳转并传递商品id
  jumpProduct(e){
    var data = e.currentTarget.dataset;
    wx.navigateTo({
      url: '/pages/spdetail/spdetail?id=' +data.id 
    })
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
    // 1.调用云函数库 my_icon
    db.collection("my_icon")
    .get()
    .then(res=>{
      this.setData({
        iconArray: res.data
      })
    })
    .catch(err=>{console.log(err)});
    db.collection("my_huaju")
      .get()
      .then(res => {
        this.setData({
          itemArray: res.data
        })
      })
      .catch(err => { console.log(err) });
    db.collection("youLike")
      .get()
      .then(res => {
        this.setData({
          products: res.data[0],
        })
      })
      .catch(err => { console.log(err) });
  }
})