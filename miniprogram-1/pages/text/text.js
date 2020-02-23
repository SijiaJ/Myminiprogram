// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath: '',
    inputValue:''

  },
  choose(){
    wx.chooseImage({
      success: (res)=> {
        //取出路径
        const path = res.tempFilePaths[0]
        
        this.setData({
          imagePath:path
        })
      },
    })
  },
  handleImageLoad(){
    console.log("图片加载完成")
  },


  handInput(event){
    //const value = event.detail.value
    this.setData({
      inputValue: event.detail.value,
      
    })
    
  },
  handleFocus(event) {
    console.log("集中焦点:",event)
  },
  handleBlur(event) {
    console.log("失去焦点:",event)
  }
})