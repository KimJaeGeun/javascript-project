import {addProperty} from '../type/object/functions.js'

function consoleLog() {
    // 테스트값을 대입하여 확인
    let value1 ={
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
    };
    value1 = addProperty(value1, 'key4', 'value4')
    value1['key4'] = 'value4'
    console.log(value1)
}

export { consoleLog }
