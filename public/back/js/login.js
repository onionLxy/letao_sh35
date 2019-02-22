// $(function () {
//     /*
//     * 1. 进行表单校验配置
//     *    校验要求:
//     *        (1) 用户名不能为空, 长度为2-6位
//     *        (2) 密码不能为空, 长度为6-12位
//     * */
//     // 进行表单校验初始化
//     $('#form').bootstrapValidator({
//         // 配置图标
//         feedbackIcons: {
//             valid: 'glyphicon glyphicon-ok',
//             invalid: 'glyphicon glyphicon-remove',
//             validating: 'glyphicon glyphicon-refresh'
//         },
//         fields: {
//             // 用户名
//             username: {
//                 validators: {
//                     // 非空
//                     notEmpty: {
//                         message: '用户名不能为空'
//                     },
//                     // 长度校验
//                     stringLength: {
//                         min: 2,
//                         max: 6,
//                         message: '用户名长度为2-6位'
//                     }
//                 }

//             },
//             password: {
//                 // 配置校验规则
//                 validators: {
//                   notEmpty: {
//                     message: '密码不能为空'
//                   },
//                   stringLength: {
//                     min: 6,
//                     max: 12,
//                     message: '密码长度必须是6-12位'
//                   }
//                 }
//               }
//         }
//     })



// })


$(function() {
    /*
     * 1. 进行表单校验配置
     *    校验要求:
     *        (1) 用户名不能为空, 长度为2-6位
     *        (2) 密码不能为空, 长度为6-12位
     * */
  
    // 进行表单校验初始化
    $('#form').bootstrapValidator({
      // 配置图标
      feedbackIcons: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
  
      // 字段列表  field,  要先在 input 中配置 name 属性
      fields: {
        // 用户名
        username: {
          // 校验规则
          validators: {
            // 非空
            notEmpty: {
              // 提示信息
              message: '用户名不能为空'
            },
            // 长度校验
            stringLength: {
              min: 2,
              max: 6,
              message: '用户名长度为2-6位'
            }
          }
        },
        // 密码
        password: {
          // 配置校验规则
          validators: {
            notEmpty: {
              message: '密码不能为空'
            },
            stringLength: {
              min: 6,
              max: 12,
              message: '密码长度必须是6-12位'
            }
          }
        }
      }
    })
    // 💗注册表单验证成功事件success.form.bv
    $('#form').on('success.form.bv', function( e ) {
        // 阻止默认的提交
        e.preventDefault();
    
        // console.log('当前默认的表单提交已经被阻止, 我们通过ajax提交');
    
        $.ajax ({
          type:'post',
          url:'/employee/employeeLogin',
          data:$('#form').serialize(),
          dataType:'json',
          success:function(info) {
           if(info.error=== 1000) {
             alert('用户名不存在')
           }
           if(info.error=== 1001) {
             alert('密码错误')
           }
           if(info.success) {
           // 登录成功, 跳转首页

             location.href = 'index.html';
           }
          }
        })
    
      })
    });