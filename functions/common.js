function closureTest(value) {
    return function (){
        console.log(value)
    }
}



function consoleLog() {
    function tabsHandler(index) {
        return function tabClickEvent(event) {
            // 바깥 함수인 tabsHandler() 의 index 인자를 여기서 접근할 수 있다.
            console.log(index); // 탭을 클릭할 때 마다 해당 탭의 index 값을 표시
        };
    //    return console.log(index);
    }
    const test = function (index) {
        return () => console.log(index)
    }

    var tabs = document.querySelectorAll('#app');


    for ( let i = 0; i < tabs.length; i += 1) {
        tabs[i].onclick = test(i);
    }
}

export { consoleLog }
