function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}

q('body').onload = function () {
    qs('.spoiler-toggle').forEach(function(el, i) {
        el.onclick = function () {
            el.parentNode.classList.toggle('active');
        }
    });
}