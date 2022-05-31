const product__in__stock = JSON.parse(localStorage.getItem('produtos') || '');
const section = document.getElementById(".produto__lista__conteudo");
const cartProduct = document.createElement("div");
const productRemove = document.createElement("div");
const productImage = document.createElement("div");
const quantitySelector = document.createElement("div");
const productDetails = document.createElement("div");
const productPrice = document.createElement("div");
const productOptions = document.createElement("div");
const colorOption = document.createElement("div");
const sizeOption = document.createElement("div");
const productTitle = document.createElement("div");
cartProduct.classList.add("cart__product");
productRemove.classList.add("product__remove");
productImage.classList.add("cart__product-image");
quantitySelector.classList.add("quantity-selector");
productDetails.classList.add("cart__product-details");
productPrice.classList.add("cart__product-price");
productOptions.classList.add("cart__product-options");
colorOption.classList.add("cart__product-option");
sizeOption.classList.add("cart__product-option");
productTitle.classList.add("cart__product-title");
const closeIcon = document.createElement("span");
const removeIcon = document.createElement("span");
const quantity = document.createElement("span");
const addIcon = document.createElement("span");
const colorOptionName = document.createElement("span");
const colorOptionValue = document.createElement("span");
const sizeOptionName = document.createElement("span");
const sizeOptionValue = document.createElement("span");
closeIcon.classList.add("close-icon");
removeIcon.classList.add("remove-icon");
quantity.classList.add("quantity");
addIcon.classList.add("add-icon");
colorOptionName.classList.add("option__name");
sizeOptionName.classList.add("option__name");
colorOptionValue.classList.add("option__value");
sizeOptionValue.classList.add("option__value");
const image = document.createElement("img");
image.classList.add("cart__product-image");
image.src = "https://static.riachuelo.com.br/RCHLO/11535253001/portrait/5500a4b3f1969caace4af54076a086be83591913.jpg?imwidth=700";
export class Return__product {
}
/*
private _product__stock: product__stock[] =
    JSON.parse(localStorage.getItem('produtos') || '');

    acess__product(product: product__stock){
        const prodtuct__unit =
    }
    return__image(product: product__stock){
        return this._product__stock.find(product__storage =>
            product__storage.id === product.id) || null;
    }

*/ 
