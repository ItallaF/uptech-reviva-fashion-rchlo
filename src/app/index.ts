import { product__image, product__stock, product__tamanho } from "./models/monta-estoque.js";


const product__in__stock: product__stock[] = 
    JSON.parse(localStorage.getItem('produtos') || '');

    
    const displays__product = document.querySelectorAll(".produto__lista__conteudo");
    
    function create__div(product__list: Element){
        for (let counter = 0; counter < 4; counter++) {
            const list__displays__product = document.createElement("div");
            list__displays__product.classList.add("product");
            list__displays__product.setAttribute("id", "list__products")
            product__list.appendChild(list__displays__product)
        }
    }
    displays__product.forEach(item => create__div(item))
    
    const product = document.querySelectorAll("#list__products")
    product__in__stock.forEach((value, index) => {
        if ( value.quantidade_disponiveis > 0) {
            get__product(product[index], value.nome, value.preco, value.tamanhos_disponiveis, value.quantidade_disponiveis, value.imagens, index);
        }
    });


    function get__product(local: Element, nome: string, preco: number, tamanhos_disponiveis: product__tamanho[], quantidade_disponiveis: number, imagens: product__image[], index: number) {
       const product__local = local;
        
        
        const product__link__image = document.createElement("a");
        product__link__image.classList.add("product__pagina__link");
        product__link__image.setAttribute("href", "detalhes.html");
        product__local.appendChild(product__link__image);
    
        const product__image = document.createElement("img");
        product__image.classList.add("produto__lista__imagem__tamanhos");
        product__image.setAttribute("src", imagens[0].url.toString());
        product__image.setAttribute("alt", imagens[0].descricao);
        product__link__image.appendChild(product__image);
    
        const product__size = document.createElement("div")
        product__size.classList.add("produto__lista__imagem__botao")
        product__local.appendChild(product__size);

        for(let counter = 0; counter < 3; counter++){
            const size__buttonP = document.createElement("button");
            size__buttonP.classList.add("produto__lista__imagem__botao__tamanho");
            size__buttonP.setAttribute("type", "radio");
            size__buttonP.setAttribute("id", `tamanho-p-${index++}`);
            size__buttonP.setAttribute("name", `tamanhos_modelo-${index++}`);
            size__buttonP.innerText = `${tamanhos_disponiveis[counter]}`;
            product__size.appendChild(size__buttonP);
        }
    
       
        const name__product = document.createElement("div")
        name__product.classList.add("produto__lista__texto")
        name__product.innerText = nome
        product__local.appendChild(name__product);
       
        const product__price = document.createElement("div")
        product__price.classList.add("produto__lista__preco")
        product__price.innerText = `R$ ${preco.toFixed(2)}`
        product__local.appendChild(product__price);
    
        const product__button__bag = document.createElement("div")
        product__button__bag.classList.add("produto__lista__botao")
        product__local.appendChild(product__button__bag);
       
        const button__bag = document.createElement("button")
        button__bag.classList.add("produto__lista__botao__sacola")
        button__bag.innerText = "POR NA SACOLA"
        product__button__bag.appendChild(button__bag);
       
        const button__bag__icon = document.createElement("div")
        button__bag__icon.classList.add("produto__lista__botao__svg")
        button__bag.appendChild(button__bag__icon);

    }