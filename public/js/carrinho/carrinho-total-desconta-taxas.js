const produtos = ['Camiseta Básica', 'Camiseta Polo', 'Bermuda Moletom', 'Calça Jeans Masculina', 'Camiseta Básica', 'Calça Jeans Feminina', 'Camiseta Básica'];

const precos = [29.90, 49.90, 35, 89.99, 29.90, 109.99, 29.90];

const calculosProdutosTotais = (valor, valor2) => valor + valor2;

const produtosDesconto10 = precos.filter((_, indice) => produtos[indice].includes('Camiseta'));

const total_desconto10 = produtosDesconto10.map(function(produtosDesconto10){
    return produtosDesconto10 * 0.9;
}).sort();

const valorDescontoAdicional = []

const descontoAdicional = total_desconto10.map(function(valorProduto, indice, array){
    if(valorProduto === array[indice-1] && !valorDescontoAdicional.includes(valorProduto)){
        valorDescontoAdicional.push(valorProduto);
        return valorProduto - (valorProduto * 0.05);
    }
    return valorProduto;
}).reduce(calculosProdutosTotais,0);

console.log(`Total de produtos com desconto: ${descontoAdicional}`);

const produtosTaxa = precos.filter((_, indice) => produtos[indice].includes('Jeans'));

const ProdutosTaxados = produtosTaxa.map(function(produtosTaxa){
    return (produtosTaxa + 3.99);
}).reduce(calculosProdutosTotais,0);

console.log(`Total de produtos taxados em 3,99: ${ProdutosTaxados}`);

const totalCarrinhoSemtaxaDesconto = precos.reduce(calculosProdutosTotais,0);

console.log(`Total do carrinho sem desconto e taxas: ${totalCarrinhoSemtaxaDesconto }`);

const totalValoreSeraoDescontados10 = produtosDesconto10.reduce(calculosProdutosTotais,0);

const totalValoreseraoTaxados = produtosTaxa.reduce(calculosProdutosTotais,0);

const totalCarrinho = totalCarrinhoSemtaxaDesconto - totalValoreSeraoDescontados10 + descontoAdicional - totalValoreseraoTaxados + ProdutosTaxados;

console.log(`Total do carrinho com descontos e taxas: ${totalCarrinho}`);