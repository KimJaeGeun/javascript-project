import listRender from './src/components/List.js'

function app() {
    new listRender()
}

export default new app(document.querySelector('#app'))