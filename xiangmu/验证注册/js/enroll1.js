/**
 * Created by hxsd on 2016/4/14.
 */
$(document).ready(function(){
    /*-------------------------------用户名-------------------------开始----------------------------------------------*/
    $("#userName").blur(function(){                                                                                  //定义用户名失去焦点事件
        if($(this).val()=="") {                                                                                        //判断输入框是否为空  如果为空显示提示信息
            $("#resDiv").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");
        }else{
            var userNameReg = /^[a-z][a-z0-9_-]{3,16}$/;                                                                //如果不为空  判断输入的用户名是否符合格式
            if(userNameReg.test($(this).val())){
                $("#resDiv").html("<span class='fa fa-check-circle' id='check'></span>")
                $("#userName").css("border","1px solid #ccc");
            }else{                                                                                                      //正确与错误 各输出提示信息
                $("#resDiv").html("<span class='fa  fa-times-circle' id='close'></span>" + "用户名格式不正确")
            }
        }
    });
    $("#userName").focus(function(){                                                                                 //当用户名输入框获取焦点输出  提示信息
        $("#resDiv").html("<div class='fa fa-info-circle'></div><p>2~20个字符，支持小写英文，数字和'_'格式，请以英文字母开头</p>");
        $("#userName").css("border","1px solid red");
    });


    /*------------------------------用户名----------------------------结束--------------------------------------------*/


    /*------------------------------密码---------------------------开始-----------------------------------------------*/

    $("#passWord").blur(function(){                                                                                  //定义密码失去焦点事件
        if($(this).val()=="") {                                                                                        //判断输入框是否为空  如果为空显示提示信息
            $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");
        }else{
            var passWordReg =/^[a-zA-Z0-9,.!'"?]{6,20}$/;
            var passWordReg3 =/^[a-zA-Z0-9,.!'"?]{20,100}$/;
            if(passWordReg.test($(this).val())){                                                                       //如果不为空  判断输入的密码是否符合格式
                $("#resDiv1").html("<span class='fa fa-check-circle' id='check'></span>");
                $("#passWord").css("border","1px solid #ccc");
            }else{
                $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>密码格式不正确</span>");
            }                                                                                                           //正确与错误 各输出提示信息
            if(passWordReg3.test($(this).val())){
                $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>密码长度超过20位，请重新输入.</span>");
            }
        }
    });
        $("#passWord").focus(function(){                                                                            //当用户名输入框获取焦点输出  提示信息
        $("#resDiv2").html("");
        $("#passWord").css("border","1px solid red")
        $("#resDiv1").html("<ul><li id='resLi'>低</li><li id='resLi1'></li><li id='resLi2'></li><li id='resLi3'></li></ul><div class='fa fa-info-circle'></div><p>6~20个字符;只能包含大小写、数字、以及标点（空格除外）</p>");
    });
    $("#passWord").keyup(function(){                                                                                  //订阅键盘按键抬起时间
        var passWordReg1=/^[a-zA-Z0-9]{7,10}$/;
        var passWordReg2=/^[a-z0-9,.!'"?]{12,20}$/;
        var passWordReg =/^[a-zA-Z0-9,.!'"?]{12,20}$/;
        var passWordReg3 =/^[a-zA-Z0-9,.!'"?]{20,100}$/;
        console.log(passWordReg1.test($(this).val()));                                                                 //每次抬起获取输入框里的值  更具和不同的正则表达式对比  分出显示密码的等级
        if(passWordReg1.test($(this).val())){
            $("#resLi").html("中");
            $("#resLi1").css("background","#6eaa00");
            $("#resLi2").css("background","#6eaa00");
            $("#resLi3").css("background","#ccc");
        }
        if(passWordReg.test($(this).val()) || passWordReg2.test($(this).val())){
            $("#resLi").html("高");
            $("#resLi1").css("background","#6eaa00");
            $("#resLi2").css("background","#6eaa00");
            $("#resLi3").css("background","#6eaa00");
        }
        if(passWordReg3.test($(this).val())){                                                                           //如果密码长度超过20位  出现提示信息
            $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>密码长度超过20位，请重新输入.</span>")
        }
        if($(this).val()==""){                                                                                          //如果密码输入框为空  出现提示信息
            $("#resDiv1").html("<ul><li id='resLi'>低</li><li id='resLi1'></li><li id='resLi2'></li><li id='resLi3'></li></ul><div class='fa fa-info-circle'></div><p>6~20个字符;只能包含大小写、数字、以及标点（空格除外）</p>");
        }
    });

    /*------------------------------密码--------------------------结束------------------------------------------------*/


    /*------------------------------再次输入密码--------------------------开始------------------------------------------*/

    $("#nextPassWord").blur(function(){                                                                             //再次输入密码输入框  失去焦点事件
        if( $(this).val()== $("#passWord").val() ){                                                                  //判断两个输入框的获取的值是否相同    相同与否分别输出不同的提示信息
            $("#resDiv2").html("<span class='fa fa-check-circle' id='check'></span>");
            $("#nextPassWord").css("border","1px solid #ccc");
        }else{
            $("#resDiv2").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>两次输入不一致，请重新输入.</span>")
            $("#nextPassWord").css("border","1px solid #ccc");
        }
        if( $("#nextPassWord").val() == "" ){                                                                        //如果再次输入框的内容为空     清空  resDiv2
            $("#resDiv2").html("")
        }
    });
    $("#nextPassWord").blur(function(){
        $("#nextPassWord").css("border","1px solid red");
    });

        /*------------------------------再次输入密码--------------------------结束------------------------------------------*/

    /*------------------------------下一步按钮--------------------------开始------------------------------------------*/

    $("#btn").click(function(){                                                                                       //下一步的 点击事件
        if( $("#userName").val() == "" && $("#passWord").val() == "" && $("#nextPassWord").val() == "" ){         //判断三个输入框是否为空
            $("#userName").css("border","1px solid red");
            $("#passWord").css("border","1px solid red");
            $("#nextPassWord").css("border","1px solid red");
            $("#resDiv").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");
            $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");
            $("#resDiv2").html("<span class='fa  fa-times-circle' id='close'></span>" + "<span>内容不能为空</span>");
        }
        if( $("#passWord").val() == ""  && $("#nextPassWord").val() == "" ){                                        //判断2个输入框是否为空
            $("#resDiv1").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");
        }else {
            if($("#nextPassWord").val() == "" ){
                $("#resDiv2").html("<span class='fa  fa-times-circle' id='close'></span>" + "内容不能为空");      //判断1个输入框是否为空
            }
        }
        var passWordReg =/^[a-zA-Z0-9,.!'"?]{6,20}$/;
        var userNameReg = /^[a-z][a-z0-9_-]{3,16}$/;
        if(passWordReg.test($("#passWord").val()) && userNameReg.test($("#userName").val()) && $("#passWord").val()== $("#nextPassWord").val() ){
            location.replace("注册页面2.html")                                                                       //判断三个条件是否成立  成立的话跳转页面
        }
    });

    /*------------------------------下一步按钮--------------------------结束------------------------------------------*/

});