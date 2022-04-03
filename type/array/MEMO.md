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
