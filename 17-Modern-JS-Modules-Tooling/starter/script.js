// Importing module
// import {addToCart, totalPrice as price, tq} from './shopppingCart.js';
// addToCart('breads', 5) ;
// console.log(price, tq) ;

console.log('Importing module') ;
// console.log(shippingCost) ;

import *  as ShoppingCart from './shopppingCart.js';

ShoppingCart.addToCart('breads', 5) ;