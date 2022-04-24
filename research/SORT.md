# sort()


## 개요
- 배열내 내장 객체로, 배열내 요소를 정렬하는 함수
```
Array.sort(func);
- func가 미정인 경우 첫번째 요소를 기준으로 정렬
- 인자 함수의 인자는 2개를 기준으로 한다.
- 화살표함수를 사용 할 수 있다.

ex)
Array.sort(function(a, b) {
    return a - b;
});

ex2)
Array.sort((a, b) => a - b);
```

## 예시
```
배열내 요소 타입이 Number인 경우
Array.sort((a, b) => a -b );
```
---
```
배열내 요소 타입이 String인 경우
Array.sort((a, b) => a > b ? 1 : a < b  -1 : 0 );
```
---
```
배열내 요소가 객체인 경우

- 해당 객체의 요소 타입이 Number인 경우
Array.sort((a, b) => a['num'] - b['num']);

- 해당 객체의 요소 타입이 String인 경우
Array.sort((a, b) => a['str'] > b['str'] ? 1 : a['str'] < b['str']  -1 : 0 );

- 객체 배열의 다중 정렬
ex) 요소 String타입의 요소 str을 우선 정렬 후 Number타입의 요소 num을 정렬
Array.sort((a, b) => a['str'] > b['str'] ? 1 : a['str'] < b['str']  -1 : a['num'] - b['num'] );
```