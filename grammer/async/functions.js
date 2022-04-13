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

export { asyncFunc }
