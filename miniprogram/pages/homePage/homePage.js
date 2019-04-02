// pages/homePage/homePage.js
import Toast from '../../dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  
  data: {
    show:false,
    imgUrls:[
      "https://6261-backend-b5c59c-1256451870.tcb.qcloud.la/1.jpg?sign=ae491d4ad6a05442545598930e05d011&t=1553355321",
      "https://6261-backend-b5c59c-1256451870.tcb.qcloud.la/2.jpg?sign=04c9b9de70e71c2401083b34710c10e2&t=1553355360",
      "https://6261-backend-b5c59c-1256451870.tcb.qcloud.la/3.jpg?sign=4f62b532b5a161d6e9c1539c991446aa&t=1553355373",
      "https://6261-backend-b5c59c-1256451870.tcb.qcloud.la/4.jpg?sign=c7f1560f0abee61778cfbe6beeae08d7&t=1553355385",
    ],
    itemimageURL:"../../image/1.jpg",
    actionSheetItems: [
      { bindtap: 'item1', txt: "摄影师评价分数" },
      { bindtap: 'item2', txt: "发布时间" },
      { bindtap: 'item3', txt: "约拍价格" }
    ],
    actionSheetHidden:true,
    sorting:1,
    message:""

  },

  binditem1: function () {
    this.setData({
      sorting: 1,
      actionSheetHidden: !this.data.actionSheetHidden,
      message:this.data.actionSheetItems[0].txt
    })
  }, binditem2: function () {
    this.setData({
      sorting: 2,
      actionSheetHidden: !this.data.actionSheetHidden,
      message: this.data.actionSheetItems[1].txt
    })
  }, binditem3: function () {
    this.setData({
      sorting: 3,
      actionSheetHidden: !this.data.actionSheetHidden,
      message: this.data.actionSheetItems[2].txt
    })
  },

  actionSheetTap: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })

  },
  actionSheetChange: function (e) {
    this.setData({
      actionSheetHidden: !this.data.actionSheetHidden
    })
  },
  filterTap:function(){
    wx.navigateTo({
      url: '../filter/filter',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
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