function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}
function nh(data) {
    return data.replace(/#/, '');
}
function toggle(el, set = true) {
    el.classList.toggle('active', set);
}

function goScreen(screen) {
    if(!screen) {
        screen = '#contacts';
    }
    qs('section, .tabs a').forEach(function(el, i) {
        toggle(el, false);
    });

    toggle(q('[data-content="' + nh(screen) + '"]'));
    toggle(q('[href="' + screen + '"]'));
}

window.onhashchange = function () {
    goScreen(location.hash);   
}

q('body').onload = function () {
    goScreen(location.hash);
}