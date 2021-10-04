'use strict';

/* 
const bookings = [] ;

const createBooking = function (flightNum, numPassengers=1, price=199 * numPassengers) {
    
    // ES5
    // numPassengers = numPassengers || 1 ;
    // price = price || 233 ;

    const booking = {
        flightNum,
        numPassengers,
        price
    };

    console.log(booking);
    bookings.push(booking)
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
 */

/* const flight = 'LH234' ;
const rhedwan = {
    name: 'Ridwan Adeyemo',
    passport: 2344252226344
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name ;
    if (passenger.passport === 2344252226344) {
        alert('Checked In');
    }else{
        alert('Wrong passport')
    }
}

// checkIn(flight, rhedwan);
// console.log(flight);
// console.log(rhedwan);

// const flightNum = flight ;
// const passenger = rhedwan;


const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 1000000000) ;
};
newPassport(rhedwan);
checkIn(flight, rhedwan); */


/* 
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
    const [first, ...others]  = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}


// Higher-order function
const transformer = function (str, fn) {
    console.log(str);
    console.log(`Transformed string: ${fn(str)}`);

    console.log(`Transformed by: ${fn.name}`);

};

transformer('JavaScript is the best!',upperFirstWord)
transformer('JavaScript is the best!',oneWord)

// JS uses callbacksall the time
const high5 = function () {
    console.log('👏 ');
}

document.body.addEventListener('click', high5);


['Ridwan', 'Uche', 'Micheal'].forEach(high5); */

/* const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }

}

const greeterHey = greet('Hey');
greeterHey('Ridwan');
greeterHey('Pelumi');
greet('Hello')('Adaobi'); */

/* const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('Hello')('Jamiat'); */


/* const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({
            flight: `${this.iataCode}${flightNum}`,
            name:` ${name}`,
        })
    },
};

lufthansa.book(239, 'Ridwan Adeyemo') ;
lufthansa.book(635, 'Bakare Galib') ;
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
    
};

const book = lufthansa.book ;
// Does NOT work
// book(23, 'Qudus Tunji');

book.call(eurowings, 23, 'Qudus Tunji') ;
console.log(eurowings);

book.call(lufthansa, 239, 'Jack Dorsey') ;
console.log(lufthansa);


const swiss = {
    airline: 'Swiss Air Lines',
    iataCode: 'LX',
    bookings: [],
}
book.call(swiss, 23, 'Qudus Tunji') ;
console.log(swiss);

// Apply Method
const flightData = [546, 'George Cooper'];
book.apply(swiss, flightData) ;
console.log(swiss);


book.call(swiss, ...flightData) ;
console.log(swiss);


// Bind method
// book.call(lufthansa, 239, 'Jack Dorsey') ;

const bookEW = book.bind(eurowings) ;
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');
bookLH(45, 'Olayera Itunu')

const bookEW23 = book.bind(eurowings, 23) ;
bookEW23('Adeyemo Ridwan');
bookEW23('Laguda Hakeem')


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes ++ ;
    console.log(this.planes);
};
// lufthansa.buyPlane();

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) =>  value + (value*rate);

console.log(addTax(0.10, 100));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (rate, value) =>  value + (value*0.23) ;

console.log(addVAT(100));

// const newAddVAT = function (rate) {
//     return function (value) {
//         return value  + (value*rate)
//     }
// };

const newAddVAT = rate => value => value  + (value*rate) ;


const returnVAT = newAddVAT(0.23) ;
console.log(returnVAT(100));
console.log(newAddVAT(0.23)(100));
 */

/* const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3:C++"],
    // This generates [0, 0, 0, 0]. More in the next section!
    answers: new Array(4).fill(0),
    // Get answer
    registerNewAnswer(){
        const answer = Number(prompt(`${this.question} \n${this.options.join('\n')}\n (Write option number)`))
        console.log(answer)

        // Register
        typeof answer == 'number' && answer < this.answers.length && this.answers[answer]++
        // console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
    },
    displayResults(type='array'){
        if (type === 'array'){
            console.log(this.answers);
        }else if(type === 'string'){
            console.log(`Poll result are ${this.answers.join(', ')}`);
        }
    }
};

// poll.registerNewAnswer()
document.querySelector('.poll').addEventListener('click', poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers: [5, 2, 3]})
poll.displayResults.call({answers: [5, 2, 3]}, 'string')
poll.displayResults.call({answers: [1, 5, 3, 9, 6, 1]}, 'string')
 */
// Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

/* 
// Immediately invoked Function Expression
const runOnce = function (){
    console.log('This will never run again');
};

runOnce();

// IIFE
(function (){
    console.log('This will never run again');
    const  isPrivate = 23 ;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
    const  isPrivate = 23 ;
    var  notPrivate = 46 ;
}

// console.log(isPrivate);
console.log(notPrivate); */

// Closures

const secureBooking = function () {
    let passengerCount = 0 ;
    return function (){
        passengerCount ++ ;
        console.log(`${passengerCount} passengers`)
    };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);