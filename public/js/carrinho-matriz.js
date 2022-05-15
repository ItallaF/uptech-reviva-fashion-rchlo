const carrinho = [
    ['Calça Jeans Masculina', 3, 109.89],
    ['Camiseta Básica Feminina', 2, 19.90],
    ['Boné Unissex', 1, 25.00],
    ['Saia Feminina', 1, 35.00],
    ['Calça Jeans Feminina', 1, 150.00]
  ]


var totalCompra = 0;
for(let indice = 0; indice < carrinho.length; indice++){
    for(let indiceConteudo = 0; indiceConteudo < carrinho[indice][1]; indiceConteudo++){
        if(carrinho[indice][1] >= 2){
          (carrinho[indice][2] * 0.05) - carrinho[indice][2];
        }
        else if (carrinho[indice][0] === 'Calça Jeans Masculina' || carrinho[indice][0] === 'Calça Jeans Feminina'){
          (carrinho[indice][2] * 0.015) + carrinho[indice][2];
        }
        totalCompra += carrinho[indice][2];
    }
}


if (totalCompra > 500){
  totalCompra = totalCompra - 50.00;
}
console.log(`Os produtos escolhidos são : ${carrinho} e o total da compra será ${totalCompra}`)
/*AINDA SEM TERMINAR*/