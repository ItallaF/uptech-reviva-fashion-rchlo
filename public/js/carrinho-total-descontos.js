const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];

console.log(carrinho)

const valor_desconto = [];

const carrinho_ordenado = carrinho.sort()
.map(function(valor, indice, array){
    if(valor === array[indice-1] && !valor_desconto.includes(valor)){
        valor_desconto.push(valor)
        return valor * 0.9
    }
    return valor
})
.reduce((somatorio, valor_atual) => somatorio + valor_atual , 0)

console.log(`Total da compra com descontos: ${carrinho_ordenado}`)




/*
Aqui é apenas para mostrar como tinha feito antes

const carrinho = [25.99, 27.83, 35.80, 35.80, 35.80, 44, 53.90, 25.99];

let total_descontos = carrinho.filter(function(produto1, produto2) {
    return carrinho.indexOf(produto1) != (produto2);
});

console.log(total_descontos);

let calculo_desconto = total_descontos.filter(function(produto1, produto2) {
    return total_descontos.indexOf(produto1) === (produto2);
})

console.log(calculo_desconto);

let calculo_desconto_final = calculo_desconto.map(function(calculo_desconto){
    return calculo_desconto - (calculo_desconto * 0.1);
})
console.log(calculo_desconto_final);

const totalProdutosDescontos = calculo_desconto_final.reduce((acum, atual) => atual + acum);

console.log(totalProdutosDescontos);

const totalProdutosretirados = calculo_desconto.reduce((acum, atual) => atual + acum);

console.log(totalProdutosretirados);

const totalCarrinho = carrinho.reduce((acum, atual) => acum + atual);
console.log(totalCarrinho);

const totalCarrinhoSemProdutosParaDesconto = totalCarrinho - totalProdutosretirados;
console.log(totalCarrinhoSemProdutosParaDesconto);

const totaCompraComDesconto = totalCarrinhoSemProdutosParaDesconto + totalProdutosDescontos;
console.log(totaCompraComDesconto);*/