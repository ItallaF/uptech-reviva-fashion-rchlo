const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

var contadorCamisetaB = 0;
var contadorCamisetaP = 0;
var bermudaM = 0;
var calcaM = 0;
var calcaF = 0;

for(indice = 0; indice < produtos.length; indice++){
    if(produtos[indice] === 'Camiseta Básica'){
        contadorCamisetaB ++;
    }
    else if(produtos[indice] === 'Camiseta Polo'){
        contadorCamisetaP ++;
    }
    else if(produtos[indice] === 'Bermuda Moletom'){
        bermudaM ++;
    }
    else if(produtos[indice] === 'Calça Jeans Masculina'){
        calcaM ++;
    }
    else if(produtos[indice] === 'Calça Jeans Feminina'){
        calcaF ++;
    }
}

var produtoDescricao  = [];

const descricao = produtos.map((nomeProduto, indiceAtual) => {
    if(!produtoDescricao.includes(nomeProduto) && produtos.includes(nomeProduto, indiceAtual + 1)){
        produtoDescricao.push(nomeProduto);
        return nomeProduto;
        
    }
    return nomeProduto;
})

produtoDescricao.splice(0,0, 'produtos:');
produtoDescricao.splice(2,0, 'Quantidade:',contadorCamisetaB, 'Valor Unitário:');

const valoresproduto = precos.filter((_, indice) => produtos[indice] === 'Camiseta Básica');

var valorProdutoItem  = [];
const valorProduto = valoresproduto.map((valorItem, indiceAtual) => {
    if(!valorProdutoItem.includes(valorItem) && valoresproduto.includes(valorItem, indiceAtual + 1)){
        valorProdutoItem.push(valorItem);
        return valorItem;
    }
    return valorItem;
})


produtoDescricao.splice(5,0, valorProdutoItem.toString(2).replace(".", ","));



const nomeProduto2 = produtos.filter((_, indice) => produtos[indice] === 'Camiseta Polo');
const valorProduto2 = precos.filter((_, indice) => produtos[indice] === 'Camiseta Polo');

produtoDescricao.splice(6,0, 'produtos:', nomeProduto2.toString(), 'Quantidade:',contadorCamisetaP, 'Valor Unitário:', valorProduto2.toString().replace(".", ","));

const nomeProduto3 = produtos.filter((_, indice) => produtos[indice] === 'Bermuda Moletom');
const valorProduto3 = precos.filter((_, indice) => produtos[indice] === 'Bermuda Moletom');

produtoDescricao.splice(12,0, 'produtos:', nomeProduto3.toString(), 'Quantidade:',bermudaM, 'Valor Unitário:', valorProduto3.toString().replace(".", ","));


const nomeProduto4 = produtos.filter((_, indice) => produtos[indice] === 'Calça Jeans Masculina');
const valorProduto4 = precos.filter((_, indice) => produtos[indice] === 'Calça Jeans Masculina');

produtoDescricao.splice(18,0, 'produtos:', nomeProduto4.toString(), 'Quantidade:',calcaM, 'Valor Unitário:', valorProduto4.toString().replace(".", ","));


const nomeProduto5 = produtos.filter((_, indice) => produtos[indice] === 'Calça Jeans Feminina');
const valorProduto5 = precos.filter((_, indice) => produtos[indice] === 'Calça Jeans Feminina');

produtoDescricao.splice(24,0, 'produtos:', nomeProduto5.toString(), 'Quantidade:',calcaF, 'Valor Unitário:', valorProduto5.toString().replace(".", ","));
console.log(produtoDescricao)