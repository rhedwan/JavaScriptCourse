'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const weekdays = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'] ;

/* for (const day of weekdays) console.log(day);
for (const [no, day] of weekdays.entries()){
  console.log(`${no}: ${day}`);
  
}  */

const  openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};


/* const  openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
}; */

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours : openingHours,
  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex] ]
  },
  orderDelivery({starterIndex = 1, mainIndex = 0, time, address}) {
    console.log(`Order received! ${this.starterMenu[starterIndex]}
    and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}
    `);
  },
 
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizzza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  }
};


console.log(new String());

const getCode = (str) => str.slice(0,3).toUpperCase() ;

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';') ;
  // console.log(type, from, to, time);
  const output = `${type.startsWith('_Delayed') ? ':)' : ''} ${type.replaceAll('_', ' ').trim()} from ${getCode(from)} to ${getCode(to)} (${time.replace(':', 'h')})`.padStart(60, ' ') ;
  console.log(output);
};


/* 
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button =  document.querySelector('button') ;

console.log(new String());

button.addEventListener('click', function (e) {

  const text = document.querySelector('textarea').value ;
  const rows = text.split('\n') ;
  console.log(rows);

  for (const [i, row] of rows.entries()){
    const [first, second] = row.toLowerCase().trim().split('_') ;
    const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`;

    console.log(`${output.padEnd(20, ' ')} ${'()'.repeat(1+i)}`);
    
  }
});
 */
/* 
// Split and Join
console.log('a+very+nice+string'.split('+'));
console.log('Ridwan Adeyemo'.split(' '));

const [firstName, lastName] = 'Ridwan Adeyemo'.split(' ') ;
console.log(firstName, lastName);

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ') ;
console.log(newName);

const capitalizedName = function (name) {
  const names = name.split(' ') ;
  const namesUpper = []
  for(const n of names){
    // namesUpper.push(n[0].toUpperCase() + n.slice(1))
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
  
}
capitalizedName('jessica ann smith davis') ;
capitalizedName('ridwan adeyemo') ;


// Paddinng

const message = 'Go to gate 23' ;
console.log(message.padStart(25, '+'));
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('rhedwan'.padStart(25, '+'));
console.log('rhedwan'.padEnd(25, '+'));


const maskedCreditCard = function (number) {
  const str = number + '' ;
  const last = str.slice(-4)
  return last.padStart(str.length, '*')
}

console.log(maskedCreditCard(2352452652526262626));
console.log(maskedCreditCard('345345645662626')) ;

// Repeat
const message2 = 'Bad weatherrr... All departures Delayed...' ;
console.log(message2.repeat(5));

const planesInLine = function (n){
  console.log(`There are ${n} planes in line ${'!'}`.repeat(n));
}
planesInLine(5);
 */
/* 
const airline = 'TAP Air Portugal' ;
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in name
const passenger = 'jOnAS' ; // Jonas
const passengerLower = passenger.toLowerCase() ;
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1) ;
console.log(passengerCorrect);

// Check Emails

const email = 'hello@jonas.io' ;
const logInEmail = '  Hello@Jonas.Io \n' ;

// console.log(logInEmail);

// const lowerEmail = logInEmail.toLowerCase() ;
// const trimmedEmail =  lowerEmail.trim()
// console.log(trimmedEmail);

const normalizedEmail = logInEmail.toLowerCase().trim() ;
console.log(email === normalizedEmail);


// Replacing 
const priceGB = '288,97#' ;
const priceUS = priceGB.replace('#','$').replace(',', '.') ;
console.log(priceUS);

const announcement = `All passengers come to boarding door 23. Boarding door 23` ;
console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

console.log(announcement.replace(/door/g, 'gate'));

// Booleans 
const plane = 'Airbus A320neo' ;
console.log(plane.includes('A32'));
console.log(plane.includes('Booing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Airbus family');
}

// Practice excercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  }else{
    console.log('Welcome aboard');
  }
}

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection'); */

/* 
// Working With Stringss _ Part 1
const airline = 'TAP Air Portugal' ;
const plane = 'A320' ;

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));
console.log(airline.indexOf('Portugal'));
console.log(airline.indexOf('portugal'));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ')+1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  const s = seat.slice(-1);
  s === 'B' || s === 'E' ? console.log('You got the middle seat!.') :console.log('You got lucky') ;

}
checkMiddleSeat('11B')
checkMiddleSeat('23C')
checkMiddleSeat('3E')
checkMiddleSeat('23A')

console.log(new String('rhedwan'));
console.log(typeof new String('rhedwan'));
console.log(typeof new String('rhedwan').slice(1));

// console.log(checkMiddleSeat());
 */

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

/* // Challenge 3

// Task 1

// const events = new Set();
// for(const event of gameEvents.values()){
//   events.add(event)
// }
// console.log([...events]);
// const events = new Set();

const events = [...new Set(gameEvents.values())];
console.log(events);

// Task 2
// console.log(gameEvents);
gameEvents.delete(64)
// console.log(gameEvents);

// Task 3
const time = [...gameEvents.keys()].pop() ;
console.log(time) ;

console.log(`An event happened, on average, every ${time / gameEvents.size} minutes`);

// Task 4
for(const [time,event] of gameEvents){
  const halves = time < 45 ? '[FIRST HALF]' : '[SECOND HALF]' ;
  console.log(`${halves}: ${event}`);
}

 */
/* 
const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!'],
])

console.log(question);

// Convert object to map
console.log(Object.entries(openingHours)); 
const hoursMap = new Map(Object.entries(openingHours)) ;
console.log(hoursMap);

// Quiz App
console.log(question.get('question'));
for(const [key, value] of question){
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

const answer = 3
console.log(answer);

console.log(question.get(question.get('correct') === answer)) ;

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log(question.values());
 */


/* 
// Maps: Fundamental
const rest = new Map();
rest.set('name', 'Classico Italiano')
rest.set(1, 'Frenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories',['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')

console.log(rest.get('name'));
// console.log(rest.get('1'));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21 ;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

console.log(rest.has('categories'));
rest.delete(2)
console.log(rest);
console.log(rest.size);
// rest.clear() ;

const arr = [1, 2]
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

console.log(rest.get(arr)); */


/* 
const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto','Pasta','Pizza']) ;
console.log(orderSet);
console.log(new Set('rhedwan'));


console.log(orderSet.size);
console.log(orderSet.has('Pizza'));
console.log(orderSet.has('Bread'));

orderSet.add('Garlic Bread');
orderSet.add('Garlic Bread');
orderSet.delete('Risotto') ;
// orderSet.clear();
console.log(orderSet);

for(const order of orderSet) console.log(order);

// Example

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'] ;
const staffUnique = [...new Set(staff)] ;
console.log(staffUnique);

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('adeyemoridwan').size);
 */



/* // Property NAMES
const properties = Object.keys(openingHours) ;
console.log(properties);

let openStr =`We are open on ${properties.length} days: `;


for (const day of properties){
  openStr += `${day}, `
  console.log(day);
}
console.log(openStr);

// Property VALUES

const values = Object.values(openingHours) ;
console.log(values);

// Entries Object
const entries = Object.entries(openingHours) ;
// console.log(entries);

for(const [key, {open, close}] of entries){
  // console.log(x);
  console.log(`On ${key} we open at ${open} and close at ${close}`);
};
 */
/* if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
};

// With optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example

const days = ['mon', 'tue', 'wed', 'thur', 'fri', 'sat', 'sun'] ;
for (const day of days){
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed' ;
  console.log(`On ${day}, we open at ${open}`);

}

// Methods
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRisotto?.(0, 1) ?? "Method does not exist");

// Array
const users = [{name:'Ridwan', email:'adesolaridwan2003@gmail.com'} ];
// const users =  []

// const [{name}] = users
// console.log(name);

console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array empty');
}
 */


// if (restaurant.openingHours.fri) {
//   console.log(restaurant.openingHours.fri.open); 
// };

/* 
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item);

for (const item of menu.entries()){
  // console.log(item);
  console.log(`${item[0]+1}: ${item[1]}`);
}

for (const [i, el] of menu.entries()){
  console.log(`${i+1}: ${el}`);
}

// console.log([...menu.entries()]);

 */
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
    'Neuer',
    'Pavard',
    'Martinez',
    'Alaba',
    'Davies',
    'Kimmich',
    'Goretzka',
    'Coman',
    'Muller',
    'Gnarby',
    'Lewandowski',
    ],
    [
    'Burki',
    'Schulz',
    'Hummels',
    'Akanji',
    'Hakimi',
    'Weigl',
    'Witsel',
    'Hazard',
    'Brandt',
    'Sancho',
    'Gotze',
    ],
  ],
  score: '4:0',
  scored: [
    'Lewandowski', 
    'Gnarby',
    'Lewandowski',
    'Hummels'
  ],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



/* // Challenge 2

// Task 1
for(const [count, scorer] of game.scored.entries()){
  console.log(`Goal ${count+1}: ${scorer}`);
};

// Task 2
let start = 0
const oddContent = Object.entries(game.odds) ;
for(const [, odd]of oddContent){
  start += odd
};
console.log(`The average odd is ${start/oddContent.length}`);

// Task 3
for(const [teamName, odd]of oddContent){
  const teamNameFetch = game[teamName] ?? 'Odd' ;
  console.log(`Odd of victory ${teamNameFetch}: ${odd}`);
};

// Bonus 
const scorers = {}
for(const player of game.scored){

  if (scorers[player]) {
    scorers[player] += 1
  } else {
    scorers[player] = 1
  }
  
};
console.log(scorers); */


/* const [players1, players2] = game.players ;
console.log(players1 , players2);

const [gk, ...fieldPlayers] = players1 ;

const allPlayers = [...players1, ...players2] ;

const players1Final = [...players1,'Thiago', 'Coutinho', 'Perisic'] ;

const {odds: {team1, x:draw, team2} } = game ;

const printGoals = function (...players) {
  for(let i = 0; i < players.length ; i++){
    console.log(players[i]);
  };

  // console.log(`${players.length} goals were scored`);
};

printGoals('Davies', 'Muller', 'Lewandowski') ;
printGoals(...game.scored) ;

team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');

console.log(team1, draw, team2);
console.log(allPlayers);
console.log(players1Final);
console.log(gk, fieldPlayers); */

/* restaurant.numGuests = 0 ;

const guests = restaurant.numGuests || 10 ;
console.log(guests);

// Nullish: null and undefined (NOT 0 and '' )
const guestCorrect = restaurant.numGuests ?? 10 ;
console.log(guestCorrect); */

/* 
///////////SHORT-CIRCUITING
console.log("----------OR----------");
// Use ANY data type, return ANY data type, shortcircuting 
console.log(3 || "Ridwan");
console.log('' || "Ridwan");
console.log(true || 0 );
console.log(undefined || null);
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurant.numGuests = 23 ;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10 ;
console.log(guest1);

const guest2 = restaurant.numGuests || 10 
console.log(guest2);

console.log("----------AND----------");
console.log(0 && "Ridwan");
console.log(3 && "Ridwan");
console.log('Hello' && 3 &&  null && 'Ridwan');
console.log('' && "Ridwan");
console.log(true && 0 );
console.log(undefined && null);

// Practial Example
if(restaurant.orderPizzza){
  restaurant.orderPizzza('mushrooms', 'spinach')
}

restaurant.orderPizzza && restaurant.orderPizzza('mushrooms', 'spinach')
 */
/* // Destructuring 

// SREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]] ;


// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 4, 5]
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]  
console.log(pizza, risotto, otherFood);

// Objects
const {sat, ...weekdays} = restaurant.openingHours ;
console.log(weekdays);

// 2. Functions
const add = function (...numbers) {

  let sum = 0 ;
  for(let i= 0; i < numbers.length ; i++){
    sum += numbers[i]
  };
  console.log(sum);
  // console.log(numbers);
}
const x = [23, 5, 7] ;
add(...x) ;

add(2) ;
add(2, 3) ;
add(2, 3, 5, 45, 33); 
add(2, 3, 3, 56, 76, 45, 45, 33) ;

restaurant.orderPizzza('mushrooms', 'onions', 'olives', 'spinach') ;
restaurant.orderPizzza('mushrooms') ;
  */
/* const arr = [7, 8, 9] ;
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr);

const newArr = [ 1, 2, ...arr] ;
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu] ; //Shallow copy
// const starterMenuCopy = [...restaurant.starterMenu] ; 

// Join 2 array
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu] ;
console.log(menu);

//Iterables: arrays, strings, maps, sets. NOT Objects 

const str = 'rhedwan' ;
const letters = [...str, ' ', 'S.'] ;
console.log(letters) ;
// console.log(`${...str} rhedwan`);

// const ingredients = [prompt('Let\'s make pasta! ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?')]
// console.log(ingredients) ;

// restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = {founderIn: 1998, ...restaurant, founder:'Markesein'} ;
console.log(newRestaurant);

const restaurantCopy = {...restaurant} //Shallow copy
restaurantCopy.name = 'Mama  Puttt' ;
console.log(restaurantCopy); */

/* 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sale, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sale, 21',
});

const {name, openingHours, categories} = restaurant ;
// console.log(name, openingHours, categories);

// Passing a default values
const {name:restaurantName, openingHours:hours, categories:tags} = restaurant ;
console.log(restaurantName, hours, tags);

// Passing a default values for the property. Also, rewriting it name.
const {menu = [], starterMenu: starters= []} = restaurant;
console.log(menu, starters);

// Mutating variables

let a  = 111 ;
let b  = 999 ;
const obj = {
  a:23,
  b: 7,
  c: 14
};

({a, b} = obj  );
console.log(a, b) ; */

// Nested Object
// const {fri : {open, close}} = openingHours;
// console.log(fri);
// console.log(open, close);

// const {fri : {open: o, close: c}} = openingHours;
// console.log(o, c);


/* const arr = [2, 3, 4] ;
const [x, y, z] = arr
console.log(x, y, z);

// const [first, ,second] = restaurant.categories ;
// console.log(first, second);

let [main, ,secondary] = restaurant.categories ;
console.log(main, secondary);
 */
// Switching Of Variables
// const temp = main ;
// main = secondary ;
// secondary = temp ;
// console.log(main, secondary);

// [main, secondary] = [secondary, main] 
// console.log(main, secondary);
/* 

// Recieve 2 return value from  a function
const [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 4, [5, 6]] ;

// const [i, ,j] = nested ;
// console.log(i, j);

// Default values
const [i, ,[j, k]] = nested ;
console.log(i, j, k) ;

const [p=1, q=1, r=1] = [0, 9];
console.log(p, q, r); */

