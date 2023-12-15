document.getElementById('noButton').addEventListener('mouseover', function() {
    const x = Math.random() * window.innerWidth - this.clientWidth;
    const y = Math.random() * window.innerHeight - this.clientHeight;
    this.style.left = x + 'px';
    this.style.top = y + 'px';
    this.style.position = 'absolute';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.body.style.background = 'url("images/IMG_20230906_190024597.jpg")';
    document.body.style.backgroundSize = 'contain';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
    document.body.style.backgroundPosition = 'center';

    document.getElementById('message').innerText = 'EU TE AMO MAIS QUE TUDO';
    document.getElementById('yesButton').classList.add('hidden');
    document.getElementById('noButton').classList.add('hidden');

    var audio = document.getElementById('loveSong');
    audio.play();
});
