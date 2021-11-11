'use strict';

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