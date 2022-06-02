"use strict";
/*
import { product__stock } from './models/monta-estoque.js';

const product__local__stock: product__stock[] = JSON.parse(localStorage.getItem('produtos') || '') ||
    localStorage.setItem("produtos", JSON.stringify(product__in__stock));

const button__bag = document.querySelectorAll('.produto__lista__botao__sacola');

button__bag.forEach((button__purchase, indice) => {
    button__purchase.onclick = () => atualizaStock(indice ++, product__local__stock, button__purchase);
})

function reduceStock(product: { quantidade_disponivel: number; nome: any; }, button__purchase: any) {
    if (product.quantidade_disponivel > 0) {
        product.quantidade_disponivel--;
        alert(`Adicionado na sacola!`);
    } else {
        alert(`${product.nome} sem Stock!`);
    }
}

function atualizaStock(id: number, products: product__stock[], button__purchase: Element) {
    const productsTemp = [...products];

    const product__iten = productsTemp.find(product => product.id === id);

    reduceStock(products, button__purchase);

    const capturarIndice = product__local__stock.findIndex(elemento => elemento.id === products.id);
    product__local__stock[capturarIndice] = products;

    localStorage.setItem("produtos", JSON.stringify(product__local__stock));

}*/
