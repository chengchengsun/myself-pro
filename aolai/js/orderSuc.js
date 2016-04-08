// JavaScript Document
$(function(){
	getContent();
})
function getContent(){
  $('#getContent').html(getCookie('usename')+'&nbsp;&nbsp;欢迎您！')	
}