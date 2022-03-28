// pages/message/message.js

Page({
  data: {
    disabled: false,
    avatarUrl: './头像.jpg',
    userInfo: {},
    logged: false,
    takeSession: false,
    requestResult: '',
    //判断小程序的API，回调，参数，组件等是否在当前版本可用。
    canIUse: wx.canIUse('button.open-type.getUserProfile'),
    isHide: true,
    sqFlag: false,
    liuyanName: '让白',
     list:[],
     inputVal:''
  },

  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  
  onShowList:function(){
    console.log('onShowList')
    //查询出数据库所有的内容并显示出来
    const db = wx.cloud.database({
      env:'cloud1-0g5l95vz876cd2e5'
    })
    db.collection('liuyan').get().then(res => {
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
        console.log(res.data)
       this.setData({
        list: res.data
        })
      })
    },
  
  changeInputVal(ev) {
    this.setData({
      inputVal: ev.detail.value
    });
  },
  delMsg(ev) {
    //拿到设置的该留言的id
     console.log("delete id",ev.target.dataset.index);
     const id = ev.target.dataset.index;
    const db=wx.cloud.database('liuyan');
    db.collection('liuyan').doc(id).remove({
      success(res) {
        console.log("delete success~");
        console.log(res)
      }

    })

     this.onShowList();
  },
  addMsg() {    //添加留言方法
     console.log(this.data.inputVal);
     if(this.data.inputVal != '')
     {
        const db = wx.cloud.database('liuyan');
        const that=this;
        db.collection('liuyan').add({
          // data 字段表示需新增的 JSON 数据
          data: {
            // _id: 'todo-identifiant-aleatoire', 
            // 可选自定义 _id，在此处场景下用数据库自动分配的就可以了
            inputVal: this.data.inputVal,
            liuyanName: this.data.liuyanName,
            description: 'learn cloud database',
            due: new Date().getMilliseconds,
            show: true
          },
          success(res) {
            console.log("add success!");
            that.onShowList();
            // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
            console.log(res)
           
          }
        })
        //设置留言框的值为空
        this.setData({
          inputVal:'',   //设置初始值为空
          disabled: true
        });
        //定时器 5秒后才恢复留言按钮的使用
       setTimeout((function callback() {
         this.setData({ disabled: false });
       }).bind(this), 5000);

     }else{
       wx.showToast(
         {
         title: '请填写内容~',
         icon: 'none'
       })
     }
     
  },

})