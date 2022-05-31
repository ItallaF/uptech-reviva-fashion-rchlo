import { product__stock } from "../models/monta-estoque.js";


interface cart__product{
    product__unit: product__stock,
    quantity: number
}

export class Cart {
    private product__items: cart__product[] = [];

    private find(product: product__stock){
        return this.product__items.find(product__items__unit => product__items__unit.product__unit.id === product.id)
    }

    add__product(product: product__stock){
        const perhaps__product = this.find(product);
        if(perhaps__product){
            this.add__product(product);
        }else {
            this.product__items.push({product__unit: product, quantity: 1});
        }
    }

    remove__product(product: product__stock){
        const perhaps__product = this.find(product);
        if(perhaps__product){
            perhaps__product.quantity--;
        }
    }

    add__product__unit(product: product__stock){
        const perhaps__product = this.find(product);
        if(perhaps__product){
            perhaps__product.quantity++;
        }
    }

    getTotal__cart(){
        return this.product__items.reduce((total, product__items__unit) => {
            return total + product__items__unit.quantity * product__items__unit.product__unit.preco;
        },0)
    }
}