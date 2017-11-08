function qs(s) {
    return document.querySelector(s);
}

function gen() {
    var domain = qs('#domain');
    var keyword = qs('#keyword');
    var length = qs('#length');
    var geny = qs('#geny');
    var result = qs('#result');

    var hashlen = parseInt(length.value) ? length.value : 16;
    result.innerHTML = window.btoa(
        CryptoJS.MD5(domain.value + keyword.value)
    ).slice(0, hashlen);
}

[].forEach.call(document.querySelectorAll('input'), function(el) {
    el.onkeyup = function() {
        gen();
    }
});