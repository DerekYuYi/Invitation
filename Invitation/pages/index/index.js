//index.js
//获取应用实例
const app = getApp()

Page({
  data: { // 页面的初始数据
    // 声明各个属性
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  // touch or tap events
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  gotoTestFirstPage: function() {
    wx.navigateTo({
      url: '../testFirstPage/testFirstPage',
    })
  },

  // Life Cycle
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


  onTavItemTap(item) {
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }

    return {
      title: '邀请帖',
      path: '/page/user?id=123'
    }
  }

})

