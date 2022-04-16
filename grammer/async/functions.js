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

export { asyncFunc, examPromise, examMultiPromise }
