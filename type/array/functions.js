import { isArray } from '../../functions/checkValue.js'

// 배열내 특정값을 삭제
function deleteArrayValue(array, value) {
    if ( isArray(array) ) {
        const index = array.indexOf(value);

        array.splice(index, 1)

        return array
    }

    return;
}

// 배열내 요소추가, 배열인경우 병합(중복없이)
function mergeArray(array, value) {

    if ( isArray(array) ) {
        // 중복없이 배열 병합 => Set()이라는 object화
        const mergedArray = new Set(array.concat(value));

        // object를 배열화함
        return [...Array.from(mergedArray)]
    }

    return;
}

export { deleteArrayValue, mergeArray }
