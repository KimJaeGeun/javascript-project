// value의 크기만큼 중복없이 육안으로 구분 가능한 색상배열 만들기
/**
 * getRandmomColor(value)를 다른위치에서 호출하여 사용할때
 * getRandmomColor(value)의 스코프에 접근 가능하게끔하는 것이 스코프이다(이 경우 매개변수가 외부인자로 작용)
 * */
function getRandmomColor(value) {
    let colorList = [];

    const initColorList = [
        '#FF0000', // red에서 17씩-, 118 <= x (8) parseInt(startNum / i) (i < 17)
        '#FF6600', // red에서 17씩-, 118 <= x (8)
        '#FFFF00', // red에서 17씩-, 118 <= x (8)
        '#00FF00', // blue에서 30씩 +, 255<= x (8)
        '#0000FF', // red에서 30씩 +, 118 <= x (8)
    ]
    const calColor = (color, changeVal) => {
        (parseInt(color, 16) + changeVal).toString(16)
    }

    // 초기 색상값안에서 결정
    if (value <= initColorList.length) {
        for (let i = 0; i < value; i+=1) {
            colorList.push(`#${initColorList[i]}`)
        }
    } else {
        for (let i = 0; i < value; i+=1) {
            if (i <= initColorList.length) {
                colorList.push(initColorList[i])
            } else {
                let initColorNum1 = null;
                let initColorNum2 = null;

                let getColorArray = i % initColorList.length
                let pushColor = null;

                let r = null;
                let g = null;
                let b = null;

                initColorNum = ((i % initColorList.length) > 3) ? initColorNum2 = 30 : initColorNum1 = 17;

                switch(getColorArray) {
                    case 3: {}
                        break;
                    case 4: {}
                        break;
                    default: {
                        r = calColor(initColorList[getColorArray].substring(0,1), -initColorNum1);
                        g = initColorList[getColorArray].substring(2,3);
                        b = initColorList[getColorArray].substring(4,5);
                    }

                }
                pushColor = `#${r}${g}${b}`

                colorList.push(pushColor)
            }
        }
    }

    return colorList;
}

export default getRandmomColor