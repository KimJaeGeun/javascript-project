
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

    for ( let i = 0; i <=255; i+=17 ) {
        randomColorNum.push(i)
    }

    for (let i = 0; i < value; i+=1 ) {
        let color = '#'

        for ( let j = 0; j < 3; j +=1) {
            const colorNum = randomColorNum[parseInt(Math.random()*randomColorNum.length)].toString(16)
            if (color.indexOf(String(colorNum)) < 0) {
                color = color.concat(colorNum === 0 ? '00' : String(colorNum));
            } else {
                continue;
            }
        }

        const dupliChaeck = randomColorList.filter(item => item !== color)

        if (dupliChaeck) {
            randomColorList.push(color)
        } else {
            i--;
        }
    }

    return randomColorList;
}

export { getRandmomColor }