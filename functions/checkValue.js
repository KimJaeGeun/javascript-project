// 해당 상수화된 값은 별개의 파일에서 const로 지정하여 사용
import { VALUE } from '../const.js';

// 값의 형태를 체크하는 것이 아닌 값의 존재를 체크
// null, undefined, 빈 배열, 빈 객체
function isEmpty(value) {
    if (typeof value === VALUE.NULL || typeof value === VALUE.UNDEFINED || value.length === 0) {
        return true;
    }
    return false;
}

// 값의 존재 체크 이유: 값의 형태를 체크하기에 부재한 경우 다른 타입을 돌려줄 가능성 방지
function isNumber(value) {
    if (isEmpty(value)) {
        return;
    }

    return typeof value === VALUE.NUMBER;
}

function isString(value) {
    if (isEmpty(value)) {
        return;
    }

    return typeof value === VALUE.STRING;
}

// null은 object로 취급하므로 항상 값의 부재를 체크
// object, array의 타입값은 object로 출력되기에 Array.isArray()를 사용하여 구분
function isObject(value) {
    if (isEmpty(value) || Array.isArray(value)) {
        return;
    }

    return typeof value === VALUE.OBJECT;
}

function isArray(value) {
    if (isEmpty(value) || !Array.isArray(value)) {
        return;
    }

    return typeof value === VALUE.OBJECT;
}

function isSymbol(value) {
    if (isEmpty(value)) {
        return;
    }

    return typeof value === VALUE.SYMBOL;
}

// 체크한 값에 따라 확인된 함수가 무엇인지 돌려주는 함수
function checkValue(value) {

    // 함수의 배열화
    // TODO: this를 안붙여도 스코프가 들어가는 이유를 알아볼 것
    const checkFunc = [ isNumber, isString, isObject, isArray, isSymbol ]

    for(let i = 0; i < checkFunc.length; i+=1) {
        if(checkFunc[i](value)) {
            return `checked function is ${checkFunc[i].name}()`;
        }
    }
};


export default checkValue
