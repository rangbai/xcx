// pages/main/main.js
Page({

  my(){
    wx.navigateTo({
      url: '../my/my',
    })
  },

  map(){
    wx.navigateTo({
      url: '../nearby/nearby',
    })
  },
  liuyan:function(){
    wx.navigateTo({
    url:'../message/message'
    })
  },
  news(){
    wx.navigateTo({
      url: '../xingzuo/xingzuo',
    })
  },
  contact(){
    wx.makePhoneCall({
      phoneNumber: '19982043424',
    })
  },


  /**
   * 页面的初始数据
   */
  data: {

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