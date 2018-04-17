var html = document.querySelector('html');
var body = document.querySelector('body');
var hours = new Date().getHours();

document.querySelector('.bulb').onclick = function () {
    var scope = html;
    if(!scope.getAttribute('class')) {
        scope.setAttribute('class', 'dark');
    }
    else {
        scope.setAttribute('class', '');
    }
}

document.querySelector('.font').onclick = function () {
    var scope = body;
    if(!scope.getAttribute('class')) {
        scope.setAttribute('class', 'monospace');
    }
    else {
        scope.setAttribute('class', '');
    }
}

if(hours <= 9 || hours >= 22) {
    html.setAttribute('class', 'dark');
}

if(hours == 14) {
    body.setAttribute('class', 'monospace');
}