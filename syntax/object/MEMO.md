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
- 전제) 자바스크립트 내에서 이루어지는 상속과정에서 클래스(굳이 말하자면 객체복사)는 존재하지않는다. 유일한 생성자는 오로지 객체만이 존재한다.**(프로토타입 참조)**
    - 상속과정은 객체를 복사하는 과정이나, 현재 자바스크립트 내에서 객체를 완벽하게 복사하는 방법은 없다.
    - 해당 상속과정중 공용으로 사용되는 프로퍼티는 존재하기에 부모자식간에 영향이 있을 수 있다.
- 임의 객체를 상속하여 해당 프로퍼티를 부분적으로 사용할 수 있게끔 하는 것
[예제]()


## 프로토타입
- 객체 내 존재하는 내부 프로퍼티
- **다른 객체를 참조하는 단순레퍼런스 역할을 한다.**
    - 임의의 객체내 어느 프로퍼티를 참조하려는 경우 해당 프로퍼티를 못찾을 시 프로토타입을 통해 탐색을 한다.
    ```
    const obj = {
        a: 1
    }

    obj.b = 'value'
    // Object의 프로토타입 [[get]]을 통하여 프로퍼티b를 탐색 -> 직속 프로퍼티 b가 존재하지않을 경우 Object의 프로토타입 [[put]]을 통하여 직속 프로퍼티 b를 생성 및 값을 할당

    // [[put]]의 작동 과정
    // obj의 프로퍼티 서술자를 확인(쓰기가능)
    // 2-1. 읽기전용이 아닌 경우는 직속프로퍼티 b를 생성 및 값을 대입
    // 2-2. 읽기전용인 경우 에러가 발생하여 b가 생성되지않음
    ```

- 상속이란 객체의 복사과정이지만 이는 복사가 아닌 프로토타입으로 연결하여 해당 객체의 프로퍼티/함수에 접근할 수 있게 하는 것이다.
    ```
    const copyObj = new obj();
    // obj가 copyObj에 new로 할당되는 경우 객체 obj를 복사하는 것이 아닌 프로토타입으로 연결된 새로운 객체를 생성한다.
    // 생성자가 아닌, 일반 함수에 new를 붙이는 경우 생성자 호출이 된다(해당 함수 호출 + 함수이름의 객체 생성)
    ```

## Object.create(proto, propertiesObject)
- proto오브젝트의 프로토타입과 링크된 새로운 객체를 반환
    - 객체간의 프로토타입의 링크는 상속과도 비슷한 효과를 꾀할 수 있다.
- 직접적인 각 객체의 프로토타입간의 할당은 링크가 된 상태와는 다르다.
```
function objA() {
    this.a = 'value A'
}
objA.prototype.AA = function() {
    return this.a
}

function objB(a,b) {
    this.a = a
    this.b = 'value' + b
}

// objB = objA;
objB.prototype = Object.create(objA.prototype);
console.log(new objB('aaa').AA());
// 함수객체의 프로토타입 상속
```

- [참조](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/create)


## 객체의 프로토타입 상속
- 객체의 getter, setter를 활용
```
const saram = {
    eat: () => {
        console.log('먹다')
    }
}

const korean = {
    food: '매운맛',
    _proto_: saram
    // saram객체의 프로토타입과 링크, saram의 프로퍼티를 사용할 수 있다.
}
console.log(Object.getPrototypeOf(Object.create(korean)) === korean)
// Object.create(korean) => korean프로토타입과 링크된 객체 반환
// Object.getPrototypeOf()해당 객체의 프로토타입을 반환하는 객체
// korean과 링크된 객체의 프로토타입은 korean이므로 true
```

## 상속관계의 객체관의 관계조사
- a.isPrototypeOf(b)
    - a객체안에 b와의 프로토타입 링크관계가 있는가?(a가 상속받는, b가 상속해주는)
```
상기 예시 객체

// korean객체 내부에 saram과의 링크가 있으므로 true
console.log(korean.isPrototypeOf(saram))

// saram객체 내부에 korean과의 링크가 없으므로 false
console.log(saram.isPrototypeOf(korean))
```
TODO: 상속관계로 이루어진 오리지날 함수 작성

## 위임(상속) 모델
- OLOO(object linked to other object): 객체를 다른 객체에게 위임하는 것
    - 객체와의 연결점을 확인하는 것이 좀 편리하다.
[참조]()