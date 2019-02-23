$(document).ajaxStart(function() {

    //开启进度条
    NProgress.start();

})
$(document).ajaxStop(function() {
 // 模拟网络延迟
  setTimeout(function() {
    // 结束进度条
    NProgress.done();
  }, 500);

})

// 公用的功能:
// 1. 左侧二级菜单的切换
// 2. 左侧整体菜单的切换
// 3. 公共的退出功能 
// 等待 dom 结构加载完成后, 才会执行
$(function() {
  // 1. 左侧二级菜单的切换
  $('.lt_aside .category').click(function() {
    // 找下一个兄弟元素, 切换显示
    $(this).next().stop().slideToggle();
  });
  // 2. 让左侧整体菜单的切换;
  $('.lt_topbar .icon_menu').click(function() {
    // 点击的时候让左侧整个菜单切换显示, 改左侧菜单的 left 值
    $('.lt_aside').toggleClass('hidemenu');
    $('.lt_main').toggleClass('hidemenu');
    $('.lt_topbar').toggleClass('hidemenu');
  })

// 3. 退出功能
//   点击模态框的退出按钮, 表示确认退出
  //   发送 ajax 请求, 让服务器端销毁用户的登陆状态
  //    点击菜单的退出按钮,
  $('.lt_topbar .icon_logout').click(function() {
    // 让模态框显示, modal('show')
    $('#logoutModal').modal('show');
  });
  
  //   点击模态框的退出按钮, 表示确认退出
    //   发送 ajax 请求, 让服务器端销毁用户的登陆状态
  
    $('#logoutBtn').click(function(){
    $.ajax( {
      type:'get',
      url:'/employee/employeeLogout',
      dataType:'json',
      success:function(info) {
        console.log(info);
        if(info.success) {
          location.href = 'login.html'
        }
        
      }
    })
  })

})
