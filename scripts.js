function dqs(selector) {
    return document.querySelector(selector);
}

dqs('body').onload = function () {

    dqs('.ava').onclick = function () {
        var body = dqs('body');
        if(body.classList.contains('invert')) {
            body.classList.remove('invert');
        }
        else {
            body.classList.add('invert');
        }
    }

    var date = new Date();
    var hours = date.getHours();
    if(hours > 22 || hours < 8) {
        dqs('.ava').click();
    }

}