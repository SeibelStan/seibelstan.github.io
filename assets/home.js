function q(s) {
    return document.querySelector(s);
}

function qs(s) {
    return document.querySelectorAll(s);
}

[].forEach.call(qs('.spoiler'), function (el) {
    el.classList.add('hide');
    el.innerHTML += '<a href="#" class="reveal">' + (el.getAttribute('data-reveal') || 'More') + '</a>';
});

[].forEach.call(qs('.reveal'), function (el) {
    el.onclick = function () {
        this.parentNode.classList.remove('hide');
        this.remove();
        return false;
    }
});