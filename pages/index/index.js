/** index.js **/

Page({
  data: {
    blog: '你的博客',
    phone: '你的手机号',
    mail: '你的邮箱',
    github: 'https://github.com/Iqgniy',
    demo:"http://iqgniy.github.io"
  },

  copyBlog() {
    wx.setClipboardData({
      data: this.data.blog,
      success() {
        wx.showToast({
          title: '内容已复制到剪贴板，请用浏览器打开。',
          icon: "none",
          duration: 1000
        })
      }
    })
  },

  copyDemo() {
    wx.setClipboardData({
      data: this.data.demo,
      success() {
        wx.showToast({
          title: '内容已复制到剪贴板，请用浏览器打开。',
          icon: "none",
          duration: 1000
        })
      }
    })
  },

  actionSheetTap() {
    wx.showActionSheet({
      itemList: ['呼叫', '复制'],
      success(e) {
        console.log(e.tapIndex)
        if (e.tapIndex===0){
            wx.makePhoneCall({
              phoneNumber: '你的手机号',
              success() {
                console.log('成功拨打电话')
              }
            })
        }
        else if (e.tapIndex === 1){
          wx.setClipboardData({
            data: '你的手机号',
            success() {
              wx.showToast({
                title: '内容已复制到剪贴板，请用浏览器打开。',
                icon: 'none',
                duration: 1000,
              })
            }
          })
        }
      }
    })
  },

  copyMail() {
    wx.setClipboardData({
      data: this.data.mail,
      success() {
        wx.showToast({
          title: '内容已复制到剪贴板，请用浏览器打开。',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },

  copyGithub() {
    wx.setClipboardData({
      data: this.data.github,
      success() {
        wx.showToast({
          title: '内容已复制到剪贴板，请用浏览器打开。',
          icon: 'none',
          duration: 1000
        })
      }
    })
  },

})
