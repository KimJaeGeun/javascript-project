import getRandmomColor from '../research/randomColor.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../grammer/object/functions.js'

// getter, setter정의


function consoleLog() {
    const obj = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        key4: 'value4',
        key5: 'value5',
    }

    for(let i of obj){
        console.log(i)
    }
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

function testCode(comp) {
    const colorList = getRandmomColor(10);
    console.log(colorList)
    for(let i = 0; i < colorList.length; i+=1) {
        comp.innerHTML += `<div style="width: 200px; height: 50px; background-color: ${colorList[i]};">test${i}</div>`;
    }
}


export { consoleLog, clickTest, testCode }
