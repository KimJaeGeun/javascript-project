import { OBJ_ARRAY } from '../const.js'
import getRandmomColor from '../research/randomColor.js'
import objArraySort from '../research/sort.js'
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
const testArray = [
    {
        name: 'aaa',
        nick: 'a2',
        num: 98,
        total: 100
    },
    {
        name: 'aaa',
        nick: 'a3',
        num: 10,
        total: 100
    },
    {
        name: 'bbb',
        nick: 'b1',
        num: 680,
        total: 200
    },
    {
        name: 'ccc',
        nick: 'c3',
        num: 40,
        total: 300
    },
    {
        name: 'ccc',
        nick: 'c2',
        num: 56345,
        total: 300
    },
    {
        name: 'ccc',
        nick: 'c1',
        num: 123,
        total: 300
    },
    {
        name: 'aaa',
        nick: 'a1',
        num: 107,
        total: 100
    },
    {
        name: 'ddd',
        nick: 'd1',
        num: 10,
        total: 400
    },
    {
        name: 'bbb',
        nick: 'b3',
        num: 120,
        total: 200
    },
    {
        name: 'bbb',
        nick: 'b2',
        num: 1,
        total: 200
    },

]
function consoleLog() {
    const sortList = testArray.sort(
        (a, b) =>
            a['total'] < b['total'] ? -1
            : a['total'] > b['total'] ? 1
            : a['num'] < b['num'] ? -1
            : a['num'] > b['num'] ? 1 : 0
    ).reverse();
    console.log(sortList)
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
