# 객체

## 개요
- 객체의 정의는 리터럴 형식과 생성자 형식으로 나뉘어진다
   - 리터럴 형식
      - 다수의 키/값을 설정 가능
      ```
      const obj = {
        key: value
      };
      ```
   - 생성자 형식
      - 한번에 하나의 프로퍼티 추가가능
      ```
      const obj = new testObj()
      ```
- [객체의 타입](https://github.com/KimJaeGeun/javascript-project/tree/main/type)
- 객체가 지정될때 해당 객체의 타입값(프로퍼티)으로 이루어진다.
- **객체에 함수가 내장되는 것이 아니다. 해당 함수를 가르키는 프로퍼티가 존재하는 것**


## 내장객체
- 자바스크립트내 내장 함수로써 생성자로 사용되며 하위타입의 새 객체를 생성
- 자바스크립트에서는 리터럴형식의 객체또한 해당 타입의 객체로 강제변환되므로, 명시적 객체생성은 필요없다(new로 만드는 거)
    ```
    "test".toUpperCase();
    120.345.toFixed(2)
    ```
- 종류
    - String
    - Number
    - Boolean
    - Object
    - Function
    - Array
    - Date
        - Date는 리터럴 형식이 없기때문에 항상 생성자로 생성해주어야 한다.
    - RegExp
    - Error
        - 예외처리시 사용되는것이 대부분이기에 명시적 생성은 드물지만 생성자로도 생성은 가능하다.

## 객체의 복사
- JSON객체로 복사
    ```
    JSON.parse(JSON.stringify(obj))
    ```
- Object.assign()
    - 열거 가능한 객체를 복사하여 해당객체와 병합
    ```
    Object.assign(targetObj,obj1, obj2...)
    ```

## 프로퍼티 서술자
- 해당 프로퍼티의 특성값을 나타낸 것
- 프로퍼티 특성값
    1. writable(쓰기가능)
        - 해당 프로퍼티의 값의 변경 여부
    2. configurable(설정가능)
        - true인 경우 Object.defineProperty() 사용하여프로퍼티 서술자를 변경 가능
        - fasle인경우 writable의 값을 false로 변경은 가능하나 되돌리기는 불가하다.
    3. enumerable(열거 가능)
        - 루프문(for in과 같은)에서 객체 프로퍼티를 열거할때 사용가능 여부
- 프로퍼티의 특성값 확인
    ```
    Object.getOwnPropertyDescriptor(obj, 'key');
    ```
- 프로퍼티의 특성값 정의
    ```
    const obj = {
        aaa: 'abcdeFu'
    }

    setPropertyDescriptor(obj, 'aaa', true, false, false)

    Object.getOwnPropertyDescriptor(obj, 'aaa')
    ```

## 객체간의 상속, 객체복사(mixin)
- 전제) 자바스크립트 내에서 이루어지는 상속과정에서 클래스(굳이 말하자면 객체복사)는 존재하지않는다. 유일한 생성자는 오로지 객체만이 존재한다.
    - 상속과정은 객체를 복사하는 과정이나, 현재 자바스크립트 내에서 객체를 완벽하게 복사하는 방법은 없다.
    - 해당 상속과정중 공용으로 사용되는 프로퍼티는 존재하기에 부모자식간에 영향이 있을 수 있다.
- 임의 객체를 상속하여 해당 프로퍼티를 부분적으로 사용할 수 있게끔 하는 것
[예제]()

