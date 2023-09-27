import anime from 'animejs';

function testAnime() {
    let element = document.querySelector(".ajs-box");

    if (element) {
        anime({
            target: element,
            translateX: 250,
            rotate: '1turn',
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    }
}

$(function() {
    testAnime();
});