$(document).ready(function(){

// block height
	$('.container').each(function(){
		var block_height=0;
		$(this).children('div').each(function(){
			if($(this).height()>block_height){
				block_height=block_height=$(this).height();
			}
		});
		$(this).children('div').height(block_height);
	});
	
// red font color for first element
	$('ul li:first-child').css('color','red');
		
// clear form fields
	$('.btn-clean').click(function(){
		$('input').each(function(){
			if ($(this).val()!='Submit'){
				$(this).val("");
			}
		});
	});
// Set number near odd elements of list
	
	$('.container ul').each(function(){
		var i=2;
		$(this).children('li:odd').each(function(){
			$(this).text(i+" "+$(this).text());
			i=i+2;
		});
		
	});

	//click on element and set to it class="active"
	$('.container ul li').click(function(){
		$('.container ul li').removeClass('active');
		$(this).addClass('active');
	});
})