function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}

q('body').onload = function () {
    qs('.spoiler-toggle').forEach(function(el, i) {
        el.onclick = function () {
            var cont = el.parentNode;
            var contActive = cont.classList.contains('active');

            qs('.spoilers section').forEach(function(el, i) {
                el.classList.remove('active');
            });

            if(!contActive) {
                cont.classList.add('active');
            }
        }
    });
}