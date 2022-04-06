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
    // 오브젝트 내장 함수 실행
    console.log(obj.b())
}

function testThis2() {
    const obj = {
        a: 10,
        b: {
            a: 45,
            b: function () {
                return this.a
            }
        }
    }
    // 랙시컬 스코프 보기
    console.log(obj.b.b())
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

export { testThis, testThis2, testThis3 }