var clickX = 0;
var clickY = 0;
var pageX = 0;
var pageY = 0;

function dragTop() {
}

function dragDown() {
}

function dragLeft() {
	screen = screen > 1 ? screen - 1 : maxscreen;
	goScreen(screen);
}

function dragRight() {
	screen = screen < maxscreen ? parseInt(screen) + 1 : 1;
	goScreen(screen);
}

function wTouchStart(e) {
	clickX = e.touches[0].pageX;
	clickY = e.touches[0].pageY;
}

function wTouchMove(e) {
	pageX = e.touches[0].pageX;
	pageY = e.touches[0].pageY;
}

function wTouchEnd() {
	if((pageX - clickX) > 100) {
		dragLeft();
	}
	if((clickX - pageX) > 100) {
		dragRight();
	}
	if((clickY - pageY) > 100) {
		dragDown();
	}
	if((pageY - clickY) > 100) {
		dragTop();
	}
}

function wMouseDown(e) {
	clickX = e.pageX;
	clickY = e.pageY;
}

function wMouseUp(e) {
	if((e.pageX - clickX) > 100) {
		dragLeft();
	}
	if((clickX - e.pageX) > 100) {
		dragRight();
	}
	if((clickY - e.pageY) > 100) {
		dragDown();
	}
	if((e.pageY - clickY) > 100) {
		dragTop();
	}
}

window.addEventListener('touchstart', function(e) {wTouchStart(e)});
window.addEventListener('touchmove', function(e) {wTouchMove(e)});
window.addEventListener('touchend', function(e) {wTouchEnd(e)});
window.addEventListener('mousedown', function(e) {wMouseDown(e)});
window.addEventListener('mouseup', function(e) {wMouseUp(e)});