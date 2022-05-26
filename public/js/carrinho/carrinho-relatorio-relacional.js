const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];
 
function prduto(nomeProduto){

    var produtoDescricao  = [];

    produtos.filter((_) => produtos.includes(nomeProduto))
    .map((nomeProduto, indiceAtual) => {
        if(!produtoDescricao.includes(nomeProduto) && produtoDescricao.includes(nomeProduto, indiceAtual + 1)){
            produtoDescricao.push(nomeProduto);
            return nomeProduto;
        }
    })
    return nomeProduto; 
}

function contaProduto(nomeProduto){

    var contador = 0;

    for(indice = 0; indice < produtos.length; indice++){
        if(produtos[indice] === nomeProduto){
            contador ++;
        }
    }
    return contador ++;
}

function valoresProduto(nomeProduto){

    var valorProdutoItem  = [];

    precos.filter((_, indice) => produtos[indice].includes(nomeProduto))
    .map((valorItem, indiceAtual) => {
        if(!valorProdutoItem.includes(valorItem) || valorProdutoItem.includes(valorItem, indiceAtual + 1)){
            valorProdutoItem.push(valorItem);
            return valorProdutoItem;
        }
    })
    return valorProdutoItem;
}

console.log('produtos: ' + prduto('Camiseta Básica ') + 'Quantidade: ' + contaProduto('Camiseta Básica') + ' Valor Unitário: ' + valoresProduto('Camiseta Básica'))

console.log('produtos: ' + prduto('Camiseta Polo ') + 'Quantidade: ' + contaProduto('Camiseta Polo') + ' Valor Unitário: ' + valoresProduto('Camiseta Polo'))

console.log('produtos: ' + prduto('Bermuda Moletom ') + 'Quantidade: ' + contaProduto('Bermuda Moletom') + ' Valor Unitário: ' + valoresProduto('Bermuda Moletom'))

console.log('produtos: ' + prduto('Calça Jeans Masculina') + 'Quantidade: ' + contaProduto('Calça Jeans Masculina') + ' Valor Unitário: ' + valoresProduto('Calça Jeans Masculina'))

console.log('produtos: ' + prduto('Calça Jeans Feminina ') + 'Quantidade: ' + contaProduto('Calça Jeans Feminina') + ' Valor Unitário: ' + valoresProduto('Calça Jeans Feminina'))
