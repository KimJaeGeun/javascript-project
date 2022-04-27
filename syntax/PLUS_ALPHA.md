# 플러스 알파
- 복습중 추가적인 내용의 기재

## 구조 분해 할당
- 객체, 배열을 해체하여 그 속성을 개별 함수에 할당 하는 것
```
const testObj = {
    a: 'a에요',
    b: 'b에요'
}

const {a, b} = testObj;
console.log(a)
console.log(b)
```

## 스프레드연산자, rest문법

1. 스프레드연산자 : 기존의 객체, 배열, 함수의 변동 없이 값을 복사하여 할당하는 것
```
const testArray = [ 1, 2 ];

const testArray2 = [...testArray, 3];
console.log(testArray);

```

2. rest문법
    - 객체, 배열내 해당 요소를 제외한 새 객체, 배열을 생성
    ```
    const testObj = {
        a: 'a에요',
        b: 'b에요',
        c: 'c에요'
    }

    const {a, ...b} = testObj;
    console.log(a)
    console.log(b)
    ```
    - 함수의 파라미터 갯수가 미정일때 대체하여 사용(복수의 인자를 배열화)
    ```
    function testFunc(...params) {
            return params
    }

    testFunc(1, 2, 3, 4, 5);
    ```

## 클로저란?
- 랙시컬 스코프의 외부에서 선언되어 실행한 것이 랙시컬 내부로 접근하는 것
```
// 어느 특정 함수내 랙시컬 스코프
function testFunc() {
    // 함수 스코프 내 선언
    const a = 0;
    // 중첩 스코프
    function hoge() {
        console.log(a);
    }
    hoge();
}

const callFunc = testFunc();

callFunc();
// -> 선언된 함수의 외부에서 선언되어 실행되며, 해당 함수내에서 선언한 변수에 접근 및 함수 실행
```