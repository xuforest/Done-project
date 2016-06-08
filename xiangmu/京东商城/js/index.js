/**
 * Created by hxsd on 2016/3/31.
 */
window.onload=function(){
//登录框弹出效果
    var login= document.getElementById("login");
    login.innerText="你好，请登录！";
    login.onclick=function () {
        var loginBox1=document.getElementById("loginBox");
        loginBox1.style.padding="40px 80px";
        loginBox1.style.display="block";

        var inputUser=document.getElementById("userName");
        var inputPassword=document.getElementById("password");

        var buttonSure=document.getElementById("btnSure");
        buttonSure.onclick=isNull;
        var buttonCancel=document.getElementById("btnCancel");
        buttonCancel.onclick=cancel;
        function cancel(){      //取消按钮的点击事件
            loginBox1.style.display="none";
        };
        var messageShow=document.getElementById("message");
        function isNull(){      //判断文本框输入的内容是否为空
            if(inputUser.value=="" ||inputPassword.value=="")   //为空时，要提示用户信息，并返回
            {
                messageShow.innerText="用户名或密码不能为空！";
            }
            else
            {
                var indexPosition=inputUser.value.indexOf("火星");        //匹配用户输入的内容是否有火星两个字
                if(indexPosition>=0)        //当大于等于0时，代表用户输入的内容有火星两个字，即登陆成功，2秒后跳转
                {
                    console.log("登陆成功！");
                    //loginBox1.style.color="red";
                    login.innerText="";
                    login.innerText="欢迎："+inputUser.value+"  登陆！";
                    var count = 2;
                    loginBox1.style.display="none";
                }
                else{
                    //alert("用户名或密码错误");
                    inputUser.value="";
                    inputPassword.value="";
                    messageShow.innerText="用户名或密码错误！";
                }
            }
        };
        var _close=document.getElementById("close");
        _close.onclick=function(){
            loginBox1.style.display="none";
        };
    };

    <!--地区的弹出效果-->
    var _place=document.getElementById("place");
    var _placeBox=document.getElementById("placeBox");
    var liCollections=_placeBox.getElementsByTagName("li");
    var _angel_down=document.getElementById("angel_down");
    var _fistPlaceLi=document.getElementById("fistPlaceLi");

    var _fistPlaceA=document.getElementById("fistPlaceA");

    _place.onmouseover=function(){
        _fistPlaceLi.style.backgroundColor="#930515";   //设置北京刚开始的背景色
        _fistPlaceA.style.color="white";    //设置北京刚开始的字体颜色
        _angel_down.setAttribute("class","fa fa-angle-up");
        _placeBox.style.display="block";
        borderOver(_place);
        _placeBox.onmouseover=function(){
            _placeBox.style.display="block";
            borderOver(_place);
            var _placeText=document.getElementById("placeText");
            for(var a=0;a<liCollections.length;a++){
                liCollections[a].onclick=function(){
                    console.log(this.innerText);
                    _placeText.innerText=this.innerText;
                    //当点击时，字体颜色要发生变化，要遍历所有的a将他先恢复css样式，再让她变色
                    for(var c=0;c<liCollections.length;c++) {
                        liCollections[c].setAttribute("style","");      //li恢复css原有的样式
                        liCollections[c].firstElementChild.setAttribute("style","");        //li里的a恢复css原有的样式
                    }
                    this.style.backgroundColor="#930515";
                    this.firstElementChild.style.color="white";     //设置li里的a字体颜色
                    console.log(this.firstElementChild);
                };
            }
        };
        _placeBox.onmouseout=function(){
            _placeBox.style.display="none";
            borderOut(_place);
        };
    };
    _place.onmouseout=function(){
        _angel_down.setAttribute("class","fa fa-angle-down");
        _placeBox.style.display="none";
        borderOut(_place);
    };
    <!--我的京东功能实现-->
    var _myJingDong=document.getElementById("myJingDong");
    var _myJDBox=document.getElementById("myJDBox");
    var _fa_a=document.getElementById("fa_a");      //设置箭头
    _myJingDong.onmouseover=function(){
        _myJDBox.style.display="block";
        _fa_a.setAttribute("class","fa fa-angle-up");       //鼠标经过，箭头朝上
        borderOver(_myJingDong);

        _myJDBox.onmouseover=function(){
            _myJDBox.style.display="block";
            borderOver(_myJingDong);
        };
        _myJDBox.onmouseout=function(){
            _myJDBox.style.display="none";
            borderOut(_myJingDong);
        };

    };
    _myJingDong.onmouseout=function(){
        _myJDBox.style.display="none";
        borderOut(_myJingDong);
        _fa_a.setAttribute("class","fa fa-angle-down");       //鼠标经过，箭头朝上
    };

    <!--搜索引擎的实现-->
    var arr1 = ["电脑","电风扇","空调","家用电器","电子猫","电子狗","电灯泡","手机"];
    autoThinkSearch("searchInfo",arr1);

    <!--菜单项得实现-->
    var mainMenuBox = document.getElementById("mainMenuBox");
    //计算所有子菜单所在的div的位置 childMenuBox
    var childrenMenuBox = document.getElementById("childrenMenuBox");   //显示子菜单的大盒子
    //针对于父级标签的坐标  offsetTop  offsetLeft
    var clientTop = mainMenuBox.offsetTop;
    var clientLeft = mainMenuBox.offsetLeft+mainMenuBox.clientWidth+1;//1是border-left
    //console.log(clientTop+"   "+clientLeft);
    childrenMenuBox.style.position="absolute";
    childrenMenuBox.style.borderRight="1px solid #822c2d";
    childrenMenuBox.style.borderBottom="1px solid #822c2d";
    childrenMenuBox.style.top = clientTop+"px";
    childrenMenuBox.style.left = clientLeft+"px";
    childrenMenuBox.style.backgroundColor = "#fff";//delete

    var menus = mainMenuBox.children;
    for(var b=0;b<menus.length;b++)
    {
        menus[b].onmouseover = function() {
            this.style.backgroundColor = "#fff";
            //this.style.color = "#c81622";
            childrenMenuBox.style.display = "block";
            //选择显示那一个子菜单
            var dataIndex = this.getAttribute("data-index");
            //     1、将所有的子菜单全部隐藏掉
            for(var e=0; e<menus[dataIndex].getElementsByTagName("a").length;e++)
            {
                menus[dataIndex].children[e].style.color = "#c81622";
            }
            for (var j = 0; j < childrenMenuBox.children.length; j++) {
                childrenMenuBox.children[j].style.display = "none";
            }
            //     将要显示的子菜单显示
            if (dataIndex >= 0) {
                childrenMenuBox.children[dataIndex].style.display = "block";
            }
            //鼠标悬浮在子菜单
            childrenMenuBox.children[dataIndex].onmouseover=function(){
                menus[dataIndex].style.backgroundColor = "#fff";

                //将鼠标在子菜单时要保持主菜单字体颜色任为红色
                for(var e=0; e<menus[dataIndex].getElementsByTagName("a").length;e++)
                {
                    menus[dataIndex].children[e].style.color = "#c81622";
                }
                childrenMenuBox.style.display = "block";
            };
            //鼠标离开在子菜单
            childrenMenuBox.children[dataIndex].onmouseout=function(){
                menus[dataIndex].style.backgroundColor = "#c81622";
                childrenMenuBox.style.display = "none";
                //将鼠标移出子菜单时字体颜色改为白色
                for(var e=0; e<menus[dataIndex].getElementsByTagName("a").length;e++)
                {
                    menus[dataIndex].children[e].style.color = "#fff";
                }
            };
        };
        //当鼠标离开主菜单时，子菜单隐藏
        menus[b].onmouseout = function(){
            this.style.backgroundColor = "#c81622";
            //将鼠标移出主菜单时字体颜色改变，为白色
            for(var e=0; e<this.getElementsByTagName("a").length;e++)
            {
                this.children[e].style.color = "#fff";
            }
            childrenMenuBox.style.display="none";
        };
    }
    <!--图片轮换-->
    pptImage("bigDiv");

    <!--banner图右边目录实现-->
    var _actIcons=document.getElementById("actIcons");
    var actIconsChildren=_actIcons.getElementsByTagName("a");
    for(var c=0;c<3;c++){
        actIconsChildren[c].onmouseover=function(){
            _actIcons.style["display"]="none";

        };
    }

};
//header-top中边框的显示和背景色
function borderOver(id){
    id.style.display="block";
    id.style.backgroundColor="#fff";
    id.style.borderLeft="1px solid #ccc";
    id.style.borderRight="1px solid #ccc";
}
function borderOut(id){
    id.style.backgroundColor="#f2f2f2";
    id.style.borderLeft="1px solid #f2f2f2";
    id.style.borderRight="1px solid #f2f2f2";
}

//登陆窗口
function createBiaoQian(id,type,loginBox1,holder,valueText){
    var _input=document.createElement("input");
    _input.setAttribute("id",id);
    _input.setAttribute("type",type);
    _input.setAttribute("placeHolder",holder);
    _input.setAttribute("value",valueText);
    loginBox1.appendChild(_input);
};
//自动联想函数
function autoThinkSearch(id,arr)
{
    var flag=false;
    var txtSearch = document.getElementById(id);
    var txtInfo=document.createElement("div");
    txtInfo.setAttribute("id","txtInformation");        //设置创建的txtInfo的id名称
    txtInfo.style.zIndex="300";
    var ul1 = document.createElement("ul");
    txtInfo.appendChild(ul1);
    txtSearch.onkeyup = function() {
        if(!document.getElementById("txtInformation"))this.parentElement.appendChild(txtInfo);      //判断是否有这个txtInformation，没有时添加

        txtSearch.onblur=function(){        //当光标离开输入框是，下面的联想框消失
            if(!flag)
            {
                txtInfo.style.display="none";
            }
        };
        this.parentElement.style.position = "relative";
        txtInfo.setAttribute("id","txtInformation")
        txtInfo.style.width="456px";
        txtInfo.style.heigt="auto";
        txtInfo.style.lineHeight="22px";
        txtInfo.style.position="absolute";
        txtInfo.style.left="94px";
        txtInfo.style.top="36px";//有问题
        txtInfo.style.cursor="pointer";
        txtInfo.style.display="none";
        txtInfo.style.backgroundColor="#fff";
        txtInfo.style.borderLeft="1px solid #ccc";
        txtInfo.style.borderRight="1px solid #ccc";
        txtInfo.style.borderBottom="1px solid #ccc";

        //两个事件的目的是标识属性能够控制联想框的显示与隐藏
        txtInfo.onmouseover=function() {
            flag=true;
        };
        txtInfo.onmouseout=function() {
            flag=false;
        };
        ul1.innerHTML = "";
        console.log("onkeyup\t"+this.value);

        //if(txtSearch.length == 0) {return;}       //若子字符串是空字符串 ，则不进行搜索（不显示）
        for(var j=0;j<arr.length;j++)
        {
            if(arr[j].indexOf(txtSearch.value) >= 0)       //进行字符串的查询，有查询文本框输入的内容，则大于等于0
            {
                var li1 = document.createElement("li");
                li1.onmouseover=function() {
                    li1.backgroundColor="#fff";
                };
                li1.onmouseout=function() {
                    li1.backgroundColor="none";
                };
                li1.innerText = arr[j];     //查询文本框输入的内容在数组中有，则将它显示在联想框中
                li1.onclick = function() {
                    txtSearch.value =  this.innerText;      //当点联想击文本框中的词时，将他显示在查询文本框中
                    ul1.parentElement.style.display = "none";
                };
                if(txtSearch.value != "")       //当查询文本框不为空时，UL中加li
                {
                    ul1.appendChild(li1);
                }
            }
            ul1.parentElement.style.display = "block";
        }
    };
};
//图片banner
function pptImage(boxDivId){
    //当前最大的z-index值
    var currentZIndex = 0;
    //当前最上边div所在父标签的（所有子标签）索引
    var currentImgDivIndex = 1;

    //标志变量---鼠标在li上面么?
    var flagMouseOnLi = false;
    //所有图片所在的盒子
    var bigDiv = document.getElementById(boxDivId);

    //装在一张图片的小盒子
    //所有图片所在div的数组
    var imgDivs = bigDiv.getElementsByTagName("div");
    currentZIndex = imgDivs.length - 1;

    //做一个倒循环
    for(var i=(imgDivs.length - 1);i>=0;i--){
        //abs这个函数是用来取绝对值
        imgDivs[i].style.zIndex = Math.abs(i - (imgDivs.length - 1));
    }

    //做成一个定时器
    var interval = setInterval(function(){
        if(!flagMouseOnLi) {            //当鼠标不再li上面时播放动画
            //当前图片所在的div imgDivs[currentImgDivIndex]
            //设定它的zindex为currentZIndex    目的是最上边
            imgDivs[currentImgDivIndex].style.zIndex = currentZIndex;

            //把ul 的zindex赋值为currentZIndex
            document.getElementById("imgNumberBox").style.zIndex = currentZIndex;

            //先将所有的li的背景颜色去掉(恢复为css当中定义的颜色)
            var numberLis = document.getElementById("imgNumberBox").getElementsByTagName("li");
            for(var k =0;k<numberLis.length;k++){
                numberLis[k].setAttribute("style","");
            }
            //再将当前图片对应的li的背景颜色设定为红色
            numberLis[currentImgDivIndex].style.backgroundColor = "red";

            //调用淡入的效果
            danRu(imgDivs[currentImgDivIndex]);

            //准备下一张图片的zindex值
            currentZIndex++;

            //当 currentImgDivIndex 的值 等于 所有图片的个数时，重置为0
            currentImgDivIndex = currentImgDivIndex == (imgDivs.length - 1) ?
                0 : (currentImgDivIndex + 1);
        }
    },3000);

    //在图片的上方显示数字索引
    //并且订阅数字索引的onmouseover事件
    //     当鼠标在数字上时，停止播放动画并显示对应的图片
    //     当鼠标离开数字时，继续播放动画


    var ulBox = document.createElement("ul");
    ulBox.setAttribute("id","imgNumberBox");                //为ul增加ID属性，便于定时在3秒后获取对象
    for(var j=0;j<imgDivs.length;j++){
        //创建每一个li的过程
        var tmpLi = document.createElement("li");
        tmpLi.innerText = j + 1;
        ulBox.appendChild(tmpLi);           //添加到ul中

        //订阅这个li的onmouseover事件
        tmpLi.onmouseover = function(){
            flagMouseOnLi = true;
            var index = parseInt(this.innerText);         //字符串类型   转换为数字类型的

            //先将红色底色的li背景清除
            ulBox.children[(currentImgDivIndex - 1) < 0 ? 2 : (currentImgDivIndex - 1)].setAttribute("style","");

            //imgDivs[index - 1]    //对应的图片所在的div
            currentImgDivIndex = index - 1;             //鼠标在数字1上的时候 ，currentImgDivIndex= 0
            imgDivs[currentImgDivIndex].style.zIndex = currentZIndex;           //currentImgDivIndex= 0  第一张图片
            this.parentElement.style.zIndex = currentZIndex;            //更改的ul的zindex
            currentZIndex++;            //为下一张图片准备好更高zindex
            danRu(imgDivs[currentImgDivIndex]);

            //当 currentImgDivIndex 的值 等于 所有图片的个数时，重置为0
            currentImgDivIndex = currentImgDivIndex == (imgDivs.length - 1) ?
                0 : (currentImgDivIndex + 1);
        };
        //订阅这个li的onmouseout事件
        tmpLi.onmouseout = function(){
            flagMouseOnLi = false;
        };
    }
    bigDiv.appendChild(ulBox);
};
//图片中颜色淡入
function danRu(element){
    var opa = 0;
    element.style.opacity = opa + "";
    var timer2 =  setInterval(function(){
        opa += 0.15;
        element.style.opacity = opa + " ";
        if(opa>=1)clearInterval(timer2);
    },100);
};