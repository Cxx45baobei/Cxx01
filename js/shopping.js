$(function(){
	$("#headerBox").load("header.html");
	$("#footerBox").load("footer.html");
	
	
	var oList=document.getElementById('list');
	        var typeId = localStorage.getItem("id");
        var oKongcar=document.getElementById('kongcar');
        
        ajax("js/data.json",function(data){
        var _data = eval("("+data+")");
        for(var i=0;i<_data.length;i++){
        	var name=_data[i].name;
        	if(typeId==name){
        		var aLi = document.createElement("li");
        		var oInput = document.createElement("input");
        		var div1 = document.createElement("div");
        		var oImg = document.createElement("img");
        		var div2 = document.createElement("div");
        		var p1 = document.createElement("p");
        		var p2 = document.createElement("p");
        		var p3 = document.createElement("p");
        		var p4 = document.createElement("p");
        		var p5 = document.createElement("p");
        		var div3 = document.createElement("div");
        		var div4 = document.createElement("div");
        		var div5 = document.createElement("div");
        		var div6 = document.createElement("div");
        		var div7 = document.createElement("div");
        		oList.appendChild(aLi);
        		aLi.appendChild(oInput);
        		aLi.appendChild(div1);
        		aLi.appendChild(div2);
        		aLi.appendChild(div3);
        		aLi.appendChild(div4);
        		div4.appendChild(div5);
        		div4.appendChild(div6);
        		div4.appendChild(div7);
        		div5.innerHTML='-';
        		
        		div7.innerHTML='+';
        		div1.appendChild(oImg);
        		div2.appendChild(p1);
        		div2.appendChild(p2);
        		div2.appendChild(p3);
        		div2.appendChild(p4);
        		div2.appendChild(p5);
        		div3.innerHTML="删除";
        		oImg.src=_data[i].img;
        		p1.innerHTML=_data[i].title;
        		p2.innerHTML=_data[i].price;
        		p3.innerHTML="数量有限，抢完为止";
        		oInput.type="checkbox";
        		p4.innerHTML='L(170/76A)';
        		p5.innerHTML='7天可无理由退换';
        		var bianNum=1;
        		div5.onclick=function(){
        			bianNum--;
        			if(bianNum<1){
        				bianNum=1;
        			}
        			div6.innerHTML=bianNum;
        		}
        		div7.onclick=function(){
        			bianNum++;
        			div6.innerHTML=bianNum;
        		}
        		div6.innerHTML=bianNum;
        		
        		
        		div3.onclick=function(){
        			oKongcar.style.display='block';
        			oList.removeChild(this.parentNode);
        			
        			
        			localStorage.clear();
        		}
        	}
        }
        },function(){
        	alert(2);
        })
        
        
        //删除
        
        
})
