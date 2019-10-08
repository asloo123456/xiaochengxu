const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"//写env表示指定环境id
});
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carArray: [],//购物车数据
    totalPrice: 0,  //总价格
    message:""  , //显示没有商品时的信息
    isShow:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 加载购物车内商品
  onLoad: function (options) {

  },
  // 计算总价
  getTotalPrice() {
    let total = 0;
    let carts = this.data.carArray
    for (let i = 0; i < carts.length; i++) {
      if (carts[i].carShow) {
        total += carts[i].carNum * carts[i].carPrice;
      }
    }
    this.setData({
      carArray: carts,  //渲染数据
      totalPrice: total.toFixed(2)
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // 数量增加
  carAdd(e){
    const index = e.currentTarget.dataset.alphaBeta;
    let num=this.data.carArray[index].carNum;
    num++;
    this.data.carArray[index].carNum=num;
    // 重新渲染
    this.setData({
      carArray:this.data.carArray
    })
    this.getTotalPrice();
    // 修改数据库数据
    db.collection("my_cart")
      .doc(this.data.carArray[index]._id)
      .update({
        data: { carNum: num }
      }).then(res => { console.log("修改成功") })
      .catch(err => { console.log(err) })
  },
  // 数量减少
  carReduce(e){
    const index = e.currentTarget.dataset.alphaBeta;
    let num = this.data.carArray[index].carNum;
    if (num <= 1) {
      return;
    }
    num--;
    this.data.carArray[index].carNum = num;
    // 重新渲染
    this.setData({
      carArray: this.data.carArray
    })
    this.getTotalPrice(); 
    // 修改数据库数据
    db.collection("my_cart")
      .doc(this.data.carArray[index]._id)
      .update({
        data: { carNum: num }
      }).then(res => { console.log("修改成功") })
      .catch(err => { console.log(err) })  
  },
  // 删除功能
  carRemove(e){
    const index = e.currentTarget.dataset.alphaBeta;
    var that = this.data.carArray
    var t = this;
    wx.showModal({
      title: '提示',
      content: '你确定删除吗',
      success(res){  
        if(res.confirm){    //如果确定
          console.log(t.data.carArray[index]._id)
          db.collection("my_cart")
            .doc(t.data.carArray[index]._id)
          .remove()
          .then(res=>{console.log("删除成功")})
          .catch(err=>{console.log(err)});
          that.splice(index, 1);
          // 重新渲染
          t.setData({
            carArray: that
          })
          t.getTotalPrice();
        }
      }
    })
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
      }).catch(err => { console.log(err) })
    this.getTotalPrice();
  },
  toPay: function () {
    wx.navigateTo({
      url: '../pay/pay'
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