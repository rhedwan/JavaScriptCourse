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

// Fetch and then
// const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json())
// .then(data => console.log(data))

// Top-level await
const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
const data = await posts.json()
console.log(data)
