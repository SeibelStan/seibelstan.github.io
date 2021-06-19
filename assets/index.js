var content = json.innerHTML;
json.remove();

function jsonify() {
    css.href = 'assets/json.css';

    main.innerHTML = content
        .replace(/<*pre>/g, '')
        .replace(/^(\s+)(".+?", .+?")$/gm, '$1<div class=valblock>$2</div>')
        .replace(/^(.+?)$/gm, '<div class=line>$1</div>')
        .replace(/"(http.+?)*([\.\/]\/.+?)"/g, '"<a href=$1$2>$1$2</a>"')
        .replace(/"(.+?)":/g, '<span class=key><span class=quot>&quot;</span>$1<span class=quot>&quot;</span>:&nbsp;</span>')
        .replace(/"(.+?)"(,*)/g, '<span class=value><span class=quot>&quot;</span>$1<span class=quot>&quot;</span>$2</span>')
        .replace(/>,/g, '><span class=comma>,</span>')
        .replace(/ {4}/g, '<span class=tab></span>');
}

function recurText(obj, key = '', lvl = 0, result) {
    if (obj === null) {
        return false;
    }

    var clrKey = key.replace(/.+\[/, '').replace(/\]/, '');
    if (clrKey.match(/\D/)) {
        var h = document.createElement('h' + lvl);
        h.id = 'h-' + key;
        h.setAttribute('data-lvl', lvl);
        h.innerHTML = clrKey;
        result.appendChild(h);
    }

    if (typeof obj != 'object') {
        ul = result.querySelector('ul:last-child');
        if (!ul) {
            ul = document.createElement('ul');
            ul.id = key;
            ul.setAttribute('data-lvl', lvl);
            result.appendChild(ul);
        }

        var node = document.createElement('li');
        node.id = key;

        if (obj.match(/(\.\/|http|\w@\w+\.\w)/)) {
            var a = document.createElement('a');
            a.href = obj;
            a.innerHTML = obj;
            node.appendChild(a);
        }
        else {
            if (key.match(/age/)) {
                var diff = Math.floor((new Date()).getTime() - (new Date(obj)).getTime());
                var years = Math.floor(diff / 31536000 / 1000);
                obj = years.toString();
            }
            if (obj.match(/\d{4}-\d\d-\d\d/)) {
                obj = (new Date(obj)).toLocaleDateString();
            }

            node.innerHTML = obj;
        }

        ul.appendChild(node);
        return false;
    }

    lvl++;
    Object.keys(obj).forEach(function (el) {
        recurText(obj[el], key ? key + '[' + el + ']' : el, lvl, result);
    });
}

function textify() {
    css.href = 'assets/text.css';

    var result = document.createElement('div');
    var jcontent = JSON.parse(content);
    recurText(jcontent, '', 0, result);
    main.innerHTML = result.innerHTML;
}

window.onhashchange = function () {
    switch (location.hash) {
        case '#json': jsonify(); break;
        case '#text': textify(); break;
        default: textify(); break;
    }
}
window.onhashchange();