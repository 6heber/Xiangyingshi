/**
 * Created by heber on 2019/3/27.
 */
var a=document.getElementById("s"),
    d=document.getElementById("d");
var flag=false;
a.addEventListener('click',function(){
    if (!flag) {
        // 导航菜未显示时
        // top值发生改变时触发过渡
        d.style.transition ='top 1s linear';
        d.style.top = '0px';
        // 改变导航菜状态标识
        flag=true;
    }else{
        d.style.top = '-160px';
        flag=false;
    }
})
