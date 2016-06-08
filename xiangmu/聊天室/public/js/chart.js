/**
 * Created by hxsd on 2016/4/28.
 */
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
    response.sendFile(__dirname + "/public/chart.html");
});

// 声明程序运行的端口号
var port = 8066;

httpServer.listen(port,function(){
    console.log("服务器正在运行....");
});
