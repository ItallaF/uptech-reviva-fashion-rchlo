import { Control__Stock } from "./controls/control-stock.js";
import { Control__Index } from "./controls/control__index.js";
const _stock = JSON.parse(localStorage.getItem('produtos') || '');
const controller = new Control__Stock();
const section = document.querySelector('.produto__lista');
if (section) {
    section.addEventListener('submit', event => {
        event.preventDefault();
    });
}
else {
    throw Error('Nãofoipossível iniciar a aplicação verifique se o for existe');
}
const product__list = new Control__Index;
console.log(product__list);
