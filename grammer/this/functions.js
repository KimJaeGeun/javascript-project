function testThis() {
    const obj = {
        a: 10,
        b: function () {
            // 해당 함수 => b의 랙시컬 스코프는 obj의 {}다. 그러므로 this는 오브젝트 내부를 본다.
            return this
        }
    }
    // 엄격모드중 지정이 없다면 undefined를 반환한다.
    console.log(this)
    // 오브젝트 내장 함수 실행 && 랙시컬 스코프 보기
    console.log(obj.b())
}

function testThis2() {
    function getX () {
        return this.x;
    }
    var x = 100;

    (function () {
        // 'use strict'
        // 본 예제 함수는 비엄격 모드와 엄격모드의 구분으로 바인딩을 확인하려 했으나 ES6부터 모듈의 모드는 엄격모드이다.
        console.log(y)

        var y = 0;
    })();

}

function testThis3() {
    const module = {
        x: 42,
        getX: function() {
          return this.x;
        }
      };

      const unboundGetX = module.getX;
      console.log(unboundGetX()); // 이 시점에서 스코프는 전역이 되기에 undefined가 출력된다

      const boundGetX = unboundGetX.bind(module); // 스코프를 module내부로 지정 했기에 x값 42가출력
      console.log(boundGetX());
}

function testThis4() {
    function test() {
        console.log(this.a);
    }

    var obj = {a: 1};

    test.call(obj);
    // call()을 이용한 명시적 바인딩
}

function testThis5() {
    function test(val) {
        this.a = val
    }

    var obj = {a: 1};

    test.bind(obj);
    // this.a = 1

    new test('value');
    // this.a = 'value'
}

export { testThis, testThis2, testThis3, testThis4, testThis5 }