

/*
import { product__image, product__stock, product__tamanho } from "./models/monta-estoque.js";

const product__in__stock: product__stock[] = 
    JSON.parse(localStorage.getItem('produtos') || '');

function render__product() {
  product__in__stock.forEach((value, index, array) => {
      receive__product(value.nome, value.preco, value.descricao, value.tamanhos_disponiveis, value.quantidade_disponiveis, value.imagens);
      product__subtotal(array);
  })
}
render__product();
function receive__product(nome: string, preco: number, descricoes: string, tamanhos_disponiveis: product__tamanho[], quantidade_disponiveis: number, imagens: { descricao: string; }[]) {

  const product__cart = document.querySelector(".minha__sacola");

  const product__cart__iten = document.createElement("section");
  product__cart__iten.classList.add("carrinho_produto");
  product__cart__iten.setAttribute("produto-carrinho", "");
  product__cart.appendChild(product__cart__iten);

}

function product__subtotal(array: product__stock[]) {
  throw new Error("Function not implemented.");
}
*/