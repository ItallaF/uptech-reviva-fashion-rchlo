export class Control__Stock {
    constructor() {
        this._stock = JSON.parse(localStorage.getItem('produtos') || '');
        /*camback(){
          return this._stock;
        }*/
    }
    add__product(product) {
        this._stock.push(product);
    }
    find(product) {
        return this._stock.find(product__storage => product__storage.id === product.id) || null;
    }
    remove__unit__product(product) {
        this._stock[product].quantidade_disponiveis--;
        localStorage.setItem('produtos', JSON.stringify(this._stock));
    }
    add__product__cart(product) {
        const perhaps__product = this.find(product);
        if (perhaps__product) {
            this._stock[product.id].quantidade_disponiveis++;
            localStorage.setItem('produtos', JSON.stringify(this._stock));
        }
    }
    list() {
        return this._stock;
    }
}
//private inventary = localStorage.setItem('product__stock.id', 'product__stock');
/*
estoque.map((chave__produto) => localStorage.setItem(chave__produto.id, JSON.stringify(chave__produto)))

const lista_botoes = document.querySelectorAll('.produto__lista__botao__sacola');


[...lista_botoes].map((value, index) => {
  value.addEventListener('click', (event) => {
    const produtos = JSON.parse(localStorage.getItem(estoque[index].id));
    if(produtos.quantidade_disponiveis <= 0){
      console.log('Produto Indiponível')
    } else {
      const quantidade_atual = produtos.quantidade_disponiveis - 1;
      estoque[index].quantidade_disponiveis = quantidade_atual;
      localStorage.setItem(estoque[index].id, JSON.stringify(estoque[index]))
    }
  })
})
*/ 
