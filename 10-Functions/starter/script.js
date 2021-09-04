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

const flight = 'LH234' ;
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
checkIn(flight, rhedwan);
