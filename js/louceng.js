
window.onload=function(){
var oScreenBanner = document.getElementsByTagName('div')[0];
var oAllScreen = oScreenBanner.children[0];
var arrScreen = oAllScreen.children;
var screenW, screenH;
var page = 0;
function resize() {
    screenW = document.documentElement.clientWidth;
    screenH = document.documentElement.clientHeight;
    oAllScreen.style.width = oScreenBanner.style.width = screenW + "px";
    oScreenBanner.style.height = screenH + "px";
    oAllScreen.style.height = screenH * arrScreen.length + "px";
    for (var i = 0; i < arrScreen.length; i++) {
        arrScreen[i].style.width = screenW + "px";
        arrScreen[i].style.height = screenH + "px";
    }
    oAllScreen.style.top = -page * screenH + "px";

}
var oUl=document.getElementsByTagName('ul')[0];

var flag=document.createDocumentFragment();
for(var i=0;i<arrScreen.length;i++){
    var li=document.createElement('li');
    flag.appendChild(li);   
}
oUl.appendChild(flag);
var arrLi=document.getElementsByTagName("li");

arrLi[0].classList.add('now');  

resize();
window.onresize = resize;
var isRunning = false;
function scrollUp() {
    if (!isRunning) {
        isRunning = true;
        setTimeout(function () {
            isRunning = false;
        }, 1000);
        if (page > 0) {
            page--;
            oAllScreen.style.top = -page * screenH + "px";
            for(var j=0;j<arrScreen.length;j++){
                    arrLi[j].classList.remove('now');
                }
                 arrLi[page].classList.add('now');
        }
    }
}
function scrollDown() {
        if(!isRunning) {
            isRunning = true;
            setTimeout(function(){
                isRunning = false;


            },1000);
            if (page < arrScreen.length - 1) {
                page++;
                oAllScreen.style.top = -page * screenH + "px";
                for(var j=0;j<arrScreen.length;j++){
                    arrLi[j].classList.remove('now');
                }
                 arrLi[page].classList.add('now');
            }
        }
    }
    for(let k=0;k<arrScreen.length;k++){
        arrLi[k].onclick = function(){
            for(var j=0;j<arrScreen.length;j++){
                    arrLi[j].classList.remove('now');
                }
            arrLi[k].classList.add('now');
            oAllScreen.style.top = -k * screenH + "px";
        }
    }



// chrome   ie
//window.onmousewheel=function(){}
    addEvent(window, "mousewheel", mouseWheel);
// ff
    addEvent(window, "DOMMouseScroll", mouseWheel);




// 滚轴事件函数
    function mouseWheel(ev) {
        var oEvent = window.event || ev;
        if (oEvent.detail) {
            if (oEvent.detail > 0) {  // 下滚动
                scrollDown()
            } else {   //   向上
                scrollUp()
            }
        } else if (oEvent.wheelDelta) {// chrome ie
            if (oEvent.wheelDelta > 0) {  // 上滚动
                scrollUp()
            } else {   //   向下
                scrollDown()
            }
        }
    }
    function addEvent(ele, type, listener) {
        if (ele.addEventListener) {   //  click
            ele.addEventListener(type, listener);
        } else {               //  onclick
            ele.attachEvent("on" + type, listener);
        }
    }
}

