import InputScreen from './apps/InputScreen.js';

let btn;

window.addEventListener('DOMContentLoaded', function() {
    const inpscr = document.getElementById('start');
    inpscr.addEventListener('click', function() {
        btn = new InputScreen(document.getElementById('canvas'));
    });

});


