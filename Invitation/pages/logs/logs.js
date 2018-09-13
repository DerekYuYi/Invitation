//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },

  // 渲染完数据之后会收到一个回调, 可以在这个回调里处理逻辑
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return util.formatTime(new Date(log))
      })
    })
  }
})
