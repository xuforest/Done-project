/**
 * Created by hxsd on 2016/4/28.
 */
    // 响应静态资源请求

    // 引入express 模块
    var express = require("express");
    // 创建web服务器
    var app = express();

    //创建原生的http web服务器
    var http = require("http");
    var httpServer = http.createServer(app);

    // 引入socket.io模块
    var socketio = require("socket.io");
    var serversocket = socketio.listen(httpServer);

    // 声明一个数组
    var allUsers = [];

    // 。use（）指定中间件
    // 提供静态资源，指定静态资源的位置
    app .use(express.static("public"));

    // 处理默认首页
    app.get("/",function(request,response){
        response.sendFile(__dirname + "/public/index.html");
    });

    // 声明程序运行的端口号
    var port = 8088;

    httpServer.listen(port,function(){
        console.log("服务器正在运行....");
    });

    /****************************************************************************************************/
    // serversocket 相当于10086客服系统
    // 回调函数中socket参数代表和当前连接的客户端socket进行通信的服务器端的socket
    // 可以将这个cocket理解为10086的001号客服

 serversocket.on("connection",function(socket){
    console.log("有客户请求socket链接，当前socket id为："+ socket.id);
    allUsers.push(socket);
    console.log(allUsers.length);

    // 从服务器端主动发消息给客户端
    // emit()方法有两个参数，发送自定义的消息
    // 参数1.该消息的名称
    // 参数2.消息内容
    socket.emit("welcome",{message:"您已连接上服务器，请输入昵称登陆！"});

    // 为socket指定监听一个叫做"nickname"的事件
    socket.on("nickname",function(data){
        console.log("用户昵称：" + data.nickname);
        // 将用户的昵称保存起来（保存到socket中）
        socket.nickname = data.nickname;
        socket.length=allUsers.length;
        console.log(socket.length);
        // 处理用户发来的性别，状态，头像数据

        socket.sex = data.sex;
        console.log(data.sex);
        socket.worked = data.worked;
        socket.toupic = data.toupic;
        console.log(socket.toupic);


        // 将新用户进入聊天室的信息群发给所有在线的用户
        // socket.broadcast是群发消息，除了给自己
        socket.broadcast.emit("user_entered",data);
        socket.broadcast.emit("user_si",{length:socket.length});

        //给自己发回一个欢迎，确认的消息
        socket.emit("my_entered",data);
        socket.emit("user_people",{length:socket.length});

    });
    // 处理用户离开事件
    socket.on("disconnect",function(){
        console.log("用户:" + socket.nickname + "离开了。");
        allUsers.pop(socket);
       // console.log(allUsers.length);
        socket.length = allUsers.length;
        console.log(socket.length);
        socket.broadcast.emit("user_leave",{nickname:socket.nickname});

        socket.broadcast.emit("user_only",{length:socket.length});

    });

    // 处理用户发送的聊天信息
    socket.on("message",function(data){
        console.log(socket.nickname + "说：" + data.message);

        if(data.type == "userMessage"){
            // 群发
            data.nickname = socket.nickname;
            socket.broadcast.send(data);
            // 发给自身
            data.nickname = "我";
            data.type = "myMessage";
            socket.send(data);
        }
    });

});