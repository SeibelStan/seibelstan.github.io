function q(s) {
    return document.querySelector(s);
}

function qs(s) {
    return document.querySelectorAll(s);
}

function altlan(v1, v2) {
    return location.pathname.match(/-*ru/) ? v2 : v1;
}

[].forEach.call(qs('.spoiler'), function (el) {
    el.classList.add('hide');
    el.innerHTML += '<a href="#" class="more">' + (el.getAttribute('data-more') || altlan('More', 'Ещё')) + '</a>';
});

[].forEach.call(qs('.more'), function (el) {
    el.onclick = function () {
        this.parentNode.classList.remove('hide');
        this.remove();
        return false;
    }
});