import getRandmomColor from '../research/randomColor.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../grammer/object/propertyDescription.js'
import  { ninja, testSunbi } from '../grammer/object/mixin.js'

function consoleLog() {
    function objA() {
        this.a = 'value A'
    }
    objA.prototype.AA = function() {
        return this.a
    }

    function objB(a,b) {
        this.a = a
        this.b = 'value' + b
    }

    // objB = objA;
    objB.prototype = Object.create(objA.prototype);
    console.log(new objB('aaa', 'bbb').b);
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
