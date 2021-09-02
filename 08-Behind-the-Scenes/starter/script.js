'use strict';
/* 
function calcAge(birthYear) {
    const age = 2037 - birthYear ;
    // console.log(firstName) ; 

    function printAge() {
        let output = `${firstName}, You are ${age}, born in ${birthYear}` ;
        console.log(output);

        if (birthYear >= 1981 && birthYear <= 1996){
            var millenial = true ;
            // Creating NEW variable with same name as the outer scope's variable
            const firstName = 'Uche' ;
            
            // Reassigning outer scope's varibale
            output = "NEW OUTPUT"

            const str  = `Oh, and you're a millenial, ${firstName}` ;
            console.log(str);

            function add(a, b) {
                return a + b
            }


        }
        // console.log(str);
        // console.log(add(2, 3)) 

        console.log(output);

    }

    printAge() ;
    return age ;
}

const firstName = 'Ridwan' ;
calcAge(1991) ;

// console.log(age);
// printAge() */


// HOISTING with Variable
// console.log(me);

// console.log(job);
// console.log(year);

/* var me = 'Ridwan' ;
let job =  'Instructor' ;
const year = 1991 ;


// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b ;
}

const addExpr = function (a, b) {
    return a + b ;
}

var addArrow = (a, b) => a + b ;

// Example

console.log(numProduct);
if (!numProduct) deleteShoppingCart() ;

var numProduct  = 10

function deleteShoppingCart() {
    console.log("All Products deleted.");
}

var x = 1 ;
let y = 2 ;
const z = 3 ;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z); */

/* 
// console.log(this);

const calAge = function (birthYear) {
    console.log(2037 - birthYear);
    // console.log(this);
}

calAge(1991)

const calAgeArrow = birthYear => {
    console.log(2037 - birthYear);
    // console.log(this);
}

calAgeArrow(1991)

const rhedwan  = {
    year: 1991,
    calAge: function () {
        console.log(this);
        console.log(2037 - this.year);
    }
}
rhedwan.calAge();


const matlida = {
    year: 2017,
}
matlida.calAge = rhedwan.calAge ;
matlida.calAge();

const f = rhedwan.calAge ;
f(); */

/* 
var firstName = 'Ridwan';

const rhedwan  = {
    firstName: 'Ridwan',
    year: 1991,
    calAge: function () {

        // Solution 1
        // console.log(this);
        console.log(2037 - this.year);

        // const self = this; //self or that
        // const isMillenial = function () {
        //     console.log(self);
        //     console.log(self.year >= 1991 && self.year <= 1996);
        //     // console.log(this.year >= 1991 && this.year <= 1996);
        // }
        // isMillenial();

        // Solution 2
        const isMillenial = () => {
            console.log(self);
            console.log(this.year >= 1991 && this.year <= 1996);
        }
        isMillenial();
    },

    greet: () =>{
        console.log(this);
        console.log(`Hey ${this.firstName}`)
    },
};

rhedwan.greet();
rhedwan.calAge() ; */
/* 
// Arguments keyword
const addExpr = function (a, b) {
    console.log(arguments);
    return a + b ;
}
addExpr(2, 5) ;
addExpr(2, 5, 8, 12) ;

var addArrow = (a, b) =>{
    console.log(arguments);
    return a + b ;
};
addArrow() */

/* let age =  30 ;
let oldAge = age ;
age =  31 ;

console.log(age);
console.log(oldAge);


const me = {
    name: 'Ridwan',
    age: 30,
}

const friend = me ;
friend.age = 27  ;
console.log('Friend', friend);
console.log('Me', me); */
/* 
// Primitive types
let lastName = 'Williams' ;
let oldLastName = lastName ;
lastName = 'Davis' ;
console.log(lastName, oldLastName);

// Reference Types
const jessica = {
    firstName : 'jessica',
    lastName :'Williams',
    age: 27,
};

const marriedJessica =  jessica ;

jessica.lastName = 'Davis' ;
jessica.age = 23

console.log('Before marriage: ', jessica);
console.log('After marriage:', marriedJessica);

// marriedJessica= {} ;

// Copying Objects

const jessica2 = {
    firstName : 'jessica',
    lastName :'Williams',
    age: 27,
    family: ['Alice', 'Bob']
};
const jessicaCopy = Object.assign({}, jessica2) ;
jessicaCopy.lastName = 'Davis' ;

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage:', jessicaCopy); */