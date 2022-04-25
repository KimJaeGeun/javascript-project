# Object

## 개요
- 값을 모아둔 전역객체
   - 값을 모아둔 전역객체로써, 배열(Array)과 비슷하나 그 형태가 리스트형태이며, 인덱스를 포함하지않는 점이 다르다.
- 키를 설정할 수 있으며, 키와 값중 어느 한쪽이 부재한 object는 만들 수 없다.
- 생성자, 객체초기자, 리터럴 구문으로 생성 가능
```
const testObject =
1. new Object(value)
2. Object.create(object.protoType, {key: value})
3. { key: value }


console.log(testObject);


출력값: {key: value}
```
- **함수(function)**
   - object의 하위타입으로 타입값은 object이다.
   - 함수내 선언된 인자 갯수는 함수.length로 알 수 있다.(func(a,b,c) -> func.length === 3)


## object 생성
- 비어있는 object 생성
   - length === 0
   - 타입만을 지정함(타입이 object이기에 객체 함수 사용 가능)
```
const emptyObject =

1. Object(null)
2. Object(undefined)

console.log(emptyObject);

출력값: {}
```
- Boolean 객체 생성
   - TODO: 생성된 Boolean 객체활용법에 대해 공부
```
const booleanObject =

1. Object(true)
2. Object(false)

console.log(booleanObject);

출력값 - 1: Boolean(true)
출력값 - 2: Boolean(false)
```


## object 내장 객체(함수)
- 대표적인 예시만 기술
```
const obj = {
   key1: 'value1',
   key2: 'value2',
   key3: 'value3'
};

1. Object.keys(obj)
- 오브젝트내 key값을 배열로 반환

출력값 - 1: ['key1', 'key2', 'key3']

2. Object.values(obj)
- 오브젝트내 value값을 배열로 반환

출력값 - 2: ['value1', 'value2', 'value3']

3. Object.entries(obj)
- for...in과 같이  객체 자체의 enumerable 속성인 [key, value]를 배열화되어 반환한다
- for문과 함께 사용 하여 [key, value]값을 열거할 수 있다

출력값 - 3: [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]



```