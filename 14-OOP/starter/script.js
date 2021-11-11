'use strict';

// Constructor function
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    // console.log(this);
};  

const john = new Person('John', 1990);       // new keyword is used to create an object
console.log(john);

// 1. New {} is created
// 2. The constructor function is called, this = {}  
// 3. {} is linked to a prototype
// 4. function automatically return {}   

const matilda = new Person('Matilda', 2017);  
const jack = new Person('Jack', 1972);
console.log(matilda, jack);

console.log(john instanceof Person);