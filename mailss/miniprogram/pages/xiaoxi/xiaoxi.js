const db = wx.cloud.database({
  env: "web-test-qq-01-wz9t3"
});
Page({
  data: {
    carArray: [],
    totalPrice: 0,
    isShow:false},
  getTotalPrice() {
    let total = 0;
    let carts = this.data.carArray
    for (let i = 0; i < carts.length; i++) {if (carts[i].carShow) {total += carts[i].carNum * carts[i].carPrice;}}
    this.setData({carArray: carts,totalPrice: total.toFixed(2)})},carAdd(e){const index = e.currentTarget.dataset.alphaBeta;let num=this.data.carArray[index].carNum;num++;this.data.carArray[index].carNum=num;
    // 重新渲染
    this.setData({carArray:this.data.carArray});this.getTotalPrice();// 修改数据库数据
    db.collection("my_cart").doc(this.data.carArray[index]._id).update({data: { carNum: num }}).then(res => { console.log("修改成功") }).catch(err => { console.log(err) })},
  // 数量减少
  carReduce(e){
const index = e.currentTarget.dataset.alphaBeta;let num = this.data.carArray[index].carNum;if (num <= 1) {return;};num--;this.data.carArray[index].carNum = num;
    // 重新渲染
    this.setData({carArray: this.data.carArray})
    this.getTotalPrice(); 
    // 修改数据库数据
    db.collection("my_cart").doc(this.data.carArray[index]._id).update({data: { carNum: num }}).then(res => { console.log("修改成功") }).catch(err => { console.log(err) })  },
  // 删除功能
  carRemove(e){
    const index = e.currentTarget.dataset.alphaBeta;
    var that = this.data.carArray;
    var t = this;wx.showModal({success(res){if(res.confirm){db.collection("my_cart").doc(t.data.carArray[index]._id).remove().then(res=>{console.log("删除成功")}).catch(err=>{console.log(err)});
          that.splice(index, 1);
          t.setData({carArray: that})
      t.getTotalPrice();}}})},
  onShow() {db.collection("my_cart").get().then(res => {this.setData({ carArray: res.data})}).catch(err => { console.log(err) })
  this.getTotalPrice();},toPay:function(){wx.navigateTo({url: '/packageB/pay/pay'})}
})