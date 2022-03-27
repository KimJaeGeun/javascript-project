import dropdown from '../components/Dropdown.js'

function serachBar() {
    const comp = document.querySelector('#serachBar');
    comp.innerHTML = `<div id="dropdown">
                        ${new dropdown()}
                      </div>`
}

export default serachBar