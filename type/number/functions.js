import { isNumber } from '../../functions/checkValue.js'

//  Number값을 날짜값으로 반환
function incodeDate(number) {
    if ( isNumber(number) ) {
        return new Dater(number);
        // incode의 경우 Number(new Date(value))
    }

    return;
}

export { incodeDate }