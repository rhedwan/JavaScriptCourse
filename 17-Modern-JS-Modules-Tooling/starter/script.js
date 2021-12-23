// Importing module
// import {addToCart, totalPrice as price, tq} from './shopppingCart.js';
// addToCart('breads', 5) ;
// console.log(price, tq) ;

console.log('Importing module') ;
// console.log(shippingCost) ;

// import *  as ShoppingCart from './shopppingCart.js';

// ShoppingCart.addToCart('breads', 5) ;
// console.log(ShoppingCart.totalPrice)

// import add, {addToCart, totalPrice as price, tq} from './shopppingCart.js';
// console.log(price);

import add, {cart} from './shopppingCart.js';
add('pizza', 2) ;
add('bread', 2) ;
add('apples', 2) ;

console.log(cart) ;