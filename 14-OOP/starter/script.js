'use strict';

// Constructor function
/* const Person = function(firstName, birthYear) {
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

// Static Methods
Person.hey = function () {
    console.log('Hey there 😎😎') ;
    console.log(this)
};

Person.hey();

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

console.dir(x =>  x + 1) ; 

 */
// Coding Challenge #1
/* 
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
car2.accelerate(); */

// Class exprssion
// const PersonCl = class {

// };

// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    // Instance methods
    // Methods will be added to .prototype property of the class
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet () {
        console.log(`Hello, I am ${this.firstName}`);
    };
    
    get age() {
        return 2037 - this.birthYear;
    };

    // Set a property that already exists
    set fullName(name) {
        if(name.includes(' ')) this._fullName = name;
        
        else alert(`${name} is not full name. Please enter your full name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static Methods
    // They aren't available on the objects
    static hey(){
        console.log('Hey there 😎😎') ;
        console.log(this)
    }
}

const rhedwan = new PersonCl('Rhedwan Adeyemo', 1990);  
// const john = new PersonCl('John', 1960);

console.log(rhedwan) ;

rhedwan.calcAge();
console.log(rhedwan.age)

console.log(rhedwan.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//     console.log(`Hello, I am ${this.firstName}`);
// };

rhedwan.greet();

PersonCl.hey();

// 1. Classes are not hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode
// 4. Classes are not instances of other classes


// const bayo = new PersonCl('Adeyemo', 1980);

// Setters and Getters are used as a property descriptor
/* const account = {
    owner : 'Rhedwan',
    movements : [200, -100, -300, 100],

    get latest() {
        return this.movements[this.movements.length - 1];
    },
    set latest(mov) {
        return this.movements.push(mov);
    }
}

console.log(account.latest);
account.latest = 300;
console.log(account.latest);
console.log(account.movements);  */


// Object.create()
const PersonProto = {
    calcAge() {
        console.log(2037 - this.birthYear);
    },
    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }     
};

const steven = Object.create(PersonProto)
console.log(steven) ;
steven.name = 'Steven' ;
steven.birthYear = 2002 ;
steven.calcAge() ;

console.log(steven.__proto__);
console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();


// Coding Challenge #2
/* class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    accelerate() {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} is decreasing to ${this.speed}km/h`);
    }   

    get speedUS() {
        this.speed = this.speed / 1.6;
        // return `The Current Speed is ${this.speed} in mi/h`
        console.log(`The Current Speed is ${this.speed} in mi/h`);
    }
    set speedUS(speed) {
        this.speed = speed * 1.6;
        console.log(`The Current Speed is ${this.speed} in mi/h`);
    }
}


const ford = new CarCl('Ford', 120);
ford.accelerate();
ford.brake();
ford.speedUS;
ford.speedUS = 100;
ford.speedUS;
ford.brake();

 */

// Inheritance between classes
const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;  
}; 


Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course) { 
    Person.call(this, firstName, birthYear);
    this.course = course;
};

Student.prototype.introduce = function(){
    console.log(`My name ${this.firstName} and I study ${this.course}`)
};

const mike = new  Student('Mike', 2020, 'Computer Science');     
console.log(mike);
mike.introduce();