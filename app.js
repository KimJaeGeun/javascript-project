import checkValue from './functions/checkValue.js';



function app() {
    const comp = document.querySelector('#app');
    comp.innerHTML = `<h1>${checkValue('test value')}</h1>`;
}

export default new app()