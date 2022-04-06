import {getRandmomColor} from '../grammer/functions.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'

function consoleLog() {
    // 연구중인 코드
    const tabs = document.querySelectorAll('#app');

    for ( let i = 0; i < tabs.length; i += 1) {
        tabs[i].onclick = () => {
            const color = getRandmomColor(1)[0]
            console.log(color)
            return tabs[i].style.backgroundColor = color;
        };
    }
    testThis3();
}

export { consoleLog }
