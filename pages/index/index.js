Page({
  data:{
    value:"0",
    t:'5',
    up:false,
    down:true,
    g:"0.00",
    x:"0.00",
    lilv:"4.75",
    j:"0.00",
    w:"0.00"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    
  },
  val:function(e){
    console.log(e)
    var self=this;
    var value;
    if(e.detail.value===""){
      value=0
    }else{
      value=e.detail.value
    }  
    
    this.setData({
      value:value
    })

    setTimeout(function(){

      if(self.data.up===false){
          var l=parseFloat(self.data.lilv)/1200;
          var x=parseFloat(self.data.t)*12;
          var n=Math.pow(l+1,x) 
          var p=parseFloat(self.data.value)*10000
          var g=p*l*n/(n-1)        
          var z=g*x-p
          var w=p+z
          console.log(w)
            self.setData({
              g:g.toFixed(2),
              x:z.toFixed(2),
              j:"0.00",
              w:w.toFixed(2)
            })
          
      }else if(self.data.up===true){
            var p=parseFloat(self.data.value)*10000
            var x=parseFloat(self.data.t)*12;
            var l=parseFloat(self.data.lilv)/1200;
            var g=p/x+p*l
            var z=p*l*(x/2+0.5)
            var f=(p/x)*l
            var w=p+z
            self.setData({
                g:g.toFixed(2),
                x:z.toFixed(2),
                j:f.toFixed(2),
                w:w.toFixed(2)
            })
      }
    },10) 
  },






  times:function(){
    var self=this;
    wx.showActionSheet({
      itemList:["5","10","15","20","25","30"],
      success:function(e){
        var l;
        var x=e.tapIndex+1
        if(x===1){
          l=4.75;
        }else{
          l=4.90
        }
       
        console.log(x)
        self.setData({
          t:x*5,
          lilv:l
        })
        setTimeout(function(){

      if(self.data.up===false){
          var l=parseFloat(self.data.lilv)/1200;
          var x=parseFloat(self.data.t)*12;
          var n=Math.pow(l+1,x) 
          var p=parseFloat(self.data.value)*10000
          var g=p*l*n/(n-1);
          var z=g*x-p
          var w=p+z
            self.setData({
              g:g.toFixed(2),
              x:z.toFixed(2),
              j:"0.00",
              w:w.toFixed(2)
            })
          
      }else if(self.data.up===true){
            var p=parseFloat(self.data.value)*10000
            var x=parseFloat(self.data.t)*12;
            var l=parseFloat(self.data.lilv)/1200;
            var g=p/x+p*l
            var z=p*l*(x/2+0.5)
            var f=(p/x)*l
            var w=p+z
            self.setData({
                g:g.toFixed(2),
                x:z.toFixed(2),
                j:f.toFixed(2),
                w:w.toFixed(2)
            })
      }
    },10)
      }

    })
  },
  benxi:function(){
    this.setData({
      up:false,
      down:true
    })
    var self=this
    setTimeout(function(){
          var l=parseFloat(self.data.lilv)/1200;
          var x=parseFloat(self.data.t)*12;
          var n=Math.pow(l+1,x) 
          var p=parseFloat(self.data.value)*10000
          var g=p*l*n/(n-1)
          var z=g*x-p
          var w=p+z
            self.setData({
              g:g.toFixed(2),
              x:z.toFixed(2),
              j:"0.00",
              w:w.toFixed(2)
            })
    },10) 
  },
  benjin:function(){
     this.setData({
      up:true,
      down:false
    })
    var self=this
    setTimeout(function(){
            var p=parseFloat(self.data.value)*10000
            var x=parseFloat(self.data.t)*12;
            var l=parseFloat(self.data.lilv)/1200;
            var g=p/x+p*l
            var z=p*l*(x/2+0.5)
            var f=(p/x)*l
            var w=p+z
            self.setData({
                g:g.toFixed(2),
                x:z.toFixed(2),
                j:f.toFixed(2),
                w:w.toFixed(2)
            })
    },10) 
  },
  onReady:function(){
    // 页面渲染完成
    
  },
  onShow:function(){
    // 页面显示
    
  },
  onHide:function(){
    // 页面隐藏
    
  },
  onUnload:function(){
    // 页面关闭
    
  }
})
