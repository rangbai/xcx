// pages/detals/detals.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    conlist:[]
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (dataname) {
    wx.showLoading({
      title: '正在加载',
    })
    wx.request({
      url: `http://web.juhe.cn/constellation/getAll?consName=%E7%8B%AE%E5%AD%90%E5%BA%A7&type=today&key=4c9c5e4c4551ad81b18617dddeabc75d`,
      success: (res) => {
        console.log(res)
        //加载成功 图标消失
        wx.hideLoading()
        this.setData({
          conlist: res.data
        })
      }
    })
  },
})