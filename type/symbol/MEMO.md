# Symbol()

## 개요
- 함수로써 존재하는 type의 한 종류
- 데이터값은 [원시값](https://developer.mozilla.org/ko/docs/Glossary/Primitive)
- Symbol()값을 반환
```
console.log(Symbol('temp));

출력값: Symbol(temp)
```
**Symbol()의 출력값은 String형태가 아닌 Symbol()이라는 고유값이다**
- 각각의 고유값을 같기에 같은 Symbol이라도 동일한 값을 갖지않는다
```
console.log(Symbol('a') == Symbol('a'))

출력값: false
```

## 구조
```
Symbol(description)
```
- description 타입은 String 혹은 Number를 사용

## 사용이유
1. 숨김프로퍼티(hidden property) 작성
- 서드파티에서 가져온 객체 이용시, 해당 객체의 식별자로써 사용 가능

> 예시)
> ```
> const fruits = {
>     apple: 'apple'
> };
>
> let banana = Symbol('banana');
>
> fruits[banana] = 'banana';
>
> console.log(fruits);
> ```

> 출력값
> ```
> {apple: 'apple', Symbol(banana): 'banana'}
> ```

2. for...in내에서 열거되지않는다
> 예시)
> ```
> const fruits = {
>     [Symbol('banana')]: 'banana',
>     apple: 'apple'
> };
>
> for(const f in fruits) {
>     console.log(f);
> }
> ```

> 출력값
> ```
> apple
> ```

## Symbol.iterator
- 기본 이터레이터를 지정하는 상용심볼
    - **상용심볼**: 특별한 용도를 위해 지정된 심볼
