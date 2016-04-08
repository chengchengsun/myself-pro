// JavaScript Document
window.onload = function(){
fdj();
jiesuan();
tag();
getContent();
buy();
}
function buy(){
   $('.sp3').click(function(){
	   window.location='car.html'   
   })	
}
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}
function fdj(){
	var oBox = document.getElementById('box');
	var oBox1 = document.getElementById('box1');
	var oBox2 = document.getElementById('box2');
	var oSimg = document.getElementById('smallImg');
	var oBBimg = document.getElementById('bigImg');
	var oBimg = document.getElementById('imgBig');
	oBBimg.style.display = 'none';
	oBox.style.display = 'none';
	oSimg.onmouseover = function(){
		oBox.style.display = 'block';
		oBBimg.style.display = 'block';
		startMove(oBBimg,{opacity:100});
		}
	oSimg.onmouseout = function(){
		oBox.style.display = 'none';
		oBBimg.style.display = 'none';
		//startMove(oBBimg,{opacity:0});
		}
	oSimg.onmousemove = function(ev){
		oEvent = ev || event;
		var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
		var x = oEvent.clientX-oSimg.offsetLeft-oBox.offsetWidth/2;
		var y = oEvent.clientY-oSimg.offsetTop-oBox.offsetHeight/2+scrolltop;
		//alert(oBox.offsetWidth)
		if(x<0){
			x = 0;
			}
		if(x>oSimg.offsetWidth-oBox.offsetWidth){
			x = oSimg.offsetWidth-oBox.offsetWidth;
			}
		if(y<0){
			y = 0;
			}
		if(y>oSimg.offsetHeight-oBox.offsetHeight){
			y = oSimg.offsetHeight-oBox.offsetHeight;
			}
		oBox.style.width = oSimg.offsetWidth*oBBimg.offsetWidth/oBimg.offsetWidth+'px';
        oBox.style.height = oSimg.offsetHeight*oBBimg.offsetHeight/oBimg.offsetHeight+'px';
        oBox1.style.height = oBox.offsetHeight+'px';
		oBox2.style.height = oBox.offsetHeight+'px';
		oBox.style.left = x+'px';
		oBox.style.top = y+'px';
		oBimg.style.left = -x/(oSimg.offsetWidth-oBox.offsetWidth)*(oBimg.offsetWidth-oBBimg.offsetWidth)+'px';
		oBimg.style.top = -y/(oSimg.offsetHeight-oBox.offsetHeight)*(oBimg.offsetHeight-oBBimg.offsetHeight)+'px';
		}
		var oUl = document.getElementById('imgUl');
		var aLi = oUl.getElementsByTagName('img');
		var oImg = oSimg.getElementsByTagName('img')[0];
		for(i=0;i<aLi.length;i++){
			aLi[i].onclick = function(){
				oImg.src = this.src;
				oBimg.src = this.src;
				}
			}

	}
function jiesuan(){
	var oSp1 = document.getElementById('span1');
	var oSp2 = document.getElementById('span2');
	var oSp3 = document.getElementById('span3');
	var oS = document.getElementById('S');
	var oM = document.getElementById('M');
	var oL = document.getElementById('L');
	var oImg1 = oS.getElementsByTagName('img')[0];
	var oImg2 = oM.getElementsByTagName('img')[0];
	var oImg3 = oL.getElementsByTagName('img')[0];
	var arr1 = [oImg1,oImg2,oImg3];
	var arr = [oS,oM,oL];
	var arr2 = ['S','M','L']
	var oZong = document.getElementById('zongse');
	for(i=0;i<arr.length;i++){
		arr[i].index = i;
		arr[i].onclick = function(){
			
			for(j=0;j<arr.length;j++){
				arr[j].className = '';
				arr1[j].style.display = 'none';
				}
		    this.className = 'bdred';
			arr1[this.index].style.display = 'block';
			oSp1.style.display = 'block';
			oSp2.innerHTML = '['+arr2[this.index]+']';
		    }
		}
	oZong.onclick = function(){
		oZong.className = 'bdred';
		var oImg = oZong.getElementsByTagName('img')[0];
		oImg.style.display = 'block';
		oSp3.innerHTML =  '['+'白色'+']';
		}
	}
function tag(){
	var oUl1 = document.getElementById('ul1');
	var aLi1 = oUl1.getElementsByTagName('li');
	var oUl2 = document.getElementById('ul2');
	var aLi2 = oUl2.getElementsByTagName('li');
	for(i=0;i<aLi1.length;i++){
		aLi1[i].index = i;
		aLi1[i].onclick = function(){
			for(j=0;j<aLi1.length;j++){
				aLi1[j].className = '';
				aLi2[j].style.display = 'none';
				}
			this.className = 'clicked';
			aLi2[this.index].style.display = 'block';
			}
		}
	}

