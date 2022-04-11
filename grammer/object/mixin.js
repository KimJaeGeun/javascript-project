// 명시적 mixin
function mixin(souceObj, targetObj) {
    // souceObj내 프로퍼티중 targetObj내에 부재한 것이 있다면 삽입후 targetObj을 반환
    for (let key in souceObj) {
        if (!(key in targetObj)) {
            targetObj[key] = souceObj[key]
        }
    }
    return targetObj
}

const Horse = {
    heart: 1,

    ready: function() {
        console.log('달릴준비!')
    },

    run:  function() {
        this.ready();
        console.log('슈바바바박')
    }
}

const ninja = mixin(Horse, {
    leg: 2,
    run: function() {
        console.log(this.heart);
        // 상대적 다형성을 인정하지않는 경우(ES6부턴 아님) 사용하는 명시적 다형성
        // Horse의 run함수를 실행, this는 mixin(ninja의 컨텍스트임으로)
        // call(this)를 사용하지 않을 경우 this는 Horse를 가르킨다.
        // 각 객체내 중복된 프로퍼티가 있는 경우에서의 필요한 다형성 설정
        Horse.run.call(this);
        console.log(this.leg + '개의 다리로 달려버린단다.')
    }
})
// '달릴준비!'
// '슈바바바박'
// '2개의 다리로 달려버린단다.'


// 기생적 mixin
// 새로운 객체에 mixin한뒤 새로이 인스턴스를 선언하여 사용
function sunbi() {
    const saram = new Horse();
    saram.heart = 1;
    saram.run = function () {
        saram.run();
        console.log('선비는 안뛴...다다다닥');
    }
}

const testSunbi = new sunbi();

// 암시적 mixin
const me = {
    run: function () {
        //
        Horse.run.call(this);
    }
}

export { ninja, testSunbi }