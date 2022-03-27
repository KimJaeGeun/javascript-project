// module내 import의 경우 로컬 index.html은 js를 인식하지않아 에러표시됨
// TODO: value체크 함수 이용 코드 작성
import { isEmpty } from '../functions/checkValue.js';
import { STATUS_LIST } from '../mappings/const.js';


let state = {
    statusList: [{
            name: 'progress',
            selected: false,
        },
        {
            name: 'pending',
            selected: false,
        },
        {
            name: 'complite',
            selected: false,
        },
        {
            name: 'test',
            selected: false,
        },
        {
            name: 'bug',
            selected: false,
        },
    ],
}
const { statusList } = state;

function listRender(comp) {
    const testComp = document.querySelector('#list');
    console.log(testComp)
    testComp.innerHTML = statusList.map(status => createList(status.name)).join(' ')

    let btn = document.getElementsByClassName('btn_box')
    Array.from(btn).map(item => item.addEventListener("click", changeStutas));
};

function createList(value) {
    return `<div id="${value}" class="btn_box">${value}</div>`;
}

function changeStutas(evt) {
    const el = evt.currentTarget
    const selectedTarget = evt.currentTarget.id
    let selectedStatus = (selected) => statusList.filter(item => item.name === selected).selected = true;

    if (!isEmpty(el)) {
        let toggleColor = (color) => el.classList.toggle(color);

        selectedStatus(selectedTarget);
        switch (selectedTarget) {
            case STATUS_LIST.PROGRESS.NAME:
                toggleColor(STATUS_LIST.PROGRESS.COLOR);
                break;
            case STATUS_LIST.PENDING.NAME:
                toggleColor(STATUS_LIST.PENDING.COLOR);
                break;
            case STATUS_LIST.COMPLITE.NAME:
                toggleColor(STATUS_LIST.COMPLITE.COLOR);
                break;
            case STATUS_LIST.TEST.NAME:
                toggleColor(STATUS_LIST.TEST.COLOR);
                break;
            case STATUS_LIST.BUG.NAME:
                toggleColor(STATUS_LIST.BUG.COLOR);
                break;
        }
    }
}
export default listRender