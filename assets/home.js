var screen = 0;
var maxscreen;

function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}
function nh(data) {
    return data.replace(/#/, '');
}

function goScreen(screen) {
	qs('section, header nav a').forEach(function(el, i) {
		el.classList.remove('active');
	});

	q('[data-content="' + screen + '"]').classList.add('active');
	q('[href="#' + screen + '"]').classList.add('active');
	location.hash = screen;
}

q('body').onload = function () {
    maxscreen = qs('header nav a').length;

    qs('header nav a').forEach(function(el, i) {
        el.onclick = function (event) {
            screen = nh(el.getAttribute('href'));
            goScreen(screen);
        }
    });

    if(location.hash) {
        screen = nh(location.hash);
        goScreen(screen);
        q('[href="' + location.hash + '"]').click();
    }
}