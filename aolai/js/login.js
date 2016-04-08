// JavaScript Document
$(function(){
	$('#btn').click(function(){
		checkPhone();
		checkPWD();
		toVIP();
	})
})
//检测手机号
function checkPhone(){
   if($("#phone").val()==getCookie('usename')){
	   return true;   
   }else if($("#phone").val()==null || $("#phone").val()==''){
	  alert('请输入手机号') 
   }
   else{
	   alert('不存在此用户，请注册') ;
	   return false;  
   }
}
//检测密码
function checkPWD(){
   if($("#pwd").val()==getCookie('password')){
	   return true;   
   }else if($("#pwd").val()==null || $("#pwd").val()==''){
	   alert('请输入密码')
   }else{
	   alert('密码错误')
	   return false; 
   }
}
//跳转到个人中心页面
function toVIP(){
	  if(checkPWD()&&checkPhone()){
		 window.location='VIPcneter.html' ;
		 alert(0)  
		 return;
	  }
}