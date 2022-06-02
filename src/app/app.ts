import { Control__Stock } from "./controls/control-stock.js";
import { Control__Index } from "./controls/control__index.js";
import {product__stock} from './models/monta-estoque.js';

const _stock: product__stock[] =
    JSON.parse(localStorage.getItem('produtos') || '');

const controller = new Control__Index();
const section = document.querySelector('.produto__lista');

if(section){
    
    section.addEventListener('submit', event => {
        event.preventDefault();
        
    })
}else {
    throw Error('Nãofoipossível iniciar a aplicação verifique se o for existe');
}

