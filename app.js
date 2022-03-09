import { test } from './src/functions/element.js'
let btn = document.getElementsByClassName('btn')

function changeColor(evt) {
    const el = evt.currentTarget
    switch (evt.currentTarget.id) {
        case 'red':
            el.classList.toggle('red');
            test('red');
            break;
        case 'blue':
            el.classList.toggle('blue');
            test('blue');
            break;
    }
}
console.log(typeof btn)
btn['red'].addEventListener("click", changeColor)
btn['blue'].addEventListener("click", changeColor)