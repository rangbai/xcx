// pages/nearby/nearby.js
var QQMapWX = require('../../utils/qqmap-wx-jssdk');
var qqmapsdk;
Page({
  data: {
  },
  onLoad: function () {
    qqmapsdk = new QQMapWX({
      key: 'LWIBZ-FJGWG-TBWQD-IDTGS-TCUJJ-GWBH2'
    });
   let that = this;
    this.mapCtx = wx.createMapContext('myMap');
    wx.getLocation({
      type: 'gcj02',
      success(res) {
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            id: 1,
            latitude: res.latitude,
            longitude: res.longitude,
            iconPath: '/images/location.png',
            width:40,
            height:40,
            label:{
              content:'点击上方图标查看推荐'
            }
          
          },
          ],
        });
      }
    })
  },
  search: function (e) {
    var type = e.target.dataset.type;
    this.nearbySearch(type);
  },
  nearbySearch: function (keyword) {
    var location = this.data.latitude + ',' + this.data.longitude
    let _this = this;
    qqmapsdk.search({
      keyword: keyword,
      location: location,  
      success: function (res) {
        var markers = [];
        for (var i = 0; i < res.data.length; i++) {
          markers.push({
            title: res.data[i].location.lat,
            id: res.data[i].id,
            latitude: res.data[i].location.lat,
            longitude: res.data[i].location.lng,
            iconPath: '/images/location.png',
            width:40,
            height:40,
            callout: {
              content: res.data[i].title,
              color: '#000',
              display: 'ALWAYS'
            }
          })
        }
        _this.setData({
          markers: markers,
          perimeter: res.data
        })
      }
    })
}
})