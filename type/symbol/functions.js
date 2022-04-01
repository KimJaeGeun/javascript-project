import { isNumber, isString } from '../../functions/checkValue.js'

// Symbol을 사용한 숨김프로퍼티 삽입
function symbolProperty(object, key, value) {
    if ( isNumber(key) && isString(key) ) {
        object[Symbol(key)] = value;
    }

    return;
}

export { symbolProperty }
