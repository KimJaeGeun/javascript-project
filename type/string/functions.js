import { isString } from '../../functions/checkValue.js'

//  target의 문자열내 해당 문자열의 포함여부 확인
function checkString(checkTarget, str) {
    if ( isString(checkTarget) && isString(str) ) {

        return checkTarget.indexOf(str) > 0 ? true : false
    }

    return;
}

export { checkString }
