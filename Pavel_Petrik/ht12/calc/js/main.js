//@ todo
window.onload = function (){
	var operator=document.getElementsByClassName('operator');
	for (var i=0; i<operator.length; i++){
		
		operator[i].onclick=function(event){
			var operator=document.getElementsByClassName('operator');
			for (var i=0; i<operator.length; i++){
				operator[i].style.borderColor='red';
			}
			event.preventDefault();
			this.style.borderColor='blue';
		}
	}
	
	document.getElementsByClassName('btn-calc')[0].onclick = function() {
		var first=document.getElementById('first-value');
		var second=document.getElementById('second-value');
		
		var msg='';
		if(first.value==''){msg ='Введите первое число';}
		else if(isNaN(first.value)){
			if(msg!=''){msg=msg+'\n';}
			msg=msg+'Введите число в первое поле ввода';
		}
		
		var znak=false;
		for (var i=0; i<operator.length; i++){
			if(operator[i].style.borderColor=='blue' ){znak=true;}
		}
		if (znak==false){
			if(msg!=''){msg=msg+'\n';}
			msg=msg+'Выберите оператор';
		}
		if(second.value==''){
			if(msg!=''){msg=msg+'\n';}
			msg=msg+'Введите второе число';
		}else if(isNaN(second.value)){
			if(msg!=''){msg=msg+'\n';}
			msg=msg+'Введите число во второе поле ввода';
		}
		
		if(operator[3].style.borderColor=='blue' && second.value==0){
			if(msg!=''){msg=msg+'\n';}
			msg=msg+'Неуч, на 0 делит только Кернес';
		}
		
		if(msg!=''){
			alert(msg);
		}else{
			var result= document.getElementById('result');

			if(operator[0].style.borderColor=='blue'){
				result.value=first.value+second.value;
			}else if(operator[1].style.borderColor=='blue'){
				result.value=first.value-second.value;
			}else if(operator[2].style.borderColor=='blue'){
				result.value=first.value*second.value;
			}else if(operator[3].style.borderColor=='blue'){
				result.value=first.value/second.value;
			}
		}
		
	};
}