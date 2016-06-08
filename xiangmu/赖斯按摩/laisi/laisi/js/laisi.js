/**
 * Created by hxsd on 2016/5/24.
 */
$(document).ready(function(){
    $('.pic').kxbdSuperMarquee({
        distance:205,
        duration:150,
        time:2,
        direction: 'left',
        btnGo:{left:'#goL',right:'#goR'}
    });

    $('#marquee').kxbdSuperMarquee({
        isMarquee:true,
        isEqual:false,
        scrollDelay:20,
        controlBtn:{up:'#goUM',down:'#goDM'},
        direction:'up'
    });

    $('#aaapic').kxbdSuperMarquee({
        distance:201,
        duration:40,
        time:2,
        direction: 'left',
        navId:'#aaapicNav'
    });

    $('#rongyuA').kxbdSuperMarquee({
        distance:244,
        duration:60,
        time:2,
        direction: 'left',
        btnGo:{left:'#gL',right:'#gR'}
    });

    $('#mendianlunbo').kxbdSuperMarquee({
        distance:107,
        duration:120,
        time:2,
        direction: 'left',
        btnGo:{left:'#gM',right:'#gD'}
    });

    $('#lunboRightoneBox').kxbdSuperMarquee({
        distance:264,
        duration:80,
        time:2,
        direction: 'left',
        navId:'#lunboRightb'
    });

    $('#lunboRighttwoBox').kxbdSuperMarquee({
        distance:270,
        duration:80,
        time:2,
        direction: 'left',
        navId:'#lunboRighttwoBoxb'
    });
});
//首页标题栏选择开始
window.onload= function(){
    var sBox_ = document.getElementById("sBox");
    var lis = sBox_.getElementsByTagName("li");
    var smalls_ = document.getElementById("smalls");
    var small = smalls_.getElementsByTagName("div");

    for(var i=0;i<lis.length;i++){
        lis[i].index = i;

        lis[i].onmouseover = function(){
            for(var j=0;j<lis.length;j++){
                small[j].style.display = "none";
            }
            small[this.index].style.display = "block";
        }
    }


    var jiankangBoxjs_ = document.getElementById("jiankangBoxjs");
    var list = jiankangBoxjs_.getElementsByTagName("li");
    //var boxJs_ = document.getElementById("ss");
    //var listTwo = boxJs_.getElementsByTagName("div");
    for(var r =0;r<list.length;r++){
        list[r].index = r;
        list[r].onmouseover = function(){
            for(var y = 0; y < list.length; y++){
                var  tt = document.getElementById("s_"+ y );
                tt.style.display = "none";
                console.log("y:" + y);
                //listTwo[y].style.display = "none";
            }
            var boxJse = document.getElementById("s_" + this.index);
            console.log("this.index:" + this.index);
            boxJse.style.display = "block";
        }
    }
};

//首页标题栏选择结束