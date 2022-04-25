import { OBJ_ARRAY } from '../const.js'
import getRandmomColor from '../research/randomColor.js'
import objArraySort from '../research/sort.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../grammer/object/propertyDescription.js'
import  { ninja, testSunbi } from '../grammer/object/mixin.js'
import { delegateObj } from '../grammer/object/class.js'
import {
    asyncFunc,
    examPromise,
    examMultiPromise,
    examErrorPromise,
    examGenerrator,
} from '../grammer/async/functions.js'
const test = "qwer"

function consoleLog() {
    console.log(2==3)
}


function clickTest() {
    // 연구중인 코드
    const tabs = document.querySelectorAll('#app');

    for ( let i = 0; i < tabs.length; i += 1) {
        tabs[i].onclick = () => {
            const color = getRandmomColor(1)[0]
            return tabs[i].style.backgroundColor = color;
        };
    }
}

function testCode(comp) {
    const colorList = getRandmomColor(10);
    for(let i = 0; i < colorList.length; i+=1) {
        comp.innerHTML += `<div style="width: 200px; height: 50px; background-color: ${colorList[i]};">test${i}</div>`;
    }
}


export { consoleLog, clickTest, testCode }
