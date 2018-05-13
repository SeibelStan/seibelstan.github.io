var request = new XMLHttpRequest();
request.open('GET', 'https://api.github.com/repos/SeibelStan/seibelstan.github.io/commits/master', true);
request.onload = function() {
    if(this.status == 200) {
        var data = JSON.parse(this.response);
        document.querySelector('.update').innerHTML = data.commit.author.date.split('T')[0];
    }
}
request.send();