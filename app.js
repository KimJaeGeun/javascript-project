// import checkValue from './functions/checkValue.js';
import { consoleLog } from './functions/common.js'


function app() {
    const comp = document.querySelector('#app');
    // comp.innerHTML = `<h1>${checkValue('test value')}</h1>`;
    consoleLog();
}

export default new app()