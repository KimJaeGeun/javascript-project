import { isObject } from '../../functions/checkValue.js'

//  key값, value값을 나누어 object로 반환
function sepObject(obj) {
    if ( isObject(obj) ) {
        return {
            keys: Object.keys(obj),
            values: Object.values(obj)
        }
    }

    return;
}

// object내 새로운 property를 추가
function addProperty(obj, key, value) {
    if ( isObject(obj) ) {
        obj[key] = value
        return obj
    }

    return;
}

// 상기의 add의 경우 한가지 값을 추가한 것이라면 assign경우 object끼리 병합시키는 것
// 해당 property중 중복이 있다면 병합시키는 쪽의 property를 우선시한다.
function assignObject(targetObj, obj) {
    if ( isObject(obj) ) {
        return Object.assign(targetObj, obj)
    }

    return;
}

/**
 * 그밖의 함수들
 * Object.freeze()
 *  - 선언된 object는 변경이 불가하다.
 *  - Object.isFrozen()은 동결 여부 확인
 *  - Object.preventExtensions() object내 property추가방지(삭제 및 변경은 가능)
 *
 * Object.fromEntries()
 *  - ['key', 'value']의 배열을 object화함
 *
 */


export { sepObject, addProperty, assignObject }
