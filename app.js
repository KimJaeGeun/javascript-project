import dropdown from './src/components/Dropdown.js'
import listRender from './src/components/List.js'


function app() {
    new listRender();
    new dropdown();
}

export default new app(document.querySelector('#app'))