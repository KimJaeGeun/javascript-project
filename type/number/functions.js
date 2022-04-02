import { isNumber } from '../../functions/checkValue.js'

//  Number값을 날짜값으로 반환
function incodeDate(number) {
    if ( isNumber(number) ) {
        return new Dater(number);
        // incode의 경우 Number(new Date(value))
    }

    return;
}

// 양수의 정수값을 반환
function changePositiveInt(value) {
    if ( isNumber(number) ) {
        const result = (value < 0) ? Math.abs(parseInt(value)) :  parseInt(value)

        return result;
    }

    return;
}

export { incodeDate, changePositiveInt }
