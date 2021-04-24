// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    background: ['http://img02-xusong.taihe.com/bb307c11f8858ea2ea7b6bdc772d7d68[640_324_422].jpg','https://img9.doubanio.com/view/photo/l/public/p2509650025.webp','https://imgsa.baidu.com/forum/pic/item/cc9f90cad1c8a786f62ff2216609c93d70cf501c.jpg','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg35.51tietu.net%2Fpic%2F2016-121510%2F20161215101610fldcc4ujyjr440573.jpg&refer=http%3A%2F%2Fimg35.51tietu.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621771924&t=a3f762eddcf29cea348336daba3e076d','https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs.iteatv.com%2FUpload%2Fr3%2F054108085527E8F56A0A4205001F744A.jpg&refer=http%3A%2F%2Fs.iteatv.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1621772245&t=d82b504721c33d28f2ff716eeecd2840','https://i0.hdslb.com/bfs/article/26229099529aad85fd30bee2c8b668f71bced786.jpg'],
    //歌曲列表的数据
    musiclist:[
      //一首歌需要有图片1. src数据 2. 歌名 3. 人名 4. 歌曲id
      {"src":"https://p1.music.126.net/LMyITvYRS7NsgA9lYUKpqg==/109951164179134667.jpg",
      "musicName":"素颜",
      "name":"许嵩",
      "id":"167827"
    },
    {
      "src":"https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      "musicName":"如果当时",
      "name":"许嵩",
      "id":"167870"
      },
      {
        "src":"https://p2.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg",
        "musicName":"山水之间",
        "name":"许嵩",
        "id":"28802028"
        },
        {
          "src":"https://p2.music.126.net/fUEbmHuK22dQkUcIWiA0JA==/3352410953143856.jpg",
          "musicName":"想象之中",
          "name":"许嵩",
          "id":"167705"
          },
      {
        "src":"https://p2.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
        "musicName":"城府",
        "name":"许嵩",
        "id":"167885"
        },
        {
          "src":"https://p2.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg",
          "musicName":"最佳歌手",
          "name":"许嵩",
          "id":"412902950"
          }
    ]


  },
  play:function() {
    console.log("页面跳转")
    wx.navigateTo({
      url: '/pages/play/play',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
console.log("页面渲染")
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
console.log("页面隐藏")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("页面卸载")
  },
  

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("页面下拉")
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
