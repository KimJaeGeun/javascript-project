# 조건문

## 개요
- 조건을 충족하는 가에 따라 실행여부를 판단하는 구문

## if
- if문내 조건을 충족시 실행문을 실행, 불충족시 실행하지않으며, 불충족시 실행되는 구문은 else구문이다.
- javascript내에서는 else if구문은 존재하지않으며, 관용적으로 else구문내 if문을 넣은 2중if문이다.
```
for (let i = 0; i < 조건  i +=1) {

}
```

## if
- if문내 조건을 충족시 실행문을 실행, 불충족시 실행하지않으며, 불충족시 실행되는 구문은 else구문이다.
- javascript내에서는 else if구문은 존재하지않으며, 관용적으로 else구문내 if문을 넣은 2중if문이다.
```
if (true) {
    // true일때 실행
} else {
    // false일때 실행
}

- 이하의 코드는 서로 같은 코드이다/
if (조건1) {

} else if(조건2) {

}

if (조건1) {

} else {
    if (조건2) {

    }
}

```

## switch
- switch의 조건문을 충족하는 case구문을 실행
- 조건이 타입형의 경우 엄격히 구분됨
- 상위case구문이 실행되는 경우 하위 case구문도 실행되기에 실행후 조건문실행을 중지할 경우 break, return등으로 탈출
- 모두 충족되지않을경우 실행되는 default구문이 있다.
```
const value = 0;

switch() {
    case 0: console.log('0') break;
    case 1: console.log('1') break;
    default: console.log('default') break;
}
```

## 삼항 연산자
- 조건문 ? 조건충족 실행문 : 조건불충족 실행문
```
2 > 0 ? console.log(실행) : console.log(실행 안됨)
```

## 논리연산자 응용
- &&
   - 비교논리가 값의 경우, 양쪽 값이 존재하는 경우 최우측단의 값이 반환
   - 값이 부재하는 경우 false를 반환
- ||
   - 비교논리가 값의 경우 존재하는 값이 반환
   - 양쪽 값이 존재하는 경우 처음 존재하는 값이 반환
```
console.log(10 && 'test')

출력값: 'test'

console.log(10 || 'test')

출력값: 10

```