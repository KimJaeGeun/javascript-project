// module내 import의 경우 로컬 index.html은 js를 인식하지않아 에러표시됨
// TODO: value체크 함수 이용 코드 작성
import { isEmpty } from './src/functions/checkValue.js'
let btn = document.getElementsByClassName('btn')

function changeColor(evt) {
    const el = evt.currentTarget
    switch (evt.currentTarget.id) {
        case 'red':
            el.classList.toggle('red');
            break;
        case 'blue':
            el.classList.toggle('blue');
            break;
    }
}
Array.from(btn);
console.log(typeof btn)
btn['red'].addEventListener("click", changeColor)
btn['blue'].addEventListener("click", changeColor)