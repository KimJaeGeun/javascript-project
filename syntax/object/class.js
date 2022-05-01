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

// class를 이용하여 어느 특정 컴포넌트를 작성하려 한다면, defult컴포넌트 작성후 props에 따른 분기처리로 만들면 될듯 하다.
// class로는 default 함수등을 작성할때 사용 할듯

export { delegateObj }