const traffic_light = document.querySelector('#traffic_light')
    green = document.querySelectorAll('.circle')[0],
    yellow = document.querySelectorAll('.circle')[1],
    red = document.querySelectorAll('.circle')[2];

traffic_light.addEventListener('click', makeGreen);

function makeGreen() {

    green.style.background = ('green');
    yellow.style.background = ('#333');
    red.style.background = ('#333');

    traffic_light.removeEventListener('click', makeGreen);
    traffic_light.addEventListener('click', makeYellow);

}

function makeYellow() {
    
    green.style.background = ('#333');
    yellow.style.background = ('yellow');
    red.style.background = ('#333');

    traffic_light.removeEventListener('click', makeYellow);
    traffic_light.addEventListener('click', makeRed);

}

function makeRed() {

    green.style.background = ('#333');
    yellow.style.background = ('#333');
    red.style.background = ('red');

    traffic_light.removeEventListener('click', makeRed);
    traffic_light.addEventListener('click', makeGreen);
    
}

