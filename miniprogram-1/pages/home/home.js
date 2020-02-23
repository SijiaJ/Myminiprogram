const app = getApp()
const name = app.globalData.name
console.log(name)
import {getData} from '../../service/home.js'
// 注册一个页面 pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]
  },
  onLoad: function(options){
    getData().then(res=>{
      const banners= res.data.data.banner.list;
      const recommends = res.data.data.recommend.list
      this.setData({
        banners:banners,
        recommends:recommends
      })
      // console.log(banners)
    })
  },

  
  onReachBottom(){
    console.log("页面到达底部")
  },
  onPullDownRefresh(){
    console.log("下拉刷新")
  }
})