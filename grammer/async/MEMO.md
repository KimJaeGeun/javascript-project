# 동기, 비동기성


## 개요
- 자바스크립트의 프로그램은 하나의 파일이 아닌, 여러개의 덩이(chunk)로 구성될 수 있으며 덩이의 일반적인 것은 함수이다.
- 순차적으로 덩이들이 처리완료된뒤, 다음 덩이를 처리하는 것 => 비동기성(일괄처리가 아니라는 뜻)
- 덩이가 처리되지않은 상태에서 넘어가며, 이후의 덩이를 처리하는 것 => 동기성(동시다발적으로 처리된다는 뜻)
- **자바스크립트 프로그램은 한번에 하나의 덩이 단위로 실행되어지지만, 연쇄적으로 동시적 실행이 되는 것처럼 보여지는 경우가 있다.<br>이러한 경우에 서로에게 영향을 주는 덩이가 존재한다면 순서를 보장해주는 조치가 필요하다 => 비동기성으로 만들기**

## 콜백
- 어떤 함수가 실행이 끝난 뒤 실행되는 함수
    - 아래의 예시는 함수run을 호출한뒤, 인자로 받은 speedCal, shout를 호출한다.<br> 이 경우 콜백함수는 speedCal, shout를 의미한다.
    ```
    const old = 18;

    function speedCal() {
        if (15 < old && old < 30) {
            return old/2;
        }
        return 5;
    }

    function shout() {
        console.log('호옹이!')
    }

    function run(who, speed, shout) {
        console.log(`${who}가 초속${speed()}m 로 달린다`)
        shout();
    }

    run('누군가', speedCal, shout);
    ```
- **콜백지옥(하지마라)**
    - 콜백함수가 중첩적으로 쓰여진 코드
    - 각각의 함수중 동기식이 적용이 된다면 코드의 실행단계가 달라지며 덩이에 영향이 심각하게 간다.
    ```
    function startHell(function(){
        // hell-1
        setTimeout(
            //hell-2
            function () {
                //hell-3
                console.log('여긴 지옥이야')
            }, 5000);
    }){

    }
    ```
    - 후속함수는 필요한 시점에서 콜백지옥이 되지않게끔, 함수의 순차성을 확보하기위해 반드시 완전실행성을 보장받는 비동기성을 유지한다면?

## promise
- 자바스크립트내에서 사용되는 비동기식 처리방식의 하나
- 아직 값이 특정되지않은 인자를 사용 할 시 사용되는 미래값 객체를 의미한다.
- promise이후의 과정은 비동기식으로 처리되나 promise자체 내부의 경우 동기식으로 처리된다.
- TODO: promise과정중 중간단계에서의 취소할 수 없다
- 인자로 resolve와 reject를 갖는다.
    - resolve: 실행되는 콜백함수
    - reject: 에러
- 3가지 상태를 갖는다
    1. Pending(대기): 함수를 호출한 상태, 콜백함수 대기중
    2. Fulfilled(이행): 함수를 실행하여 콜백함수가 호출, 실행된 상태(resolve호출)
    3. Rejected(실패): reject를 사용한 상태, catch로 넘겨서 에러를 파악할 수 있다
- 해당 promise가 실행한 뒤 콜백으로 사용되는 함수
    1. then(): promise객체를 가진 상태에서 콜백으로 사용되는 함수
        - then으로 건내지는 콜백은 반드시 비동기로 처리되어 받는다.
        - then내에서 인자를 사용하여 에러를 확인은 가능하나 그러는 의미가 없다.
    2. catch(): reject() 메서드가 호출로,에러를 확인하는 함수
- catch()로 에러처리를 받으면 되나, 해당 에러처리내에서 출현하는 에러에 관하여는 처리가 어렵다.


## 제너레이터
- 완전 실행 함수가 아닌 도중이 존재하는 함수
- **이터레이터**: 제너레이터 함수를 사용 할 수 있게끔 만든 객체
    - 이터러블: 순회가능한 이터레이터객체
    - [Symbol.iterator](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator)
        - 순회가 가능하며, 제너레이터함수 내에서는 yeild와의 조우가 함수의 도중을 의미하므로 함수스코프 내에서 상태값을 운용할 수 있다.
        - while true문과 같지만 yeild로 일시정지가 된다는 점?
- 제너레이터 함수 사용 과정
    1. 제너레이터 함수 ())을 선언
        ```
        function* name() {
            yield;
        }
        ```
    2. 해당 함수를 사용할 이터레이터를 선언
        ```
        const gen = name();
        ```
    3. 이터레이터에 실행 함수를 붙여 사용
        - ex) next(), return(), throw()...
    [참고](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)
- next() 하나의 실행은 yeild 하나의 실행을 의미한다.
    - next()실행 시 최초의 yeild를 실행한다.
- yeild는 해당 제너레이터의 도중의 return값을 의미하며, yeild값이 지정되지않은 경우 return;과도 같다.
- api 호출과 같은 비동기 함수를 제너레이터로 받은뒤, try catch로 해당 지점의 에러를 catch할 수 있다.
    ```
    // 비동기 호출 함수를 일단 받아두는 것
    try {
        // next()로 실행한뒤 일시 정지
        const it = yield func();

        console.log(it)

    } catch(e) {
        console.log('받은 뒤 문제가 있는것이라면?)
    }
    ```