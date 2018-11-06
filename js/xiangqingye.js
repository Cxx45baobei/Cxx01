$(function() {
	$("#headerBox").load("header.html");
	$("#footerBox").load("footer.html");

	var oSus = document.getElementById('sus');
	this.onscroll = function() {
		var st = document.documentElement.scrollTop || document.body.scrollTop;
		if(st > 300) {
			oSus.style.display = 'block';
		} else {
			oSus.style.display = 'none';
		}
	};
	//商品列表ajax
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
			aLi.setAttribute("ccc",_data[i].name);
   		aLi.onclick=function(){
   			var num=this.getAttribute("ccc");
   			window.location.href = "xiangqingye.html?bbb="+num;
   		}
		}
	}, function() {
		alert(2);
	})

	function GetRequest() {
		var url = location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if(url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i++) {
				theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
			}
		}
		return theRequest;
	}
	var Request = new Object();
	Request = GetRequest();
	var num1 = Request['bbb'];

            var jiaRu=document.getElementById('shoppingjiaru');
            var jinRu=document.getElementById('shoppingjinru');
            jinRu.onclick = function(){
                window.location.href = "shopping.html"
            }
            jiaRu.onclick = function(){
                localStorage.setItem("id",num1)
            }





	ajax("js/data.json", function(data) {
		var _data1=eval("(" + data + ")");
		for(var i=0;i<_data1.length;i++){
			var nam=_data1[i].name;
			if(num1==nam){
				$("#picc1").attr("src",_data1[i].img);
				$("#picc2").attr("src",_data1[i].img);
				$("#txt0").html(_data1[i].paizi);
				$("#txt00").html(_data1[i].title1);
				$("#txt1").html(_data1[i].title);
				$("#txt2").html(_data1[i].price);
				$("#txt3").html(_data1[i].nowPrice);
				var aImgs=_data1[i].picList;
			for(var j=0;j<aImgs.length;j++){
				$("#tu1").attr("src",aImgs[0].images);
				$("#tu2").attr("src",aImgs[1].images);
				$("#tu3").attr("src",aImgs[2].images);
				$("#piclis_1").attr("src",aImgs[0].images);
				$("#piclis_2").attr("src",aImgs[1].images);
				$("#piclis_3").attr("src",aImgs[2].images);
			}
			}
			
		}
	}, function() {
		alert(2);
	})


var oPicLis=document.getElementById('piclis');
var oPicLi=oPicLis.getElementsByTagName('li');
for(var i=0;i<oPicLi.length;i++){
	oPicLi[i].index=i;
	oPicLi[i].onclick=function(){
		for(var j=0;j<oPicLi.length;j++){
			oPicLi[j].style.border='2px solid white';
		}
		oPicLi[this.index].style.border='2px solid gray';
	}
}
//购物车


var oChimalis=document.getElementById('chimalis');
var aKuang=document.querySelectorAll('#chimalis .youkuang');
for(var i=0;i<aKuang.length;i++){
	aKuang[i].index=i;
	aKuang[i].onclick=function(){
		for(var j=0;j<aKuang.length;j++){
			aKuang[j].style.border='1px solid transparent'
		}
		aKuang[this.index].style.border="1px solid #FF472B";
	}
}

})