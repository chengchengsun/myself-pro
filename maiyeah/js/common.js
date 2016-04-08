/*--------模块显示插件-------------*/
var showmodule = window.showmodule || {};
showmodule = {
	show: function(option) {
		defaul = {
			Control: $(".classname"),
			positive: $(".beikong"),
			Type: "click",
			classname: "hota",
			initial: true
		}

		var obj = $.extend(defaul, option);
		var num;
		if (obj.initial) {
			obj.Control.removeClass(obj.classname);
			obj.Control.first().addClass(obj.classname);
			obj.positive.css("display", "none");
			obj.positive.first().css("display", "block");
		} else {
			obj.Control.removeClass(obj.classname);
			obj.positive.css("display", "none");
		}

		obj.Control[obj.Type](function() {
			obj.Control.removeClass(obj.classname);
			obj.positive.css("display", "none");
			$(this).addClass(obj.classname);
			num = $(this).index();
			obj.positive.eq(num).css("display", "block");
		});
	}
}



/*划过显示划出消失-start--------------*/
var showandhide = window.showandhide || {};
showandhide = {
	mouhover: function(option) {
		defaul = {
			act: $(".classname"),
			pos: $(".class"),
			actclass: ""

		}
		var obj = $.extend(defaul, option);
		var num3;

		obj.act.mouseover(function() {
			obj.pos.css("display", "block")
			$(this).addClass(obj.actclass);

		});
		obj.act.mouseout(function() {
			obj.act.removeClass(obj.actclass);
			obj.pos.css("display", "none")
		});
	}
}
	/*划过显示划出消失end-----------*/


/*	--------相关js原生----------JAVASCRIPT------- */
				
/*----------className的兼容封装- the start-------*/
				
function getClassName(classname) {
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	} else {
		var all = document.getElementsByTagName("*");
		var arr = [];
		var list = [];
		for (var i = 0; i < all.length; i++) {
			list = all[i].className.split(" ");
			for (var j in list) {
				
				if (list[j] == classname){
					//alert(list[j])
					arr.push(all[i]);
				}
			}

		}
		return arr;
	}
}
/*---------------classname----the end-------------------*/			
     
      	
	/*获取cookie值-------------------------*/

function getCookie(key){
	var str=document.cookie;
	var arr=str.split(";")
	for(var i=0;i<arr.length;i++){
		var list=arr[i].split("=");
		if(list[0].replace(/\s+/g,"")==key){
			return list[1];
		}
	}
	return null;
}


function removeCookie(key,iday){
	var dat=new Date();
	dat.setDate(dat.getDate()+iday);
	document.cookie=key+"="+getCookie(key)+";expires="+dat;
}
/*用户名登陆成功的判断，用户名在首页的显示内容---欢迎*/
function showuser(){
	if(getCookie("success")){
		$(".hadlogin").css("display","block");
		$(".haduser")[0].innerHTML=getCookie("success");
	}else{
		$(".hadlogin").css("display","none");
	}
}
showuser();




/*点击退出账号时 的动作事件--------------------*/

$(".dragout").click=function(){
	
	removeCookie("success",-1);
	console.log(this)
}

/*将字符串中开头和结尾的空格去掉---------------*/
 function deletSpace(text)
{
  if (typeof(text) == "string")
  {
    return text.replace(/^\s*|\s*$/g, "");
  }
  else
  {
    return text;
  }
}

/*测试是否含空格*/
function haveSpace(text){
	
var reg=/\s+/g;
	
return reg.test(text);	
	
}







/*判断数据是否为空-----------------------*/

function isEmpty( val )
{
  switch (typeof(val))
  {
    case 'string':
      return deletSpace(val).length == 0 ? true : false;
      break;
    case 'number':
      return val == 0;
      break;
    case 'object':
      return val == null;
      break;
    case 'array':
      return val.length == 0;
      break;
    default:
      return true;
  }
}

/*测试是否为邮箱格式-----------------------*/
function isEmail(email)
{
  var reg1 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
  //var reg1 = /^([a-z0-9_\.-]+)@(163|qq)\.([comn]{2,3})$/
  return reg1.test(email);
}


/*测试联系电话的格式----------只能用数字空格中划线下滑线-----*/

function isTel( tel )
{
  var reg = /^[\d|\-|\s|\_]+$/; //只允许使用数字-空格等

  return reg.test( tel );
}


function setCookie(key,valu,dat){
	var _dat=new Date();
	_dat.setTime(_dat.getTime()+dat*24*3600*1000);
	document.cookie=key+"="+valu+";expires="+_dat;
}







