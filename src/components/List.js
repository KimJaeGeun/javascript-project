// module내 import의 경우 로컬 index.html은 js를 인식하지않아 에러표시됨
// TODO: value체크 함수 이용 코드 작성
import { isEmpty } from '../functions/checkValue.js'

// const list = document.querySelector('#list');

let state = {
    statusList: [{
            type: 'Progress',
            status: false,
            buttonColor: 'blue'
        },
        {
            type: 'pending',
            status: false,
            buttonColor: 'grey'
        },
        {
            type: 'complite',
            status: false,
            buttonColor: 'green'
        },
        {
            type: 'test',
            status: false,
            buttonColor: 'yellow'
        },
        {
            type: 'bug',
            status: false,
            buttonColor: 'red'
        },
    ],
}
const { statusList } = state;

function listRender(comp) {
    comp.innerHTML = `
                        <ul>
                            ${ statusList.map( status =>  createList(status.type) )}
                        </ul>
                    `;
    let btn = document.getElementsByClassName('btn')
    Array.from(btn).map(item => item.addEventListener("click", changeStutas));
}

function createList(value) {
    return `<li class="list-item" id="${value}">
                <button type="button" id="${value}" class="btn">${value}</button>
            </li>`;
}

function changeStutas(evt) {
    const el = evt.currentTarget
    const selectedTarget = evt.currentTarget.id
    let selectedStatus = (selected) => statusList.filter(item => item.type === selected).status = true;

    if (!isEmpty(el)) {
        selectedStatus(selectedTarget);
        switch (selectedTarget) {
            case 'Progress':
                el.classList.toggle('blue');
                break;
            case 'pending':
                el.classList.toggle('grey');
                break;
            case 'complite':
                el.classList.toggle('green');
                break;
            case 'test':
                el.classList.toggle('yellow');
                break;
            case 'bug':
                el.classList.toggle('red');
                break;
        }
    }
}
export default listRender