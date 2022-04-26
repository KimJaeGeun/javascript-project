// OLOO스타일의 위임
function delegateObj() {
    const saram = {
        eat: function(food) {
            this.food = food;
        },
        talk: function(lang) {
            this.lang = lang;
        }
    }

    const korean = Object.create(saram);

    korean.eatFood = function(food) {
        this.eat(food);
    }
    korean.talkLoud = function(lang) {
        this.talk(lang)
    }

    korean.eatFood('라면');
    korean.eatFood('김밥'); // 새로운 프로퍼티를 생산하는 것이 아닌 saram에서 지정한 food를 지정하는 것. 라면 => 라면2로 재지정

    korean.talkLoud('경상도 사투리')

    console.log(korean)
    console.log(`${korean.food}먹고, ${korean.lang}로 말한다.`)
    // saram객체를 korean에게 위임한, 객체에서 객체를 위임한 OLOO스타일이다.
}

//TODO: ES6도입의 클래 사용
//TODO: OLOO스타일의 객체형 함수 작성

export { delegateObj }