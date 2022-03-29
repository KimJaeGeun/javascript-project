let state = {
    statusList: [{
            name: 'category',
            selected: false,
        },
        {
            name: 'title',
            selected: false,
        },
        {
            name: 'user',
            selected: false,
        },
    ],
}
const { statusList } = state;

function dropdown() {
    const comp = document.querySelector('#dropdown');
    const createMenuItem = statusList.map(status => createList(status.name)).join(' ')
    comp.innerHTML = `<select id="dropdownBox" name="cars">
                        ${createMenuItem}
                    </select>`
}

function createList(value) {
    return `<option id="dropdown-${value} class="dropdown_item" value="${value}">${value}</option>`;
}

export default dropdown