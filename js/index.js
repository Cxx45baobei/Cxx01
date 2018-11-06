$(function() {
	$("#headerBox").load("header.html");
	$("#footerBox").load("footer.html");
//	$("#xuanfu").load("xuanfukuang.html");

	//头部轮播开始
	var swiper = new Swiper('.swiper-container', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		autoplay: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		}
		//    navigation: {
		//      nextEl: '.swiper-button-next',
		//      prevEl: '.swiper-button-prev',
		//    },
	});

	//商品列表ajax
	var More = 0;
	var oList = document.getElementById('list');
	ajax("js/data.json", function(data) {
		var _data = eval("(" + data + ")");
		for(var i = 0; i < _data.length; i++) {
			var aLi = document.createElement("li");
			var aImg = document.createElement('img');
			var p1 = document.createElement("p");
			var p2 = document.createElement("p");
			var p3 = document.createElement("p");
			var span1 = document.createElement("span");
			var span2 = document.createElement("span");
			var span3 = document.createElement("span");
			var span4 = document.createElement("span");
			var span5 = document.createElement("span");
			var span6 = document.createElement("span");
			var span7 = document.createElement("span");
			oList.appendChild(aLi);
			aLi.appendChild(aImg);
			aLi.appendChild(p1);
			aLi.appendChild(p2);
			aLi.appendChild(p3);
			p1.appendChild(span1);
			p1.appendChild(span2);
			p2.appendChild(span3);
			p2.appendChild(span4);
			p3.appendChild(span5);
			p3.appendChild(span6);
			p3.appendChild(span7);
			aImg.src = _data[i].img;
			span1.innerHTML = _data[i].txt;
			span2.innerHTML = _data[i].title;
			span3.innerHTML = _data[i].price;
			span4.innerHTML = _data[i].sale;
			span5.innerHTML = _data[i].nowTxt;
			span6.innerHTML = _data[i].nowPrice;
			span7.innerHTML = _data[i].buy;

			clickMore.onclick = function() {
				More++;
				if(More <= 2) {
					for(var i = 0; i < _data.length; i++) {
						var aLi = document.createElement("li");
						var aImg = document.createElement('img');
						var p1 = document.createElement("p");
						var p2 = document.createElement("p");
						var p3 = document.createElement("p");
						var span1 = document.createElement("span");
						var span2 = document.createElement("span");
						var span3 = document.createElement("span");
						var span4 = document.createElement("span");
						var span5 = document.createElement("span");
						var span6 = document.createElement("span");
						var span7 = document.createElement("span");
						oList.appendChild(aLi);
						aLi.appendChild(aImg);
						aLi.appendChild(p1);
						aLi.appendChild(p2);
						aLi.appendChild(p3);
						p1.appendChild(span1);
						p1.appendChild(span2);
						p2.appendChild(span3);
						p2.appendChild(span4);
						p3.appendChild(span5);
						p3.appendChild(span6);
						p3.appendChild(span7);
						aImg.src = _data[i].img;
						span1.innerHTML = _data[i].txt;
						span2.innerHTML = _data[i].title;
						span3.innerHTML = _data[i].price;
						span4.innerHTML = _data[i].sale;
						span5.innerHTML = _data[i].nowTxt;
						span6.innerHTML = _data[i].nowPrice;
						span7.innerHTML = _data[i].buy;
						aLi.setAttribute("ccc", _data[i].name);
						aLi.onclick = function() {
							var num = this.getAttribute("ccc");
							window.location.href = "xiangqingye.html?bbb=" + num;
						}
					}
				} else {
					clickMore.innerHTML = '';
					clickMore.innerHTML = '没有更多了';
					return;
				}

			}

			aLi.setAttribute("ccc", _data[i].name);
			aLi.onclick = function() {
				var num = this.getAttribute("ccc");
				window.location.href = "xiangqingye.html?bbb=" + num;
			}
		}
	}, function() {
		alert(2);
	})



    //旋转木马
    fn1();
    function fn1(){
var json = [
    {  
        width: 300,
        top: 70,
        left: 50,
        opacity: 0.2,
        "z-index": 2
    },
    { 
        width: 500,
        top: 120,
        left: 0,
        opacity: 0.8,
        "z-index": 3
    },
    {   
        width: 700,
        top: 100,
        left: 200,
        opacity: 1,
        "z-index": 4
    },
    {  
        width: 500,
        top: 120,
        left: 600,
        opacity: 0.8,
        "z-index": 3
    },
    {  
        width: 300,
        top: 70,
        left: 750,
        opacity: 0.2,
        "z-index": 2
    }
]
;

var liArr = document.querySelectorAll('.treeHouse .slider li');
var next = document.getElementById('next');
var prev = document.getElementById('prev');
function move() {
    for (var i = 0; i < liArr.length; i++) {
        animate(liArr[i], json[i]);
    }
}

move()

next.onclick = function () {
    var last = json.pop();
    json.unshift(last);
    move()
}
prev.onclick = function () {
    var first = json.shift();
    json.push(first);
    move();
}
}
//缓动框架
function animate(ele, json, fn) {
    //清楚定时器
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var bool = true;
        for (var k in json) {
            //特殊属性特殊处理
            if (k === "opacity") {
                //小数计算*100后可以避免后面的向上取整向下取整。产的误差。
                var leader = getStyle(ele, k) * 100;//获取的是字符串
                var step = (json[k] * 100 - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                ele.style.opacity = (leader + step) / 100;
                if (json[k] != getStyle(ele, k)) {
                    bool = false;
                }
            } else if (k === "z-index") {
                ele.style.zIndex = json[k];
            } else {
                var leader = parseInt(getStyle(ele, k)) || 0;//获取的是字符串
                var step = (json[k] - leader) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                ele.style[k] = leader + step + "px";
                if (json[k] != parseInt(getStyle(ele, k))) {
                    bool = false;
                }
            }


        }

        if (bool) {
            clearInterval(ele.timer);
            if (fn) {
                fn();
            }
        }
    }, 30);
}


//获取行内内嵌外链属性值（有单位）
function getStyle(ele, attr) {
    if (ele.currentStyle != undefined) {
        return ele.currentStyle[attr]
    } else {
        return window.getComputedStyle(ele, null)[attr];
    }
}


})