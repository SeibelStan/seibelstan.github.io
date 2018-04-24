var html = document.querySelector('html');
var body = document.querySelector('body');
var style = document.querySelector('[rel="stylesheet"]');
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

document.querySelector('.boom').onclick = function () {
    var scope = style;
    if(!scope.getAttribute('rel')) {
        scope.setAttribute('rel', 'stylesheet');
    }
    else {
        scope.setAttribute('rel', '');
    }
}

if(hours <= 9 || hours >= 22) {
    html.setAttribute('class', 'dark');
}

if(hours == 14) {
    style.setAttribute('rel', '');
}