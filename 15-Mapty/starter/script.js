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


class App {
    constructor() {

    }
    _getPosition() {}
    _loadMap() {}
    _showForm(){}
    _toggleElevationField(){}
    _newWorkout(){}
}

let map, mapEvent;
if(navigator.geolocation) 
    navigator.geolocation.getCurrentPosition(function (position) {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        console.log(`https://www.google.com.ng/maps/@${latitude},${longitude}`)

        const coords = [latitude, longitude]

        map = L.map('map').setView(coords, 14);
        // console.log(map);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Map EventListerner => handling clicks on map
        map.on('click', function(mapE){
            mapEvent = mapE;
            form.classList.remove('hidden');
            inputDistance.focus();
            
        } );
    }, function () {
        alert('Geolocation is not supported by this browser.');
    } );

    form.addEventListener('submit', function(e){
        // Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '' ;
        

        e.preventDefault();
        // Display the marker
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
    });
    inputType.addEventListener('change', function(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden') ;
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden') ;
    });