// JavaScript Document
$(function(){
	$('#p_span').html(getCookie('usename'))	;
	cheap();
	del();
	allCk();
})
function cheap(){
	var z = 0;
	for(i=0;i<$('#main > .right .good').size();i++){
		if($('#main > .right .good').eq(i).find('.zhe').text()=='折'){
			z = z+1;
		}
	}
	$('.cheap > em').text(z);
}
function del(){
	var oCon = document.getElementById('container');
	var aCk = oCon.getElementsByTagName('input');
	$('.delete').click(function(){
		for(i=0;i<$('#main > .right .good').size();i++){
			if(aCk[i].checked){
				$('#main > .right .good').eq(i).remove();
				i = i-1;
			}
		}
		cheap();	
	})
}
function allCk(){
	var oAll = document.getElementById('allCk');
	var oCon = document.getElementById('container');
	var aCk = oCon.getElementsByTagName('input');
	oAll.onclick = function(){
		if(oAll.checked){
			for(i=0;i<aCk.length;i++){
				aCk[i].checked = true;
			}	
		}else{
			for(i=0;i<aCk.length;i++){
				aCk[i].checked = false;
			}
		}
	}
}