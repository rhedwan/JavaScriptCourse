/* 'use strict';

// Constructor function
const Person = function(firstName, birthYear) {
    // Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // Instance methods => Never do this!
    // this.calAge = function() {
    //     console.log(2037 - this.birthYear);
    // }   
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

console.log(Person.prototype);

// Prototypes
Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

john.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(john.__proto__);
console.log(john.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(john));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototype is a property of the function
// .prototypeOfLinkedObjects

// Inherited properties
Person.prototype.species = 'Homo Sapiens' ;

console.log(john, matilda);
console.log(john.species, matilda.species);

console.log(john.hasOwnProperty('firstName')) ;
console.log(john.hasOwnProperty('species')) ;

// Prototypal Inheritance on Built-In objects

console.log(john.__proto__.__proto__);

// Object.prototype (top of the prototype chain)    => Object.prototype.__proto__   
console.log(john.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);  

const arr  = [1, 2, 1, 5, 8, 1 , 8, 3, 4, 5];   

console.log(arr.__proto__); 
// Prototype of an array is same as prototype of an object
console.log(arr.__proto__ === Array.prototype); 
console.log(arr.__proto__.__proto__); 

Array.prototype.unique = function(){
    return [...new Set(this)];
};

console.log(arr.unique());

const h1  = document.querySelector('h1');
console.dir(h1) ;
console.log(h1.__proto__);

console.dir(x =>  x + 1) ; */


// Coding Challenge #1

const Car = function(make, speed){
    this.make = make;
    this.speed = speed;
} ;

// 1
Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
};

// 2.
Car.prototype.brake = function(){
    this.speed -=  5;
    console.log(`${this.make} is decreasing to ${this.speed}km/h`);
};

const car1 = new Car('BMW', 120);
const car2 = new Car('Mercedes', 95);

car1.accelerate();
car1.accelerate();
car1.brake();
car1.accelerate();

car2.accelerate();
car2.brake();
car2.accelerate();
car2.brake();
car2.accelerate();