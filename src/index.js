import  './style.less';

import { react } from './asets/react';
react();


import moment from 'moment';
moment().format();

function googleAnalyticsStats(ms) {
    ms += new Date().getTime();

    while (new Date() < ms) {}
}

    googleAnalyticsStats(6701); // goldenline ID

import _ from 'lodash'

import { printMe, next } from './print.js';

/**
 * [component description]
 * @return {[type]} [description]
 */
function component() {
    const element = document.createElement('section'),
        btn = document.createElement('button');

    // Lodash, now imported by this script
    element.innerHTML = _.join([ 'Hello', 'Front-end Developer!' ], ' ');
        element.classList.add('hello');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

      element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

// window.addEventListener('load', () => {
//     console.log('es6');
// });

 window.addEventListener('load', function() {
    let el = document.getElementById("nastepna-oferta");

    el.addEventListener("click", next);
});

$(document).ready(function() {
    console.log('jQuery works YEAH!');
})

(function() {

var pixel = new Image();

pixel.src = 'https://static.pexels.com/photos/481178/pexels-photo-481178.jpeg';

    pixel.style.display ='none'
    document.body.appendChild(pixel)

  setInterval(function () {
        document.querySelector('h1').textContent= "Cześć ;)"

        setTimeout(function (){
            document.querySelector('h1').textContent= "Cześć :)"
        }, 200);
    }, 2000);
}());



/**
 * react
 */


