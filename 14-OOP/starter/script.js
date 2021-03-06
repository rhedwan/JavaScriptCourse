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
/* class PersonCl {
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
*/

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
/* const PersonProto = {
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
*/

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
/* const Person = function(firstName, birthYear) {
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


// Linking Prototypes
Student.prototype = Object.create(Person.prototype);


Student.prototype.introduce = function(){
    console.log(`My name ${this.firstName} and I study ${this.course}`)
};

const mike = new  Student('Mike', 2020, 'Computer Science');     
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student) ;
console.log(mike instanceof Person) ;
console.log(mike instanceof Object) ;

// This makes the Student prototype itself rather than the Person prototype
Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
 */
// Challenge #3
/* const Car = function(make, speed) {
    this.make = make ;
    this.speed = speed ;
};

Car.prototype.accelerate = function() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
}

Car.prototype.brake = function() {
    this.speed -= 5;
    console.log(`${this.make} is decreasing to ${this.speed}km/h`);
}   

const EV = function(make, speed, charge) {
    Car.call(this, make, speed)
    this.charge = charge ;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
    this.charge = chargeTo;
};

// This would overwrite the exissting 'accelerate' in the inherited class
EV.prototype.accelerate = function() {
    this.speed += 20;
    this.charge -= 1;
    console.log(`${this.make} going at ${this.speed+2}km/h, with a charge of ${this.charge}%`)
};

EV.prototype.constructor = EV;

const tesla = new EV('Tesla', 120, 23);
console.log(tesla);

tesla.chargeBattery(50);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
tesla.accelerate();
 */

// Inheritance between classes: Object.create()
/* 
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

// Parent to child relationship
const StudentProto = Object.create(PersonProto);

const jay = Object.create(StudentProto);

StudentProto.init = function(firstName, birthName, course){
    PersonProto.init.call(this, firstName, birthName);
    this.course = course;   
}

StudentProto.introduce = function() {
    console.log(`My name ${this.firstName} and I study ${this.course}`)
}

jay.init('Jay', 2000, 'Mathematics');
jay.calcAge();
jay.introduce(); */

// 1) Public fields
// 2) Private fields
// 3)  Public methods
// 4) Private methods
// There is also the static version

class Account  {

    // 1) Public fields (instances)
    locale = navigator.language ;
    
    // 2) Private fields (instances)
    // There are available on the instances them self
    #movements = [] ;
    #pin ;

    constructor(owner, currency, pin){
        this.owner  = owner ;
        this.currency = currency ;
        this.#pin = pin ;
        // Protected Property
        // this._movements = [] ;
        // this.locale = navigator.language ;

        console.log(`Thanks for opening an account, ${owner}`) ;
    }

    // Public interface
    // 3)  Public methods
    getMovements(){
        return this.#movements ;
    }

    deposit(val){
        this.#movements.push(val);
        return this ;
    }
    withdraw(val){
        // Accessing another method in the same class
        this.deposit(-val) ;
        return this ;

    }
    
    requestLoan(val){
        // if(this.#approveLoan(val)){
        if(this._approveLoan(val)){
            this.deposit(val)
            console.log(`Loan approved`)
            return this ;
        }
    }

    // 4) Private methods
    // #approveLoan(val){
    _approveLoan(val){
        return true ;
    }

}

const acc1  = new Account('Ridwan', 'EUR', 1111) ;
console.log(acc1);


// Interacting with the object direct 
// acc1._movements.push(250)
// acc1._movements.push(-140) 

acc1.deposit(250) ;
acc1.withdraw(140) ;

console.log(acc1.getMovements()) ;

console.log(acc1);
// console.log(acc1.#pin);
acc1.requestLoan(230) ;

// Testing for Private fields
// console.log(acc1.#movements) ;
// console.log(acc1.#approveLoan(100));

// Chaining Methods
acc1.deposit(300).deposit(459).withdraw(200).requestLoan(50).withdraw(300) ;
acc1.deposit(300).deposit(459).withdraw(200).requestLoan(50).withdraw(300) ;
console.log(acc1.getMovements()) ;

// Challenge #3
/*class CarCl {
    constructor(make, speed){
        this.make = make ;
        this.speed = speed ;
    }
    accelerate () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed}km/h`);
        return this ;
    }
    
    brake () {
        this.speed -= 5;
        console.log(`${this.make} is decreasing to ${this.speed}km/h`);
        return this ;
    }
};

   

class EVCl extends CarCl {
    #charge ;
    constructor(make, speed, charge){
        super(make, speed) ;
        this.#charge = charge ;
    }
    chargeBattery(chargeTo) {
        this.#charge = chargeTo;
        return this ;
    };

    accelerate () {
        this.speed += 20;
        this.#charge -= 1;
        console.log(`${this.make} going at ${this.speed}km/h, with a charge of ${this.#charge}%`)
        return this ;
    };

};


const tesla = new EVCl('Tesla', 120, 23);
console.log(tesla);

tesla.chargeBattery(50);
console.log(tesla);

tesla.accelerate();
tesla.brake();
tesla.accelerate();
console.log(tesla);
tesla.accelerate().chargeBattery(30).brake();
console.log(tesla);
 */