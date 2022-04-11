const obj = {
    key: 'value'
}

obj.key
// object obj내부의 get연산을 통해 key값을 습득

obj.key = 'value2'
// object obj내부의 put연산을 통해 key값을 변경

// getter, setter정의
const obj2 = {
    key: 'value',

    // key: 과 동일
    get key() {
        return this._key; // 이 this는?
    },
    set key(val) {
       this._key = `${val} ${val}`;
    }
    //이곳에서 생성된 _변수는 존재하나 관습상 사용하지않는다.
}
obj2['key'] = 'qwer';



function inputObjectItem(value) {
    obj['input'] = 'input value';
    // 계산된 프로퍼티명
    obj['input' + value] = value
    console.log(obj['key'])
}

function confirmProperty() {
    return Object.getOwnPropertyDescriptor(obj, 'key');
}

function setPropertyDescriptor(obj, key, c, e, w) {
    return Object.defineProperty(obj, key, {
        value: "value",
        configurable: c,
        enumerable: e,
        writable: w,
    });
}

export { inputObjectItem, confirmProperty, setPropertyDescriptor }