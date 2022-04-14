import getRandmomColor from '../research/randomColor.js'
import { testThis, testThis2, testThis3 } from '../grammer/this/functions.js'
import { inputObjectItem, confirmProperty, setPropertyDescriptor } from '../grammer/object/propertyDescription.js'
import  { ninja, testSunbi } from '../grammer/object/mixin.js'
import { delegateObj } from '../grammer/object/class.js'
import { asyncFunc } from '../grammer/async/functions.js'

function consoleLog() {




    const old = 18;

    function speedCal() {
        if (15 < old && old < 30) {
            return old/2;
        }
        return 5;
    }

    function shout() {
        setTimeout(
            function () {
                console.log('호옹이!')
            }, 5000);
    }

    function run(who, speed, shout) {
        console.log(`${who}가 초속${speed()}m 로 달린다`)
        shout();
    }

    run('누군가', speedCal, shout);

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
