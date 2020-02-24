//注册一个小程序
App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  //小程序初始化完成时执行的生命周期函数，可以用来获取用户信息,现已废弃
  onLaunch: function () {
    // wx.getUserInfo({
    //   success:function(res){
    //     console.log(res)
    //   }
    // })
    // setTimeout(function () {
    //   const err = new Error()
    //   throw err
    // },2000) 
   

  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    //1.判断小程序进入场景
    // console.log(options)
    // console.log(options.scene)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log("关闭小程序")
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log("小程序发生错误")
  }


})
