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
 */