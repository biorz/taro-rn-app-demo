export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/selectImage/index',
    'pages/index/index',
    'pages/list/index',
    'pages/my/index',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    list: [
      {
        pagePath: 'pages/home/index',
        text: 'home',
        selectedIconPath: './assets/img/sourceHallActive.png',
        iconPath: './assets/img/sourceHall.png',
      },
      {
        pagePath: 'pages/list/index',
        selectedIconPath: './assets/img/sendReceiptActive.png',
        iconPath: './assets/img/sendReceipt.png',
        text: 'list',
      },
      {
        pagePath: 'pages/my/index',
        selectedIconPath: './assets/img/apppointment.png',
        iconPath: './assets/img/apppointment.png',
        text: 'my',
      },
    ]
  },

})
