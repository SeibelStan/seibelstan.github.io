function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}

q('body').onload = function () {
    [].forEach.call(qs('.spoiler-toggle'), function(el, i) {
        el.onclick = function () {
            el.parentNode.classList.toggle('active');
        }
    });
}