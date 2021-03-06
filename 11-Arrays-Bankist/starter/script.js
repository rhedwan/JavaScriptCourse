'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function(movements, sort=false){
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a -b) : movements ;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ?  'deposit'  : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
        <div class="movements__value">${mov}???</div>
      </div>`;
    
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};


const calcDisplayBalance = function (acc) {
  acc.balance =  acc.movements.reduce((acc, mov) => acc + mov) ;
  labelBalance.textContent = `${acc.balance} ???` ;

};


const calcDisplaySummary  = function (acc) {
  const income = acc.movements.filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}???` ;

  const out  = acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0); 
  labelSumOut.textContent = `${Math.abs(out)}???` ;

  const interest = acc.movements
  .filter(mov => mov > 0)
  .map(deposit => (deposit * acc.interestRate)/100)
  .filter( int => int >= 1)
  .reduce((acc, int)=> acc + int,0) ;
  labelSumInterest.textContent = `${interest}???` ;

};


const createsUsernames = function (accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });

};

createsUsernames(accounts) ;
// console.log(accounts);

const updateUI = function (acc) {
  
  // Display movements
  displayMovements(acc.movements);
  
  // Display balance
  calcDisplayBalance(acc);
  
  // Display summary
  calcDisplaySummary(acc);

};

// Event handler

let currentAccount ;
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find( acc => acc.username === inputLoginUsername.value );

  if(currentAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}` ;
    containerApp.style.opacity = 100 ;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = ' ';
    inputLoginPin.blur();
    
    // Update UI
    updateUI(currentAccount);

  };
});

btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value) ;
  const receiverAcc = accounts.find(acc=> acc.username === inputTransferTo.value );

  console.log(amount, receiverAcc);
  inputTransferAmount.value = inputTransferTo.value = ' ';

  if(amount > 0 && 
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.value){

      currentAccount.movements.push(-amount);
      receiverAcc.movements.push(amount);
    
      // Update UI
      updateUI(currentAccount);
  };
  
});

btnLoan.addEventListener('click', function(e){
  e.preventDefault();

  const amount = Number(inputLoanAmount.value) ;

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)){
    // Add movement 
    currentAccount.movements.push(amount) ;

    // Update UI
    updateUI(currentAccount);

  };
  inputLoanAmount.value = ' ';
});

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin){

    const index = accounts.findIndex(acc => acc.username === currentAccount.username );

    // Delete Account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0 ;

  };
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false ;
btnSort.addEventListener('click', function(e){
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'] ;
// SLICE 
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Shallow Copy
console.log(arr.slice());
console.log([...arr])

// SPLICE 
// console.log(arr.splice(2));
console.log(arr.splice(-1));
console.log(arr);

console.log(arr.splice(1, 2));
// arr.splice(1, 2);
console.log(arr);


// REVERSE
const arr2  = ['j', 'i','h', 'g', 'f' ];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join('-')); */
/* 
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for(const movement of movements){
for(const [i, movement] of movements.entries()){
  if(movement >0){
    console.log(`Movement ${i+1} You deposited ${movement}`);
  }else{
    console.log(`Movement ${i+1} You withdraw ${Math.abs(movement)}`);
  }
};

console.log('_____FOREACH_____')

movements.forEach(function (movement, index, array) {
  if(movement >0){
    console.log(`Movement ${index+1} You deposited ${movement}`);
  }else{
    console.log(`Movement ${index+1} You withdraw ${Math.abs(movement)}`);
  }
});

console.log('======Using the Arrow function======');
movements.forEach((movement, index, array)=>{
  if(movement >0){
    console.log(`Movement ${index+1} You deposited ${movement}`);
  }else{
    console.log(`Movement ${index+1} You withdraw ${Math.abs(movement)}`);
  }
}); */

/* // Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

console.log(currencies);
currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
});

// Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']) ;
console.log(currenciesUnique) ;

currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`);
}); */
/* 
const checkDogs = function (dogsJulia, dogsKate) {
  const newDogsJulia = [...dogsJulia];
  newDogsJulia.splice(0, 1) ;
  newDogsJulia.splice(-2) ;
  const currentDogs = [...newDogsJulia, ...dogsKate] ;
  currentDogs.forEach(function (dogAge, index) {
    const ageGroup = dogAge >= 3 ? 'a adult' : 'an puppy' ; 
    const checks = `Dog number ${index+1} is  ${ageGroup}, and is ${dogAge} years old` ;
    console.log(checks) ;

  });

};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]); */

// Data Transformation: map, filter, reduce
/* 
const eurToUsd = 1.1 ;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd
// });

// Arrow function
const movementsUSD = movements.map(mov => mov * eurToUsd) ;


console.log(movements);
console.log(movementsUSD);

const newUsd = [] ;
for(const mov of movements){
  newUsd.push(mov * eurToUsd) ;
  
};
console.log(newUsd);

const movementsDescription = movements.map((mov, i, arr) => {
  if(mov >0){
    return `Movement ${i+1} You deposited ${mov}`;
  }else{
    return `Movement ${i+1} You withdraw ${Math.abs(mov)}`;
  }
});
console.log(movementsDescription); */

/* // filter
const deposits = movements.filter(function(mov){
  return mov > 0 ;
});
console.log(movements);
console.log(deposits);

const depositsFor = [] ;
for(const mov of movements) if (mov > 0) depositsFor.push(mov) ;

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals); */
/* 
// reduce
console.log(movements);

// accumulator => SNOWBALL

// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i} ${acc} ${cur}`);
//   return acc + cur
// }); 

const balance = movements.reduce((acc, cur) => acc + cur ); 

console.log(balance);

let balance1 = 0 ;
for(const cur of movements) balance1 += cur ;

console.log(balance1)
 */

// Maximum value
/* const max  = movements.reduce((acc, mov) => {
  if (acc > mov) return acc ;
  else return  mov ;
}, movements[0]);

console.log(max); */
/* 
const calcAverageHumanAge = function(ages){

  // 1.
  const humanAges = ages.map((dogAge) =>{
    if (dogAge <= 2){
      return 2 * dogAge
    }
    else if (dogAge > 2){
      return 16 + dogAge * 4
    }
  });

  // 2.
  const adultDogs = humanAges.filter(adultDog => adultDog >= 18) ;

  // 3.
  // const sumAdultDog = adultDogs.reduce((prev, next) =>{
  //   return prev + next ;
  // }) / adultDogs.length ;

  // Aliter
  const sumAdultDog = adultDogs.reduce((prev, next, i, arr) => prev + next / arr.length , 0) ;

  return `The sum of the Adult Dog ${adultDogs} is ${sumAdultDog}`;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));
 */


// Magic of Chaining Methods
/* const eurToUsd = 1.1 ;

// PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0)
// .map((mov, i, arr) => {
//   console.log(arr);
//   return mov *eurToUsd 
// })
.map(mov => mov *eurToUsd )
.reduce((acc, mov ) => acc + mov, 0);

console.log(totalDepositsUSD) ; */

/* 
// Rewrite the function from Challenge #2, but this time
// as an arrow function, and using chaining!

const calcAverageHumanAge = ages => {

  const averageAdultAge = ages
  .map((dogAge) => dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4)
  .filter(adultDog => adultDog >= 18)
  .reduce((prev, next, i, arr) => prev + next / arr.length , 0);

  return `The average of the Adult Dog are ${averageAdultAge}`;
};

console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4])); */

// Find Method
/* console.log(movements);
const firstWithdrawal = movements.find(mov => mov < 0 ) ;
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis') ;

console.log(account); */

/* console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

//SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0) ;
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0 ;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
 */
/* 
// FLAT Method
const arr = [[1,2,3], [4,5, 6], 7, 8] ;
console.log(arr.flat());

// flap :  levels
const arrDeep = [ [ [1, 2], 3], [4, [5, 6]], 7, 8] ;
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

// flat
const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, cur) => acc + cur, 0)

console.log(overalBalance)

// flatMap
const overalBalance2 = accounts
.flatMap(acc => acc.movements)
.reduce((acc, cur) => acc + cur, 0)

console.log(overalBalance2) */

/* 
// Strings
const owners  = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());

// It mutate the original array
console.log(owners);

// Numbers
console.log(movements);
// console.log(movements.sort());

// return < 0 :  A, B (keep order)
// return > 0 : B , A (Switch the order)

// Ascending 

// movements.sort((a, b) => {
//   if(a > b) return 1 ;
//   if(b > a) return -1 ;
// });
movements.sort((a, b) => a - b );
console.log(movements);

// Descending 

// movements.sort((a, b) => {
//   if(a > b) return -1 ;
//   if(b > a) return 1 ;
// });

movements.sort((a, b) => b - a );
console.log(movements); */

/* const arr = [1, 2,3,4,5,6,7] ;
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Generating an Array
// Empty arrays + fill methods
const x = new Array(7);
x.fill(1) ;
console.log(x);

arr.fill(23, 2, 6) ;
console.log(arr);

// from

const y = Array.from({length: 7}, () => 1) ;
console.log(y)

const z = Array.from({length: 7}, (_, i) => i + 1) ;
console.log(z);

labelBalance.addEventListener('click', function(e){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value'), el => Number(el.textContent.replace('???', ''))

  );
  console.log(movementsUI);
}); */
/* 
// 1.
const bankDepositSum  = accounts
.flatMap(acc => acc.movements )
.filter(mov => mov > 0)
.reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

const bankWithdrawalSum  = accounts
.flatMap(acc => acc.movements )
.filter(mov => mov < 0)
.reduce((sum, cur) => sum + cur, 0);

console.log(bankWithdrawalSum);

// const numDeposits1000 =  accounts
// .flatMap(acc => acc.movements )
// .filter(mov => mov >= 1000).length

// console.log(numDeposits1000);

// 2.
const numDeposits1000 =  accounts
.flatMap(acc => acc.movements )
// .reduce((count, cur ) => cur >= 1000 ? count + 1: count, 0);
.reduce((count, cur ) => cur >= 1000 ? ++count  : count, 0);

console.log(numDeposits1000);

// Prefix ++ operator
//N:B The "a++" or "count++"  still returns the old value
//While The "++a" or "++count" returns the new value

let a = 10 ;
// console.log(a++);
console.log(++a)
console.log(a);


// 3.
let values = {
  d : 0,
  w: 0
};
const {deposits , withdrawals} =  accounts
.flatMap(acc => acc.movements )
.reduce((sums, cur) => {
  // cur  > 0 ? sums.deposits += cur : sums.withdrawals += cur;
  sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur ;
  return  sums

}, {deposits:0, withdrawals:0});

console.log(deposits , withdrawals);

// 4.
// this is a nice title => This Is a Nice Title
const convertTitleCase = function(title){
  const capitalize = str => str[0].toUpperCase() + str.slice(1) ;
  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => exceptions.includes(word) ? word : capitalize(word))
  .join(' ');
  return capitalize(titleCase) ;
};
  
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is aanother title with an EXAMPLE')); */

// Coding Challenge #4
/* const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },

];

// 1.
dogs.map(dogData => dogData.recFood = Math.trunc(dogData.weight ** 0.75 * 28)) ;
console.log(dogs);

// 2.

const feedChecks = (current, recommended) =>{
  let feedingStatus;
  if(current > recommended ){
    feedingStatus = 'much'
  }
  else{
    feedingStatus = 'litte'
  }

  return feedingStatus
};

const sarahDog = dogs
.find(target => target.owners.includes('Sarah')) 

console.log(`Sarah's dog is eating too ${feedChecks(sarahDog.curFood,sarahDog.recFood)}`);

// 3.
const ownersEatTooMuch = dogs
.filter(dogData => feedChecks(dogData.recFood, dogData.curFood) === 'much')
.reduce((ownerArr, curr) => {
  ownerArr.push(curr.owners)
  return ownerArr
}, [])
.flat();

console.log(ownersEatTooMuch);


const ownersEatTooLittle = dogs
.filter(dogData => feedChecks(dogData.recFood, dogData.curFood) === 'litte')
.reduce((ownerArr, curr) => {
  ownerArr.push(curr.owners)
  return ownerArr
}, [])
.flat();

console.log(ownersEatTooLittle);

// 4.

const strEatTooMuch = ownersEatTooMuch
.reduce((str, cur, i, arr) => {
  i < arr.length -1 ? str += `${cur} and ` : str += `${cur} dogs eat too much!` ;
  return str 
}, '');

console.log(strEatTooMuch)

const strEatTooLittle = ownersEatTooLittle
.reduce((str, cur, i, arr) => {
  i < arr.length -1 ? str += `${cur} and ` : str += `${cur} dogs eat too little!` ;
  return str 
}, '');

console.log(strEatTooLittle);


// 5. 
const exactlyAmount = dogs
.some(dog => dog.curFood === dog.recFood);

console.log(exactlyAmount);


// 6.

const okayFood = (current , recommended) => {
  return current > (recommended * 0.90) && current < (recommended *1.10)
};

const okayChecker = dogs
.some(dog => okayFood(dog.curFood, dog.recFood));

console.log(okayChecker);

// 7.
const okayArr = dogs
.filter(dog => okayFood(dog.curFood, dog.recFood));

console.log(okayArr);

// 8.

const recFoodOrder = dogs
.slice()
.map(recData => recData.recFood )
.sort((a, b) => a-b)

console.log(recFoodOrder); */