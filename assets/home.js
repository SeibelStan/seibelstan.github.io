function q(selector) {
    return document.querySelector(selector);
}
function qs(selector) {
    return document.querySelectorAll(selector);
}
function nh(data) {
    return data.replace(/#/, '');
}

q('body').onload = function () {
    qs('header nav a').forEach(function(el, i) {
        el.onclick = function (event) {
            var href = el.getAttribute('href');
            var cont = q('[data-content="' + nh(href) + '"]');
            var contActive = cont.classList.contains('active');

            qs('section, header nav a').forEach(function(el, i) {
                el.classList.remove('active');
            });

            cont.classList.add('active');
            el.classList.add('active');
        }
    });
    if(location.hash) {
        q('[href="' + location.hash + '"]').click();
    }
}