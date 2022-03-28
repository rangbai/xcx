// pages/xingzuo/xingzuo.js
Page({

  /**
   * 页面的初始数据
   */
  showDetail: function (e) {
    var name = e.currentTarget.dataset.name
    console.log(name);
    wx.navigateTo({
      url: '../detals/detals'
    })
  }
})