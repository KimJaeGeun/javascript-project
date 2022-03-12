// 해당 값이 설정되어있음을 체크 (해당 값자체가 선언되지않았음에도 에러 없이 처리가능)

// undefined와 null값을 동일시 한 것
function isEmpty(value) {
    if (typeof value === 'undefined' || typeof value === 'null' || value.length === 0) {
        return true;
    }
    return false;
}

function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    return false;
}

function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
    return false;
}

export { isEmpty, isNumber, isString }