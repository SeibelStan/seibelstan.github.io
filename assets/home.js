function q(s) {
    return document.querySelector(s);
}

function renav() {
    if(!location.hash || location.hash == '#contacts') {
        return false;
    }

    var lastNaved = q('.naved');
    if(lastNaved) {
        lastNaved.classList.remove('naved');
    }
    q(location.hash).classList.add('naved');
}

window.onhashchange = function () {
    renav();
}

window.onscroll = function() {
    var el = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 10);

    if(!el) {
        return false;
    }

    sect = el.closest('section');

    var hash = sect.getAttribute('id');

    if(
        window.scrollY + window.innerHeight ==
        q('html').clientHeight
    ) {
        hash = q('section:last-of-type').getAttribute('id');
    }

    if(history.pushState) {
        history.pushState(null, null, '#' + hash);
    }
    else {
        location.hash = hash;
    }

    renav();
}

renav();