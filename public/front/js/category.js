$(function() {
// 一进入页面,就发送ajax请求,获取左侧一级分类的列表数据;
    $.ajax({
        type:'get',
        url:'/category/queryTopCategory',
        dataType:'json',
        success:function(info) {
            console.log(info);
            var htmlStr = template('leftTpl',info);
            $('.lt_category_left ul').html(htmlStr);
            //默认一进入页面,就调用一次renderById()方法,渲染一下第一个一级分类对应的二级分类页面;
            renderById(info.rows[0].id);
        }
    })
    // 实现左侧菜单的点击切换功能,委托点击i事件
    $('.lt_category_left').on('click','a',function() {
        // 移除所有a的current类
        $('.lt_category_left a').removeClass('current');
        //给点击的那个添加current类;
        $(this).addClass('current');
        
        //完成点击左侧菜单对应右侧页面页切换的功能;
            //在页面拼接的时候就把点击对应的那个id存储一下;
            var id = $(this).data('id');
            renderById( id );
    })

    //封装一个函数方法,根据一级分类的id,请求二级分类数据,并且完成渲染;
    function renderById( id ) {
        $.ajax({
            type:'get',
            url:'/category/querySecondCategory',
            data:{
               id:id 
            },
            dataType:'json',
            success:function( info ){
                console.log(info);
                var htmlStr = template('rightTpl', info);
                $('.lt_category_right ul').html( htmlStr );
            }
        })
    }

});