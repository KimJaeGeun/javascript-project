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

function dropdown() {
    const comp = document.querySelector('#dropdown');
    const createMenuItem = statusList.map(status => createList(status.name)).join(' ')
    comp.innerHTML = `<div id="dropdownBox">
                        ${createMenuItem}
                      </div>`

    let btn = document.getElementsByClassName('btn_box')
    Array.from(btn).map(item => item.addEventListener("click", consoleText));
}

function createList(value) {
    return `<div id="dropdown-${value}" class="dropdown_item">${value}</div>`;
}

function consoleText(evt) {
    const el = evt.currentTarget
    console.log(el);
}

export default dropdown