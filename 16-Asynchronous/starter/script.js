'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

/* const getCountryData = function (country) {
    
    const request = new XMLHttpRequest() ;
    request.open('GET', `https://imgtcountries.com/v2/name/${country}`);
    request.send();
    console.log(request.imgponseText);

    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
        <article class="country">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
        </article>
        `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    });
};
getCountryData('nigeria');
getCountryData('spain');
getCountryData('usa');
*/

const renderCountry = function (data , className='') {
    const html = `
    <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
        <h3 class="country__name">${data.name}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(+data.population/ 1000000).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
        <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;
    
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend', msg);
    // countriesContainer.style.opacity = 1;
};

/* 
const getCountryAndNeighbour = function (country) {

    // AJAX call country 1
    const request = new XMLHttpRequest() ;
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();

    request.addEventListener('load', function(){
        const [data] = JSON.parse(this.responseText);

        // Rendercontry 1
        renderCountry(data);

        // Get neighbour country (2)
        const neighbour = data.borders[0];
        if(!neighbour) return;

        // AJAX call country 2

        const request2 = new XMLHttpRequest() ;
        request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
        request2.send();
        request2.addEventListener('load', function(){
            const data2 = JSON.parse(this.responseText);
            renderCountry(data2, 'neighbour');
        });
    });
};

// getCountryAndNeighbour('nigeria');      
getCountryAndNeighbour('usa');      
 */

// const request = fetch(`https://restcountries.com/v2/name/nigeria`) ;
// console.log(request) ;

// const getCountryData = function (country) {
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(function (response) {
//         console.log(response);
//         return response.json(); 
//     })
//     .then(function (data) {
//         console.log(data) ;
//         renderCountry(data[0]);
//     })
// };
// getCountryData('nigeria');

const getJSON = function (url, errorMsg='Something went wrong. Try Again') {
    return fetch(url)
    .then(response => {
        if(!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    
        return response.json();
    });
};

const getCountryData = function (country) {
    
    // Country 1
    getJSON(`https://restcountries.com/v2/name/${country}`, 'Country Not Found')
    .then(data => {
        renderCountry(data[0]) 
        console.log(data[0]);
        console.log(data[0].borders);   
        const neighbour = data[0].borders[0];
        // const neighbour = 'asdadrad';

        if (!neighbour) throw new Error('No neighbour found 💥💥💥');

        // Country 2 
        return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country Not Found')
    })
    .then(data =>{ 
        renderCountry(data, 'neighbour')
    })
    .catch(err => {
        console.error(`${err}👲👲💥💥💥`)
        renderError(`Something went wrong💥💥💥.Try Again. ${err.message}`)
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}

/* const getCountryData = function (country) {
    fetch(`https://restcountries.com/rest/v2/name/${country}`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`Country Not Found ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        renderCountry(data[0]) 
        // const neighbour = data[0].borders[0];
        const neighbour = 'asdadrad';
        if (!neighbour) return;

        // Country 2 
        return fetch(`https://restcountries.com/rest/v2/alpha/${neighbour}`)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`Country ${response.statusText} (${response.status}) `);
        }
        return response.json()
    })
    .then(data =>{ 
        renderCountry(data, 'neighbour')
    })
    .catch(err => {
        console.error(`${err}👲👲💥💥💥`)
        renderError(`Something went wrong💥💥💥.Try Again. ${err.message}`)
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
}; */

/* btn.addEventListener('click', function () {
    getCountryData('nigeria');
    // getCountryData('australia');
    // getCountryData('dfdsfagar');
    // getPosition() ;
}) */
// getCountryData('germany');


/* const getPosition = function () {
    navigator.geolocation.getCurrentPosition(function(position){
        const {latitude, longitude} = position.coords;;     
        // whereAmI(latitude, longitude);
        return position;
    }, function () {
        alert('Geolocation is not supported by this browser.');
    })
}

const whereAmI = function(latitude, longitude){
     
    fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    .then(response => {
        if(!response.ok) throw new Error(`Too many request was made in a second`) ;
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`)
        return fetch(`https://restcountries.com/v2/name/${data.country}`)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`Country Not Found ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        renderCountry(data[0]) 
    })
    .catch(err => {
        console.log(`Error: ${err.message}`)
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
} ;

whereAmI(12.8797,77.5880);
whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
 */

/* 
// Event loop in pratice
// Event loop is a series of events that happen in a specific order.
// The event loop is a single thread.
console.log('Test start') ;
setTimeout(() => {
    console.log('0 sec tiner') ;
}, 0);
Promise.resolve('Resolved Promise 1').then(res => console.log(res)) ;
Promise.resolve('Resolved Promise 2').then(res =>{ 
    for (let i = 0; i < 10000 ; i++) {}
    console.log(res)
}) ;
console.log('Test end') ; */
/* 
const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening 💥💥💥');
    setTimeout(() => {
        const random = Math.random();
        if (random < 0.5) {
            resolve('You WON 🎁✨')
        } else {
            reject(new Error('You lost the lottery'));
        }  
    }, 2000);

}) ;

lotteryPromise.then(res => console.log(res)).catch(err => console.log(err)) ;

// Promisifying setTimeout
const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(`Wait ${seconds} sec`);
        }, seconds * 1000);
    })
};
wait(2).then(res => {
    console.log(`I waited for 2 seconds and now I am ${res}`);
    return wait(1);
})
.then(res => {
    console.log(`I waited for 1 seconds and now I am ${res}`);
})

Promise.resolve('abc').then(x => console.log(x));
Promise.reject(new Error('Problem!')).catch(x => console.log(x)); */
/* 
// Promisifying Geolocation
const getPosition = function () {
    return new Promise(function (resolve, reject) {
    //     navigator.geolocation.getCurrentPosition(position => {
    //         console.log(position);  
    //         resolve(position);
    //     }, () => reject(new Error('Geolocation is not supported by this browser.')))
    // })
        
    navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}
getPosition().then(position => console.log(position)).catch(err => console.log(err)) ;

const whereAmI = function(){
    getPosition().then(position => {
        const {latitude, longitude} = position.coords;
        return fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`)
    })
    .then(response => {
        if(!response.ok) throw new Error(`Too many request was made in a second`) ;
        console.log(response)
        return response.json()
    })
    .then(data => {
        console.log(data);
        console.log(`You are in ${data.city}, ${data.country}`)
        return fetch(`https://restcountries.com/v2/name/${data.country}`)
    })
    .then(response => {
        if(!response.ok) {
            throw new Error(`Country Not Found ${response.status} ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        renderCountry(data[0]) 
    })
    .catch(err => {
        console.log(`Error: ${err.message}`)
    })
    .finally(() => {
        countriesContainer.style.opacity = 1;
    })
} ;

btn.addEventListener('click', whereAmI) */
/* const imgContainer = document.querySelector('.images');

const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds * 1000)
    })
};

const createImage = function (imgPath) {
    return new Promise(function(resolve, reject){
        const img  = document.createElement('img') ;
        img.src = imgPath ;
        img.addEventListener('load', function () {
            imgContainer.appendChild(img);    
            resolve(img)
        })
        img.addEventListener('error', function () {
            reject(new Error('Something Unexpected Occur'))
        })
    })
};
let currentImg;

// createImage(``)
createImage(`img/img-1.jpg`)
.then(img => {
    currentImg = img ;
    console.log('Image 1 loaded') ;
    return wait(2)
})
.then(() =>{
    currentImg.style.display ='none'
    return createImage(`img/img-2.jpg`)
} )
.then((nextImg) => {
    currentImg = nextImg ;
    console.log('Image 2 loaded') ;
    return wait(2)
})
.then(() =>{
    currentImg.style.display ='none'
} )
.catch(err => console.error(`Error: ${err.message}`))

 */

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
};

const whereAmI = async function(){
    // Geolocation
    const {latitude, longitude} = await getPosition() ;

    // Reversing geocoding
    const geoResponse = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`) ;
    const geocodeData = await geoResponse.json() ;

    // Fetching country data
    const response = await fetch(`https://restcountries.com/v2/name/${geocodeData.standard.countryname}`) ;
    const data = await response.json() ;
    renderCountry(data[0]) ;
};
whereAmI();
console.log('FIRST') ;