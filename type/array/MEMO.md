# Array

## 개요
- 리스트형태를 가진 전역 객체
- 배열의 길이, 배열내 요소의 데이터형은 정해져있지않음
- 요소와 인덱스로 이루어져있으며, 인덱스는 오로지 정수만을 사용 가능
```
const testArray = ['value']

console.log(testArray)

출력값: ['value']
```
- 배열 또한 객체이기에 키와 프로퍼티 문자열을 추가할 수 있다.
    - **키로 지정한 문자열이 10진수의 숫자 타입이라면 배열의 길이에 변화를 줄 수 있다**
    ```
    const test = [1,2,3]

    test["9"] = 15;
    console.log(test);
    // [1, 2, 3, empty*6, 9], length => 10
    ```


## 배열내 기본 메서드
- 배열끝 항목 추가
```
let testArray = ['value1']

testArray.push('value2')

console.log(testArray)

출력값: ['value1', 'value2']
```

- 배열끝 항목 제거
```
let testArray = ['value1', 'value2']

testArray.pop()

console.log(testArray)

출력값: ['value1']
```

- 배열앞 항목 추가
```
let testArray = ['value1']

testArray.unshift('value2')

console.log(testArray)

출력값: ['value2', 'value1']
```

- 배열앞 항목 제거
```
let testArray = ['value1', 'value2']

testArray.shift()

console.log(testArray)

출력값: ['value2']
```

- 배열 복사
```
let testArray = ['value1']

const copyArray = [...testArray]

console.log(copyArray)

출력값: ['value1']
- 전개연산자를 이용하여 값을 복사하여 할당
```

- 배열내 반복함수
```
let testArray = ['value1', 'value2', 'value3']

testArray.forEach(item => console.log(item))


출력값: ['value1'], ['value2'], ['value3']
- 값이 지정되지않은 배열은 열거되지않는다.
- forEach()의 반환값은 undefined
- 반복도중 예외발생이외에 중단되는 방도가 없기에 중단이유가 있는 반복의 경우 사용하지않는다.
```

- 배열내 요소 변경 및 새로운 배열 출력
```
let testArray = ['value1', 'value2', 'value3']

const mapArray = testArray.map( item => item + 'aaa' )

console.log(mapArray)

출력값: ['value1aaa', 'value2aaa', 'value3aaa']
- 변경이 없는 경우 기존의 배열을 출력
```

- 배열내 조건부 요소를 배열로 출력
```
let testArray = ['value1', 'value2', 'value3', 'value2']

const filterArray = testArray.filter(item => item === ''value2'')

console.log(filterArray)

출력값: ['value2', 'value2']
- 조건에 부합하는 요소가 없는 경우 빈배열을 출력
```

- 배열내 요소찾기
```
let testArray = ['value1', 'value2', 'value3']

const findArray = testArray.find(item => item === 'value2')

console.log(findArray)

출력값: 'value2'
- 배열내 조건부에 부합하는 첫번째 요소를 반환
```