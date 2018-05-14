function q(s) {
    return document.querySelector(s);
}

function renav() {
    if(!location.hash) {
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

renav();