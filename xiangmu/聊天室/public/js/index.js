/**
 * Created by hxsd on 2016/4/29.
 */
/************************头像的点击事件*******************/
$(document).ready(function(){
    $("#user").click(function(){
        $("#nickname").show();
    });
    $("#sex").click(function(){
        $("#sexBox").show();
    });
    $("#busy").click(function(){
        $("#busyBox").show();
    });
    $("#topica").click(function(){
        $("#topic").show();
    });

    /***********************头像点击结束*******************/
    /***********************选择头像的事件*****************/
    var addless;
    $("#topic>a").click(function(){
         addless = $(this.firstChild).attr("src");
        $("#topic").hide();
        $("#topicBox").show();
        $("#topicBoxa img").attr("src",addless);
    });
    /***********************选择头像的事件结束*****************/
    /*************************单选按钮事件******************/
    var sex='<img class="mainPeopleImg" src="images/Aa_03.jpg">';
   if($(".sex")[0].checked) {
        sex = '<img class ="mainPeopleImg" src="images/A2_03.jpg">';
        //}else {
        //    sex = '<img class="mainPeopleImg" src="images/Aa_03.jpg">';
        //}
   }

    var worked = "在线";
    if($(".rad")[1].checked){
        worked = "忙碌";}
    //}else  {
    //    worked = "忙碌";
    //}
    /*************************单选按钮事件结束******************/

    /***********************聊天室事件开始*****************/
    // io():连接服务器端 serversocket，并且返回一个客户端的socket对象
    // 客户端通过这个socket对象和服务器端socket通信
    // 当执行io()连接服务端时，会在服务端触发一个connection事件
    var clientSocket = io();

    // 指定客户端的socket监听为welcome的消息
    clientSocket.on("head",function(data){
       // alert(data.message);
    });


    // 为登录按钮绑定事件响应函数
    $("#startchat").click(function(){

        // 获取用户输入的昵称
        var nickname = $("#nickname").val();
        //alert(nickname);
        // 对用户的昵称进行客户端的验证（省）
        var regArry= ["法轮功","反党","反共","枪","达赖喇嘛","暴力","色","抢","杀","死亡","反人民"];
        if($("#nickname").val() == ""){
            $("#nickname").next().html("禁止，空!");
            return;
        }else {
            $("#nickname").next().html("");

            for(var i=0;i<regArry.length;i++){
               // alert(nickname);
               // alert(regArry[i]);
                if(nickname==(regArry[i])){
                    $("#nickname").next().html("太敏感，再想");
                    return;
                }else {
                    $("#nickname").next().html("");
                }
            }
        }

        var userText = {
            nickname:nickname,
            sex:sex,
            worked:worked,
            toupic:addless
        };
        /***********************用户昵称事件结束*****************/
        // 将昵称发往服务器端
        clientSocket.emit("nickname",userText);
        // 传递得到的性别,状态，头像，数据
        // 接收系统发送的新用户进入聊天室的消息
        clientSocket.on("user_entered",function(data){
            //alert(data.nickname + "进入了聊天室");
            $("#messages").append('<div class="systemMessage">[系统消息]'+data.nickname + '进入了聊天室！</div>');
            $("#main-left").append('<div id ="mainPeople"></div>');

            $("#mainPeople").append('<img class="maintouxiang" src="'+ data.toupic +' ">');

            $("#mainPeople").append(sex);
            $("#mainPeople").append('<span class="mainPeoplex"></span>');
            $("#mainPeople span").html(data.worked);

        });


        // 接收系统发送的我自身成功进入聊天室的消息
        clientSocket.on("my_entered",function(data){
            // alert("我已经成功进入聊天室");

            // 将登陆界面隐藏
            $("#head").hide();
            // 显示聊天界面
            $("#main").show();
            // 在聊天界面中显示一个欢迎信息
            $("#messages").append('<div class="systemMessage">[系统消息]您已进入聊天室，请文明聊天！</div>');
            $("#main-right-head span").html("当前在线人数" + data.length);
            $("#main-left").append('<div id ="mainPeople"></div>');

            $("#mainPeople").append('<img class="maintouxiang" src="'+ data.toupic +' ">');

            $("#mainPeople").append(sex);
             $("#mainPeople").append('<span class="mainPeoplex"></span>');
             $("#mainPeople span").html(data.worked);

            // 为send按钮绑定发送消息事件
            $("#send").click(function(){
                // 获取用户输入的聊天信息
                var input = $("#message").val();

                // 对聊天信息进行有效的判断，非空，是否敏感

                // 将消息发送到服务器
                var msg = {
                    type:"userMessage",
                    message:input
                };
                clientSocket.send(msg);// 发送给服务器
                // 聊天窗口清空
                $("#message").html("");
            });
            // 客户端接收服务器转发的其他用户的聊天信息
            clientSocket.on("message",function(data){
                if(data.nickname == "我"){
                    var message = '<div class="myMessage">[<span class="chatname">'
                        + data.nickname + '</span>]说：'+data.message +'</div><div class="clear"></div>';
                }else {
                    var message = '<div class="userMessage">[<span class="chatname">'
                        + data.nickname + '</span>]说：'+data.message +'</div>';}
                $("#messages").append(message);
            });
            // 响应输入框键盘事件
            $("#message").keyup(function(e){
                // 如果用户按下的是Enter键
                if(e.keyCode == 13){
                    // 触发send按钮的click事件
                    $("#send").click();
                }
            })
        });

        // 接收系统发送的我这里显示的在线人数
        clientSocket.on("user_people",function(data){
            $("#main-right-head span").html("当前在线人数" + data.length);
        });
        clientSocket.on("user_si",function(data){
            $("#main-right-head span").html("当前在线人数" + data.length);
        });
        clientSocket.on("user_only",function(data){
            $("#main-right-head span").html("当前在线人数" + data.length);
        });


        // 接收系统发送的用户离开聊天室的消息
        clientSocket.on("user_leave",function(data){
            //alert(data.nickname + "进入了聊天室");
            $("#messages").append('<div class="leaveMessage">[系统消息]'+data.nickname + '离开了聊天室！</div>');
        });

    });


    /***********************聊天室事件结束*****************/
});


