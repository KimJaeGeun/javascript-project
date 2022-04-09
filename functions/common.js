import {getRandmomColor} from '../grammer/functions.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'

function consoleLog() {

    testThis2();
}

function clickTest() {
    // 연구중인 코드
    const tabs = document.querySelectorAll('#app');

    for ( let i = 0; i < tabs.length; i += 1) {
        tabs[i].onclick = () => {
            const color = getRandmomColor(1)[0]
            console.log(color)
            return tabs[i].style.backgroundColor = color;
        };
    }
}

function testCode() {
    const comp = document.querySelector('#app');
    const colorList = getRandmomColor(12);

    for(let i = 0; i < colorList.length; i+=1) {
        comp.innerHTML = `<div style="width: 200px; height: 50px; background-color: ${colorList[i]};" />`;
    }
}



export { consoleLog, clickTest, testCode }
