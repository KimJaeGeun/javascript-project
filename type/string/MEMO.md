# String

## 개요
- 전역객체로 문자의 나열
- 문자의 나열이기에 오브젝트, 배열로 취급이 가능
   - **취급이 가능한것이지 타입이 동일한것은 아니다.**
   - 문자열을 배열화 하여 응용
      ```
      const str = "abcd"
      Array.from(str).reverse().join("")
      // dcba
      ```
- ES5이후 리터럴 템플릿가능
   - ``으로 이루어지며, 문자열과 문자보간기능을 사용 가능
      - 보간 표현식 내부 플레이스 홀더(${...})를 사용하여 변수 및 표현식의 결과값을 표현 가능
   - [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)
- 특수문자의 경우 이스케이프 표현을 사용하여 표현
   - [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String#%EC%9D%B4%EC%8A%A4%EC%BC%80%EC%9D%B4%ED%94%84_%ED%91%9C%ED%98%84)
```
1. String(value)
   - value는 임의의값

console.log(String(value));

출력값: 임의의 value값을 String으로 출력
```

**직접 생성과 생성자를 사용한 것의 타입값이 다르다**
```
const test1 = "";
const test2 = new String(test1);

console.log(typeof test1); // String
console.log(typeof test2); // object

```



## 함수
- 대표적인 예시만 기술
```
const testString = 'test value'

1. indexOf()
   - testString.indexOf('value')
   - 해당 값이 존재하는 첫번째 인덱스값을 반환
   - 값이 부재한 경우 -1을 반환
2. substring(startIndex, endIndex)
   - testString.substring(startIndex, endIndex)
   - 시작 인덱스의 문자, 끝 인덱스의 문자값을 반환
3. charAt()
   - testString.charAt(index)
   - 문자열내 해당 인덱스의 문자를 반환
```

## length
- UTF-16 코드 유닛 기준으로 문자열의 길이를 표현
   - '' 빈문자열의 경우 0을 반환
   - 이모티콘의 경우 기본은 2, 복합적인 경우 결합한 수만큼의 길이값을 가짐
```
예시 - 1
console.log('hellow'.length);

출력값: 6

예시 - 2
console.log('😸'.length);

출력값: 2
```
