var ball = document.getElementById('ball');

ball.onmousedown = function(e) { // отследить нажатие
  var self = this;
  e = fixEvent(e);

  var coords = getCoords(this);
  var shiftX = e.pageX - coords.left;
  var shiftY = e.pageY - coords.top;


  // подготовить к перемещению
  // разместить на том же месте, но в абсолютных координатах
  this.style.position = 'absolute';
  moveAt(e);
  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(this);

  this.style.zIndex = 1000; // показывать мяч над другими элементами

  // передвинуть мяч под координаты курсора
  function moveAt(e) {
    self.style.left = e.pageX - shiftX + 'px';
    self.style.top = e.pageY - shiftY+ 'px';
   }
	
	function moveBall(e){
		e = fixEvent(e);
		moveAt(e);
	}
  // перемещать по экрану
  document.addEventListener('mousemove', moveBall)
  //document.onmousemove = function(e) {
  //  e = fixEvent(e);
  //  moveAt(e);
  //};

  // отследить окончание переноса
  this.onmouseup = function() {
	document.removeEventListener('mousemove', moveBall);
	self.onmouseup = null;
    //document.onmousemove = self.onmouseup = null;
  }
};

ball.ondragstart = function() {
  return false;
};



/* Вспомогательные функции */
/* fixEvent */
function fixEvent(e, _this) {
  e = e || window.event;

  if (!e.currentTarget) e.currentTarget = _this;
  if (!e.target) e.target = e.srcElement;

  if (!e.relatedTarget) {
    if (e.type == 'mouseover') e.relatedTarget = e.fromElement;
    if (e.type == 'mouseout') e.relatedTarget = e.toElement;
  }

  if (e.pageX == null && e.clientX != null ) {
    var html = document.documentElement;
    var body = document.body;

    e.pageX = e.clientX + (html.scrollLeft || body && body.scrollLeft || 0);
    e.pageX -= html.clientLeft || 0;

    e.pageY = e.clientY + (html.scrollTop || body && body.scrollTop || 0);
    e.pageY -= html.clientTop || 0;
  }
  if (!e.which && e.button) {
    e.which = e.button & 1 ? 1 : ( e.button & 2 ? 3 : (e.button & 4 ? 2 : 0) );
  }
  return e;
}

function getCoords(elem) {
    // (1)
    var box = elem.getBoundingClientRect();

    var body = document.body;
    var docEl = document.documentElement;

    // (2)
    var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    // (3)
    var clientTop = docEl.clientTop || body.clientTop || 0;
    var clientLeft = docEl.clientLeft || body.clientLeft || 0;

    // (4)
    var top  = box.top +  scrollTop - clientTop;
    var left = box.left + scrollLeft - clientLeft;

    // (5)
    return { top: Math.round(top), left: Math.round(left) };
}
