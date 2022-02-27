'use strict'

function changeColor(id) {
    const el = document.querySelector(`.btn-${id}`).classList;

    switch (id) {
        case 0:
            el.toggle('red')
            break;
        case 1:
            el.toggle('blue');
            break;
    }
}