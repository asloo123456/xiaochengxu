// pages/spdetail/spdetail.js
const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"//写env表示指定环境id
});
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
    productDetalis:{},
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
    this.data.id=options.id;
    db.collection("details")
    .where({
      pid: options.id
    })
    .get()
    .then(res=>{
      this.setData({
        productDetalis: res.data[0]
      })
    }).catch(err=>{console.log(err)})
  },
  // 添加购物车
  addCart() {
    var { title, price, img } = this.data.productDetalis
    console.log(title, price, img);
    db.collection("my_cart")
    .add({
      data:{
        carImage:img,
        carNum:1,
        carPrice:price,
        carShow:true,
        carTitle:title
      }
    }).then(res=>{
      console.log(res)
    }).catch(err=>{console.log(err)})
  },
  goCart(){
    wx.switchTab({
      url: '/pages/xiaoxi/xiaoxi',
    })
  }  
})