const carrinho = [39.90, 75.99, 24, 12, 109.99, 83.99]

let taxados = carrinho.filter((_) => _ > 75)

console.log(`Valores dos produtos que serao taxados: ${taxados}`)

let total_taxados = taxados.map(function(taxados){
    return (taxados * 0.07) + taxados;
})
.reduce((acum, atual) => atual + acum, 0)

console.log(`Valores dos produtos já taxados: ${total_taxados}`)

const sem_taxa = carrinho.filter((_) => _ < 75)
.reduce((acum, atual) => atual + acum, 0)

const tota_compra_taxada = total_taxados + sem_taxa

console.log(`Total da compra: ${tota_compra_taxada }`)