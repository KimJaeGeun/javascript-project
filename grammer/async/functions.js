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
		return Promise.all([x, y])
			// x, y값이 확정이 된 뒤
      		.then(function(values){
				  console.log(`x: ${values[0]} y: ${values[1]}`)
				// values[] => Promise.all([x, y])의 [x, y]배열
				return values[0] + values[1];
    	})
  	}

	function fetchX() {
		console.log()
		// console.log(setTimeout(function() {
		// 	return 10;
		// }, 0))
		return setTimeout(function() {
			return 10;
		}, 2000);
		// TODO: 이거 왜 값이 1나옴?
	}

	function fetchY() {
		return 20;
	}
	add(fetchX(), fetchY()).then( function(sum) {
		console.log(sum);
	})

}

export { asyncFunc, examPromise }
