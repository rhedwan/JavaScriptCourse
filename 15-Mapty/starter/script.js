'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

if(navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        console.log(`https://www.google.com.ng/maps/@${latitude},${longitude}`)

        const coords = [latitude, longitude]

        const map = L.map('map').setView(coords, 14);
        // console.log(map);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Map EventListerner
        map.on('click', function(mapEvent){
            console.log(mapEvent);
            const { lat, lng} = mapEvent.latlng;
            L.marker([lat, lng]).addTo(map)
            .bindPopup(
                // Overwrting some default values/behaviour
                // https://leafletjs.com/reference.html#popup
                L.popup({
                    maxWidth: 250,
                    minWidth:100,
                    autoClose:false,
                    closeOnClick:false,
                    className : 'running-popup'
                })
            )
            .setPopupContent(`Workout`)
            .openPopup();
        } );
    }, function () {
        alert('Geolocation is not supported by this browser.');
    } );