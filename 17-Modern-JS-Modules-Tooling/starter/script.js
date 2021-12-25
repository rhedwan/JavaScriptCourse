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
// const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
// const data = await posts.json()
// console.log(data);
// console.log('Something') ;

const getLastPost = async function () {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await posts.json() ;
    console.log(data);
    return {
        title: data.at(-1).title, 
        text: data.at(-1).body
    }
};

// Calling an async function returns Promise
// const lastPost = await getLastPost() ;
// console.log(lastPost);

// Not very clean
// const lastPost = getLastPost() ;
// lastPost.then(last => console.log(last));


/* const shoppingCart2 = (function () {

    const cart = [] ;
    const shippingCost = 10 ;
    const totalPrice  = 257 ;
    const totalQuantity = 23 ;

    const addToCart = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} added to cart`) ;
    };

    const orderStock = function(product, quantity){
        cart.push({product, quantity});
        console.log(`${quantity} ${product} ordered from supplier`) ;
    };
    
    return {
        addToCart,
        cart,
        totalPrice,
        totalQuantity
    };

})();

shoppingCart2.addToCart('apple', 4);
shoppingCart2.addToCart('pizza', 4);
console.log(shoppingCart2);
console.log(shoppingCart2.shippingCost); */

// // Export 
// export.addToCart function (product, quantity){
//     cart.push({product, quantity});
//     console.log(`${quantity} ${product} added to cart`) ;
// };

// // Import 
// const {addToCart} = require('./shopppingCart.js');


// import 'core-js/stable';
import 'core-js/stable/array/from';
import 'core-js/stable/promise';