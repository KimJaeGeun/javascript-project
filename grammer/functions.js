
// call 함수
function callFunc() {
    const test = { name: 'jaegeun'}
    const test2 =123

    function testThis () {
        return this.name;
    }

    function consoleLog() {
        // jaegeun
        console.log(testThis.call(test))
        // undefined
        console.log(testThis.call(test2))

        // call(this, arg1, arg2...)
        // call함수의 첫번째 인자는 this를 말한다.
    }
}


function getNewItem() {
    // 오브젝트로 구성된 배열에서 각 아이템의 특정 키와 그 값을 추출하여 새로운 배열을 만드는 것
    const KEY1 = 'key1';
    const KEY3 = 'key3';

    const value1 = [
        {key1: 'value1', key2: 'value2', key3: 'value3'},
        {key1: 'valuea', key2: 'valueb', key3: 'valuec'},
        {key1: 'valueq', key2: 'valuew', key3: 'valuee'},
    ];

    let test = []

    for(const item of value1) {
        const ttt = {}
        ttt[KEY1] = item.key1;
        ttt[KEY3] = item.key3;
        test.push(ttt);
    }

    console.log(test);
}

// value의 크기만큼 중복없이 육안으로 구분 가능한 색상배열 만들기
/**
 * getRandmomColor(value)를 다른위치에서 호출하여 사용할때
 * getRandmomColor(value)의 스코프에 접근 가능하게끔하는 것이 스코프이다(이 경우 매개변수가 외부인자로 작용)
 * */
function getRandmomColor(value) {
    let randomColorNum = [];
    let randomColorList = [];

    for ( let i = 0; i <=255; i+=34 ) {
        randomColorNum.push(i)
    }

    for (let i = 1; i <= value; i+=1 ) {
        let colorList = new Array(3);
        const test =randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)]
        console.log(test)
        switch(i%7) {
            case 1 : {
                colorList[0] = test.toString(16);
                colorList[1] = '00'
                colorList[2] = '00'
            } break;
            case 2 : {
                colorList[0] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[1] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[2] = '00'
            } break;
            case 3 : {
                colorList[0] = 'ff'
                colorList[1] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[2] = '00'
            } break;
            case 4 : {
                colorList[0] = '00'
                colorList[1] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[2] = '00'
            } break;
            case 5 : {
                colorList[0] = '00';
                colorList[1] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[2] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
            } break;
            case 6 : {
                colorList[0] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[1] = randomColorNum[parseInt((Math.random()*randomColorNum.length) + 4)].toString(16);
                colorList[2] = 'ff'
            } break;

        }
        const dupliChaeck = randomColorList.filter(item => item !== colorList)

        if (dupliChaeck) {
            randomColorList.push(`#${colorList[0]}${colorList[1]}${colorList[2]}`)
        } else {
            i--;
        }
    }

    return randomColorList;
}

export { getRandmomColor }