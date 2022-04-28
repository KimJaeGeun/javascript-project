import { OBJ_ARRAY } from '../const.js'
import getRandmomColor from '../research/randomColor.js'
import { objArraySort, objArraySort2 } from '../research/sort.js'
import { testThis, testThis2, testThis3 } from '../syntax/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../syntax/object/propertyDescription.js'
import  { ninja, testSunbi } from '../syntax/object/mixin.js'
import { delegateObj } from '../syntax/object/class.js'
import {
    asyncFunc,
    examPromise,
    examMultiPromise,
    examErrorPromise,
    examGenerrator,
} from '../syntax/async/functions.js'

function consoleLog() {
    
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
