import '../scss/styles.scss';

import { createCheckoutForm, createElement, createProductCard, updateProductPrice } from './helpers/domHelpers.js';
import {API_CATEGORIES_LIST, API_PRODUCTS_BY_CATEGORY_ID, API_ORDERS_LIST} from './urls.js';

let productsArr = [];
let currentProduct = {};

const sendOrder = () => {
    const customerName = document.querySelector('.client_name').value;
    const topping = document.querySelector('input[name="toppings"]:checked').value;
    const orderName = document.querySelector('.orderName').textContent;
    const price = document.querySelector('.priceOrder').textContent;
    const size = document.querySelector('input[name="size"]:checked').value;

    if(!customerName.length) {
        console.log("Fill in all the data!!!");
        return;
    }

    const order = {
        name: orderName,
        price: price,
        size: size,
        topping: topping,
        customer: customerName
    }

    fetch(API_ORDERS_LIST, {
      method: 'POST',
      body: JSON.stringify({ order }),
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(response => console.log(response));
}

const showOrder = () => {
    fetch(API_ORDERS_LIST)
    .then(res => res.json())
    .then(response => console.log(response));
}

class Hamburger{
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
    }

    static getOrderSize() {
        return document.querySelector('input[name="size"]:checked').value;
    }

    static getOrderTopping() {
        return document.querySelector('input[name="toppings"]:checked').value;
    }

    calculatePrice() {
        const topping = currentProduct.available_toppings.find(topping => topping.name === this.stuffing);
        let updatedPrice;

        if (this.size === 'big' && topping) {
        updatedPrice = currentProduct.price * 1.2 + topping.price;
        } else if(this.size === 'small' && topping) {
        updatedPrice = currentProduct.price + topping.price;
        }

        currentProduct.updatedPrice = updatedPrice;
        return currentProduct.updatedPrice;
    }
}

const changePrice = () => {
  const hamburger = new Hamburger(Hamburger.getOrderSize(), Hamburger.getOrderTopping());
  updateProductPrice(hamburger.calculatePrice());
}

const clickBuyHandler = function(event) {
    const productId = event.target.getAttribute('data-product-id');
    currentProduct = productsArr.find(product => product.id === productId);
    currentProduct.updatedPrice = currentProduct.price;
    createCheckoutForm(currentProduct, sendOrder, showOrder, changePrice);
}

const menuItemClickHandler = function(event) {
  const currentId = event.target.getAttribute('data-menu-item');

  fetch(API_PRODUCTS_BY_CATEGORY_ID.replace(':category', currentId))
    .then(res => res.json())
    .then(products => {
      productsArr = products;
      document.querySelector('#content').innerHTML = '';
      products.forEach(product => createProductCard(product, clickBuyHandler));
    });
}

// onload:
fetch(API_CATEGORIES_LIST)
  .then(res => res.json())
  .then(categories => {

    for(let category of categories) {
      createElement(
        'li',
        category.name, 
        {
          'data-menu-item': category.id,
          className: "li-header"
        },
        {
          click: menuItemClickHandler
        },
        '#menu ul'
      );
    }
  })
