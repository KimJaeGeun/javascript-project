import { isArray } from '../../functions/checkValue.js'

//  배열내 특정값을 삭제
function deleteArrayValue(array, value) {
    if ( isArray(array) ) {
        const index = array.indexOf(value);

        array.splice(index, 1)

        return array
    }

    return;
}

//  배열내 요소추가(중복없이)
function addItem(array, value) {
    if ( isArray(array) ) {
        if(value)
        const index = array.indexOf(value);

        array.splice(index, 1)

        return array
    }

    return;
}


export { deleteArrayValue }
