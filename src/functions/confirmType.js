// 해당 값이 설정되어있음을 체크 (해당 값자체가 선언되지않았음에도 에러 없이 처리가능)
export function confirmType(value) {
    if(typeof value === 'undefined') {
        return '';
    }
    return value;
}