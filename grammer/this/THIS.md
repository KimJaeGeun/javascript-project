# this

## 개요
- 자기 참조 변수로 참조하는 객체, 생성되는 객체를 의미한다.
- this가 나타내는 것은 함수의 호출방식에 따라 달라진다.
[참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this#try_it)

## bind(value)
- function의 내장함수로써 받는 value값은 해당 함수의 this를 지정하는 스코프역할을 한다.
- 함수내부에서 전역으로 지칭되어있는 스코프를 지정해줄 수 있다.
- 함수가 실행하기전 지정이 되며, 실행중에는 할당 할 수 없다.