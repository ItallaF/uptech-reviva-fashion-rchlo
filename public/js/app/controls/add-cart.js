export class Cart {
    constructor() {
        this.product__items = [];
    }
    find(product) {
        return this.product__items.find(product__items__unit => product__items__unit.product__unit.id === product.id);
    }
    add__product(product) {
        const perhaps__product = this.find(product);
        if (perhaps__product) {
            this.add__product(product);
        }
        else {
            this.product__items.push({ product__unit: product, quantity: 1 });
        }
    }
    remove__product(product) {
        const perhaps__product = this.find(product);
        if (perhaps__product) {
            perhaps__product.quantity--;
        }
    }
    add__product__unit(product) {
        const perhaps__product = this.find(product);
        if (perhaps__product) {
            perhaps__product.quantity++;
        }
    }
    getTotal__cart() {
        return this.product__items.reduce((total, product__items__unit) => {
            return total + product__items__unit.quantity * product__items__unit.product__unit.preco;
        }, 0);
    }
}
