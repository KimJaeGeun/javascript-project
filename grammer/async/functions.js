// 비동기처리 예제
function asyncFunc() {
    // function callAfter() {
    //     setTimeout(console.log('3초만~'), 10000)
    //   }

    //   async function asyncCall() {
    //     console.log('start');
    //     await callAfter();
    //     setTimeout(console.log('3초만~'), 10000)
    //     console.log('end');
    //   }

    //   asyncCall();

    //
    function resolveAfter2Seconds() {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('resolved');
          }, 2000);
        });
      }

      async function asyncCall() {
        console.log('calling');
        const result = await resolveAfter2Seconds();
        console.log(result);
        // expected output: "resolved"
      }

      asyncCall();

}

function examPromise() {
	function add(x, y) {
    // 아직x, y는 무엇인지 모른다.
		return Promise.all([x, y])
			// x, y값이 확정이 된 뒤
      		.then(function(values){
				  console.log(`x: ${values[0]} y: ${values[1]}`)
				// values[] => Promise.all([x, y])의 [x, y]배열
				return values[0] + values[1];
    	})
  	}

	function fetchX() {
    let result = 0;
		setTimeout(function() {
			result = 10;
		}, 2000);
    return result
		// setTimeout()의 반환값은 setTimeoutID이다. 해당 setTimeout()를 멈출때 사용 가능
	}

	function fetchY() {
		return 20;
	}
	add(fetchX(), fetchY()).then( function(sum) {
		console.log(sum);
	})

}

function examMultiPromise() {
  // promise호출 자체는 동기식이고 이후 실행이 비동기식인것이다
  // 다중 promise의 스케쥴을 코드의 순서등에 의존하지말 것

  let rejectPromise = Promise.reject('실패함 ㅅㄱ');

  rejectPromise.then((success) => {
    // 호출되지않음 => reject된 상태로 받은것이라...
    console.log(success)
  }).catch((error) => {
    console.log(error)
  });

  let resolvePromise = Promise.resolve('성공함 ㅅㄱ');

  resolvePromise.then((success) => {
    console.log(success)
  }).catch((error) => {
    // 호출되지않음 => resolve된 상태로 받은것이라...
    console.log(error)
  });

  let testPromise = new Promise((resolve, reject) => {

    // resolve('success'); // 뒤를 실행하나 then으로 넘어가게 됨
    // console.log('나도 있어!')
    // reject('fail'); // 뒤를 실행하나 catch로 넘어가게 됨
    // console.log('나도 있어!')
  })

  testPromise.then((s) => {
    console.log(s)
  }).catch((e) => {
    console.log(e)
  })

}

function examErrorPromise() {
  function errorHandle(e) {
    console.log(e);
    // 프로미스 내부에서 발생한 에러 표시
    // 이 곳에서 일어나는 에러처리는?
  }

  let errorPromise = Promise.resolve(12345);

  errorPromise.then(
    function fulfilled(msg) {
      console.log(msg.toLowerCase());
    }
  ).catch(errorHandle);

}
function examGenerrator() {
  function examSeqGenerrator() {
    // 제너레이터 함수
    function* indexPlus(){
      let index = 0;
      console.log('제너레이터 함수애오')

      // next 한번에 yield한번씩
      // 제네레이터 함수의 yeild는 trturn의 역할을 한다
      yield index +=1;
      yield index +=1;
      yield index +=1;
  }
    console.log(indexPlus()) // '제너레이터 함수애오'의 출력만 가능

    // 제너레이터 함수를 사용가능하게끔 하는 이터레이터 객체(yield)
    const gen = indexPlus();
    console.log(gen.next().value) // 1
    console.log(gen.next().value) // 2
    console.log(gen.next().value) // 3
    console.log(gen.next().value) // undefined
  }

  function examInterGenerrator() {
    let a = 1;
    let b = 2;

    function* aPlus() {
      a++;
      yield;
      b = b * a;
      a = (yield b) + 3;
    }

    function* bMinus() {
      b--;
      yield;
      a = (yield 8) + b;
      b = (yield 2) * a;
    }

    function step(gen) {
      const it = gen();
      let last;

      return function() {
        last = it.next(last).value;
      }
    }

    const s1 = step( aPlus );
    const s2 = step( bMinus );
    const test = bMinus();

    console.log(test.next().value);
    console.log(test.next().value);
    console.log(test.next().value);
    console.log(test.next().value);
    console.log(test.next().value);
    console.log(test.next().value);
    s2();
    // s1();
    // s1();
    // s1();

    // s2();
    // s2();
    // s2();
    // s2();

    console.log(a);
    console.log(b);
  }

  function examIterable (){
    const a = [1, 3, 5, 7,9];
    const it = a[Symbol.iterator]();

    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
    console.log(it.next().value);
  }

  function examIterable2 (){
    const a = [1, 3, 5, 7, 9];
    const it = a[Symbol.iterator]();

    for (let i of it) {
        console.log(i)
        // it의 크키만큼 돌겠지?
    }

    // 함수스코프내 상태값을 사용하는 경우
    function* testGen() {
      let val;

      try {
        // 무한순회
        while (true) {
          if (val === undefined) {
            val = 1;
          } else {
            val = (3*val);
          }
          yield val;
        }
      } finally {
        console.log('루프 끝!')
      }
    }

    const it2 = testGen();

    for (let i of it2) {
      // 무힌대로 돈다. it2는 무한을 순회중이기에
      console.log(i)

      if (i > 500) {
        // 바로 final로 보내버린다.
        it2.return();
      }
    }
  }
}


export {
  asyncFunc,
  examPromise,
  examMultiPromise,
  examErrorPromise,
  examGenerrator
}
