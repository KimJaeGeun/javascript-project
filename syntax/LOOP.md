# 반복문

## 개요
- 반복문
- 어느 조건을 갖고 조건에 부합하는 경우한정으로 반복하는 구문


## for
- 원시 for문
- for내부 인덱스의 경우 지정 인덱스가 아닐시 let으로 새로 지정을 추천(인덱스값은 for문 실행시 변경되기에)
```
for (let i = 0; i < 조건  i +=1) {

}
```

## for...in
- 상속된 속성포함하여 열거가능 한 속성(key)을 나열함
- Symbol로 지정된 속성인 경우 숨김이기에 나열되지않음
```
const testObject = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
}

for (const property in testObject) {
    property // Object.keys(testObject)
    testObject[property] // Object.values(testObject)

}
```

## for...of
- 반복가능한 객체내 요소를 나열함
- 반복가능한 객체(Array, map, Set, typeArray등)
```
const testArray = ['value1', 'value2', 'value3']

for (const property of testArray) {
    property // testArray[index]
}
```

## for await ...of
- for...of의 비동기처리방식
```
const testArray = api처리등으로 인한 비동기식 생성배열

async function asyncFunction () {
    for await (const property of testArray) {
        property // testArray[index]
    }
}

```

## while
- 조건충족시 실행되는 반복문
```
const value = 0;

while (value > 5) {
    value+=1;
}

```

## do while
- 조건의 불충족때까지 실행되는 반복문
```
let value = 0;

do {
    value +=1;
} while(value < 5>)

- do의 실행문은 무조건 한번은 실행이 된다.
```