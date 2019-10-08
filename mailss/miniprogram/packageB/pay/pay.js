// pages/pay/pay.js
const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"
});
Page({
  data: {
    carArray:[],
    totalPrice:0,
  },
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
})