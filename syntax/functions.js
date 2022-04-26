
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

export { getRandmomColor }