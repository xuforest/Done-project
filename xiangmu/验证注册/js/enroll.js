/**
 * Created by hxsd on 2016/4/14.
 */
$(document).ready(function(){
/*-------------------------------手机号码验证-------------------------开始--------------------------------------------*/

    $("#mobileNub").blur(function(){
        var mobileNubReg = /^[0-9]{11}$/;
       if(mobileNubReg.test($(this).val())){                                                                           //验证手机号是否正确
           $("#resDiv").html("");
           $("#resSpan").html("<span class='fa fa-check-circle' id='check'></span>");                            //验证手机号是否正确   正确 输出对号图标
       }else{
           $("#resDiv").html("");
           if($(this).val()==""){                                                                                      //验证手机号是否正确    不正确继续判断手机号输入是否为空
               this.focus();                                                                                            //为空强制获取焦点   并在resSpan输出提示信息
               $("#resSpan").html("<span class='fa  fa-times-circle' id='close'></span>" + "手机号不能为空");
           }else {
               this.blur();                                                                                             //不为空取消强制获取焦点   并在resSpan输出提示信息
               $("#resSpan").html("<span class='fa  fa-times-circle' id='close'></span>" + "您输入的手机号码错误，请重新输入！");
           }
       }
        if(!($(this).val()== "")){                                                                                     //输入框不为空   恢复其它两个输入框的输入效果
            $("#picNub").attr('readonly',false);
            $("#mobileTextNub").attr('readonly',false);
        }
    });
    $("#mobileNub").focus(function(){                                                                               //当mobileNub  获取焦点时  其它输出狂只可读  不能输入

        $("#resSpan3").html("")    ;                                                                                  //清空resSpan3  内的一切内容
        $("#resSpan").html(" ");                                                                                      //清空resSpan  内的一切内容
        $("#picNub").attr('readonly',true);                                                                          //  picNub   只可读
        $("#mobileTextNub").attr('readonly',true);                                                                  //  mobileTextNub   只可读
    });

/*------------------------------手机号码验证----------------------------结束------------------------------------------*/

/*------------------------------图片验证--------------------------------结束------------------------------------------*/

    $("#picNub").blur(function(){
         var picNub = /^[a-z0-9]{5}$/i;                                                                                 //图片验证
         if(picNub.test($(this).val())){
             $("#resSpan2").html("<span class='fa fa-check-circle' id='check'></span>");                       //通过正则表达式   输出对 号   图标
         }else{
             if($(this).val() == ""){                                                                                  // 判断输入框是否为空   为空则清空resSpan  内的一切内容
                 $("#resSpan2").html("")
             }else {                                                                                                    //不通过正则表达式   输出差号  图标
                 $("#resSpan2").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>图片验证码错误</span>");
             }
         }
     });
    $("#picNub").focus(function(){
        $("#resSpan3").html("")    ;                                                                                  //清空resSpan3  内的一切内容
    });

/*------------------------------图片验证---------------------------------开始-----------------------------------------*/

/*------------------------------手机验正码验证---------------------------开始-----------------------------------------*/

                                                                                                                        //手机验证码目前只做格式判断   正则判断
    $("#mobileTextNub").blur(function(){
        var mobileTextNub = /^[0-9]{4,6}$/;
        if(mobileTextNub.test($(this).val())){                                                                         //正确  提示  对号   错误出现错误信号并提示信息
            $("#resSpan3").html("<span class='fa fa-check-circle' id='check'></span>")
        }else{
            $("#resSpan3").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>验证码格式不正确</span>")
        }
    });
    $("#button").click(function(){
        $("#resSpan3").html("")    ;                                                                                  //清空resSpan3  内的一切内容
        var mobileNubReg = /^[0-9]{11}$/;
        var picNub = /^[a-z0-9]{5}$/i;
        if(picNub.test($("#picNub").val())){                                                                          //判断图片验证码格式是否通过   不管对否都强制清空resDiv
            $("#resDiv").html("");
        }else{
            $("#resDiv").html("");
        }
        if(mobileNubReg.test($("#mobileNub").val()) && $("#mobileNub").val() !="" && picNub.test($("#picNub").val()) ){  //按钮点击事件  判断手机号是否通过   手机号不为空   图片验证是否通过

            $(this).val("验证码已发送");                                                                              //改变按钮的文字
            $("#button").attr("disabled",true);                                                                     //禁止按钮的效果
            var current = 60;                                                                                           //定义current   为倒计时做准备
                                                                                                                        // 控制60s  恢复按钮内原来的文字内容  并把   resSpan  内容清空
            var interval = setInterval (function(){
                if(current >= 0){
                    $("#resSpan1").html(current -- +"秒后可从新获取");                                               //输出倒计时
                }
                if(current==0){
                    $("#button").attr("disabled",false);                                                            //当current等于0 是    恢复按钮的效果
                }
                if( current<0 ){                                                                                        //当current小于0       改变按钮文字  清空倒计时    清空定时器
                    $("#button").val("发送验证码");
                    $("#resSpan1").html(" ");
                    clearInterval(interval);
                }
            },1000)
        }else {                                                                                                         //如果三个条件不同是成立完成以下判断
            if ($("#mobileNub").val() == "") {                                                                        //判断手机号是否为空   是  提示信息
                $("#resSpan").html("<span class='fa  fa-times-circle' id='close'></span>" + "手机号不能为空");
            }else{
                var mobileNubReg = /^[0-9]{11}$/;                                                                       //手机号不为空   判断手机号是否通过验证
                if(mobileNubReg.test($("#mobileNub").val())){                                                         //手机号通过验证  再判断  图片验证码输入框是否为空
                    if($("#picNub").val() =="" ){                                                                     //如果为空显示提示信息
                        $("#resDiv").html("请填写图片验证码！");
                    }
                }
            }
        }
    });

/*------------------------------手机验正码验证--------------------------结束------------------------------------------*/

/*------------------------------btn-------------------------------------开始------------------------------------------*/
    $("#btn").click(function(){
        $("#resSpan3").html("")    ;                                                                                  //清空resSpan3  内的一切内容
        var mobileNubReg = /^[0-9]{11}$/;
        var mobileTextNubReg = /^[0-9]{4,6}$/;                                                                          //判断手机号    手机验证码  是否正确    判断checked是否被勾选！！！！！！
        var picNub = /^[a-z0-9]{5}$/i;
        if(!$("#checkBox").prop("checked")){
            $("#resDiv").html("您确定不接受CSDN注册条款吗？");
        }
        if(mobileNubReg.test($("#mobileNub").val()) && mobileTextNubReg.test($("#mobileTextNub").val()) && $("#checkBox").prop("checked") && picNub.test($("#picNub").val()) ){
            location.replace("注册页面1.html");                                                                      //跳转到第二个注册页面
        }
        if(mobileTextNubReg.test($("#mobileTextNub").val())){

        }
        if($("#mobileNub").val()==""){                                                                                //判断手机号是否为空      空的话在上方盒子中输出文字   并清空右侧盒子
            $("#resDiv").html("手机号码不能为空！");
            $("#resSpan").html("");
        }else{
            if(mobileNubReg.test($("#mobileNub").val())) {                                                            //判断手机号是否为空      不为空的话判断输入手机号是否正确        正确的话判断手机验证码是否正确
                if($("#mobileTextNub").val()==""){
                    $("#resDiv").html("请填写验证码！");
                }
            }else {                                                                                                    //判断手机号是否为空      为空的话在上方输出文字    清空右侧盒子
                $("#resDiv").html("您输入的手机号码错误，请重新输入！");
                $("#resSpan").html("");
            }
        }
    });

/*------------------------------btn-------------------------------------结束------------------------------------------*/

/*------------------------------图片验证码-------------------------------------开始------------------------------------------*/
    $("#picBox").click(function(){               //$("#picBox").children("div").get(0)    $("#picBox")主容器  $("#picBox").children("div")主容器中的所有孩子
                                                    //$("#picBox").children("div").get(0)  主容器中的所有孩子中的第一个
        //console.log( $("#picBox").children("div").get(0));          //console   一下  看控制台输出的div是哪个
        $("#picBox").append( $("#picBox").children("div").eq(0));//这行代码可以理解为    把主容器中第一个div   动态添加到主容器的最后  添加的时候并删除  他本身在ul中的站位
       // $("#picBox").children("div").eq(0).remove();               //这行代码的意思是     删除   主容器中的  第一个div的所有内容
                                                                    //所以这里不用先删除再添加了    一直append  就会实现一边删除  一边添加的无限循环
                                                                    //自己在控制台看的实际效果  表述并不一定正确    回头问老师
    });
    $("#picBtn").click(function(){
        $("#picBox").append( $("#picBox").children("div").eq(0));
    });


/*------------------------------图片验证码-------------------------------------结束------------------------------------------*/

});