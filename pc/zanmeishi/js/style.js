/**
 * Created by hxsd on 2016/5/24.
 */
$(document).ready(function(){
    $('#marquee').kxbdSuperMarquee({
        distance:746,//一次滚动的距离
        duration:50,//缓动效果，单次移动时间，越小速度越快，为0时无缓动效果
        time:2,//停顿时间，单位为秒
   	    direction: 'left',//滚动方向，'left','right','up','down'
        scrollAmount:1,//步长
   	    scrollDelay:20,//时长，单位为毫秒
   	    isEqual:true,//所有滚动的元素长宽是否相等,true,false
        loop: 0,//循环滚动次数，0时无限
        navId:'#mar3Nav' //导航容器ID，导航DOM:<ul><li>1</li><li>2</li><ul>,导航CSS:.navOn
    });
})