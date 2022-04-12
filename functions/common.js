import getRandmomColor from '../research/randomColor.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../grammer/object/propertyDescription.js'
import  { ninja, testSunbi } from '../grammer/object/mixin.js'

function consoleLog() {
    const saram = {
        eat: () => {
            console.log('먹다')
        }
    }

    const korean = {
        food: '매운맛',
        _proto_: saram
        // saram객체의 프로토타입과 링크, saram의 프로퍼티를 사용할 수 있다.
    }

    const japanese = Object.create(saram)
    console.log(japanese)
    // Object.create(korean) => korean프로토타입과 링크된 객체 반환
    // Object.getPrototypeOf()해당 객체의 프로토타입을 반환하는 객체
    // korean과 링크된 객체의 프로토타입은 korean이므로 true

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
