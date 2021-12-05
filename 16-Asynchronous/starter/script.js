'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const request = new XMLHttpRequest() ;
request.open('GET', 'https://restcountries.com/v2/name/nigeria');
request.send();
console.log(request.responseText);

request.addEventListener('load', function(){
    console.log(this.responseText);
    const data  = JSON.parse(this.responseText);
    console.log(data);
});