// page init
function initPage() {
	initAnimation(500);

	var acc = document.getElementById('accordion');
	
	acc.addEventListener('click', function(e){
		if (e.target && e.target.nodeName == "P") {
			// first find displaye:block child ul and hide it
			var child_ul=document.getElementsByClassName('dropdown');
			for(var i=0 ; i<child_ul.length; i++){
				if (child_ul[i].style.display=='block'){
					var li_items = child_ul[i].getElementsByTagName('li');	
					for(var k=0; k<li_items.length; k++){
						hideList(child_ul[i], li_items[k], 3, 20, 0);
					}	
				}
			}
			var item = e.target.parentNode.getElementsByClassName('dropdown')[0];

			if (!item.style.display || item.style.display == 'none'){
				item.style.display = 'block';
				var li_items=item.getElementsByTagName('li');
				for(var i=0 ; i<li_items.length; i++){
					showList(li_items[i], 0, 0, 0)
				}
			}		
		}
	});
}

function showList(the_el, padding, height, stop_interval){
	var close_uk_interval=setInterval(function(){							
		if (stop_interval<21){
			stop_interval=stop_interval+1;
			padding = padding+3/20;
			height=height+1;
			the_el.style.paddingTop=padding+'px';
			the_el.style.paddingBottom=padding+'px';
			the_el.style.height=height+'px';
		}else{
			clearInterval(close_uk_interval);
		}
	},10);
}

function hideList(the_ul, the_el, padding, height, stop_interval){
	var close_uk_interval=setInterval(function(){							
		if (stop_interval<21){
			stop_interval=stop_interval+1;
			padding = padding-3/20;
			height=height-1;
			the_el.style.paddingTop=padding+'px';
			the_el.style.paddingBottom=padding+'px';
			the_el.style.height=height+'px';
		}else{
			the_ul.style.display='none';
			clearInterval(close_uk_interval);
		}
	},10);
}

//function for cross browser search by class
function byClass(classList, node) {
 if(document.getElementsByClassName) {
  return (node || document).getElementsByClassName(classList);
 }
 else {
  var node = node || document,
  list = node.getElementsByTagName('*'),
  length = list.length,
  classArray = classList.split(/\s+/),
  classes = classArray.length,
  result = [], i,j;
  for(i = 0; i < length; i++) {
   for(j = 0; j < classes; j++)  {
    if(list[i].className.search('\\b' + classArray[j] + '\\b') != -1) {
     result.push(list[i]);
     break;
    }
   }
  }
  return result;
 }
}

//animation function init
function initAnimation(newWidth){
	var container = document.getElementById('container');
	var element = byClass('box', container)[0];
	var btnStart = byClass('start', container)[0];
	var btnStop = byClass('stop', container)[0];
	var elementWidth = element.offsetWidth;
	var index;

	function startAnim() {
		if (elementWidth < newWidth){
			index = setTimeout(function() {
				elementWidth += 1;
				element.style.width = elementWidth + "px";
				startAnim();
			}, 10);

		}
	}

	btnStart.addEventListener('click', startAnim);

	btnStop.addEventListener('click', function(){
		clearTimeout(index);
	});
}


if (window.addEventListener)
	window.addEventListener("load", initPage, false);
else if (window.attachEvent)
	window.attachEvent("onload", initPage);
