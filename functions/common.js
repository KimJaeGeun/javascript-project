import {mergeArray} from '../type/array/functions.js'

function consoleLog() {
    // 테스트값을 대입하여 확인
    let value1 = ['value1', 'value2', 'value3', 'value2'];
    let value2 = { key: 'value4'};

    console.log(value1.find(item => item === 'value2'))
}

export { consoleLog }
