import { isString } from '../../functions/checkValue.js'

//  Number값을 날짜값으로 반환
function checkString(checkTarget, string) {
    if ( isString(checkTarget) && isString(string) ) {

        return checkTarget.indexOf(string) > 0 ? true : false
    }

    return;
}

export { checkString }
