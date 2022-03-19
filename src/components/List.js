const list = document.querySelector('#list');

let state = {
    statusList: ['Progress', 'pending', 'complite', 'test', 'bug'],
    btnColor: ['blue', 'grey', 'green', 'blue', 'red']
}

const render = () => {
        const { statusList } = state;
        list.innerHTML = `
    <ul>
        ${ statusList.map( (status, index) =>  `
            <li class="list-item">
                <button type="button" id="${btnColor[index]}" class="btn">${status}</button>
            </li>
        ` ) }
    </ul>
  `;
//   document.querySelector('#append').addEventListener('click', () => {
//     setState({ items: [ ...items, `item${items.length + 1}` ] })
//   })
}

// const setState = (newState) => {
//   state = { ...state, ...newState };
//   render();
// }

export { render }