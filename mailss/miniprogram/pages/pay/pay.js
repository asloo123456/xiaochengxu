// pages/pay/pay.js
const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"//写env表示指定环境id
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carArray:[],
    totalPrice:0,
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
    db.collection("my_cart")
      .get()
      .then(res => {
        this.setData({
          carArray: res.data
        })
        this.getTotalPrice()
      })
      .catch(err => { console.log(err) });    
  },
  getTotalPrice() {
    let total = 0;
    var that=this
    let carts = this.data.carArray
    for (let i = 0; i < carts.length; i++) {
      total += carts[i].carNum * carts[i].carPrice;
    }
    this.setData({
      carArray: carts,  //渲染数据
      totalPrice: total.toFixed(2)
    })
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