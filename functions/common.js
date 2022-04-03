import {isArray} from './checkValue.js'

// import {addProperty} from '../type/array/functions.js'

function consoleLog() {
    // 테스트값을 대입하여 확인
    let value1 = ['value1', 'value2', 'value3'];
    let value2 = ['value2', 'value4', 'value5'];

    let test = new Set(value1.concat(value2))
    console.log(Array.isArray(test))
}

export { consoleLog }
