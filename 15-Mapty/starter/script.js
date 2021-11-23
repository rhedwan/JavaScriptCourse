'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


class Workout {
    date = new Date();
    id = (Date.now() + '').slice(-10);
    constructor(coords, distance, duration) {
        this.coords = coords; // [this.lat, this.lng] = coords;
        this.distance = distance; //in Km
        this.duration = duration; //in min
    }
}

class Running extends Workout {
    type = 'running' ;
    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration);
        this.cadence = cadence ;
        this.calcPace();
    }

    calcPace(){
        // min/km
        this.pace = this.duration / this.distance;
        return this.pace ;
    }
}

class Cycling extends Workout {
    type = 'cycling' ;
    constructor(coords, distance, duration, elevationGain){
        super(coords, distance, duration);
        this.elevationGain = elevationGain ;
        this.calcSpeed();
    }

    calcSpeed(){
        this.speed = this.distance / this.duration / 60 ;
        return this.speed ;
    }
}

// const run1 = new Running([39, -12], 5, 30, 178);
// const cycling1 = new Cycling([48.856614, 2.352222], 127, 5, 523);
// console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// APPLICATION ARCHITECTURE
class App {
    #map ;
    #mapEvent ;
    #workouts = [];
    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }
    _getPosition() {
        if(navigator.geolocation) 
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Geolocation is not supported by this browser.');
            });
    }
    _loadMap(position) {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        console.log(`https://www.google.com.ng/maps/@${latitude},${longitude}`)

        const coords = [latitude, longitude]
        
        console.log(this) ;
        this.#map = L.map('map').setView(coords, 14);
        // console.log(map);

        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // Map EventListerner => handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }
    _showForm(mapE){
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();

    }
    _toggleElevationField(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden') ;
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden') ;
    }
    _newWorkout(e){ 
        e.preventDefault();

        const validInputs = (...inputs) => inputs.every(input => Number.isFinite(input));
        const allPostive = (...inputs) => inputs.every(input => input > 0);
        // Get data from form
        const type = inputType.value ;
        const distance = +inputDistance.value ;
        const duration = +inputDuration.value ;
        const {lat, lng} = this.#mapEvent.latlng ;
        let workout ;
        // If workout running, create running object
        if(type === 'running') {
            const cadence = +inputCadence.value ;

            // Check if data is valid
            // if(
            //     !Number.isFinite(distance) || 
            //     !Number.isFinite(duration) ||
            //     !Number.isFinite(cadence)
            //     ) return alert('Inputs have to be positive numbers!') ;
            
            if(
            !validInputs(distance, duration, cadence) || 
            !allPostive(distance, duration, cadence)
            ) return alert('Inputs have to be positive numbers!😏😏') ;
            workout = new Running([lat, lng], distance, duration, cadence);
        }
        
        // If workout cycling, create cycling object
        if(type === 'cycling') {
            const elevation = +inputElevation.value ;
            // Check if data is valid
            if(
            !validInputs(distance, duration, elevation) || 
            !allPostive(distance, duration)
            ) return alert('Inputs have to be positive numbers!') ;
            workout = new Cycling([lat, lng], distance, duration, elevation);
        }


        // Add new object to workout array
        this.#workouts.push(workout);
        console.log(workout);
        console.log(this.#workouts)

        // Render workout on map as marker
        this.renderWorkoutMarker(workout);

        // Render workout on list


        // Clear input fields
        inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '' ;
        
    }

    renderWorkoutMarker(workout){
        // Render workout on map as marker
        // Display the marker

        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(
            // Overwrting some default values/behaviour
            // https://leafletjs.com/reference.html#popup
            L.popup({
                maxWidth: 250,
                minWidth:100,
                autoClose:false,
                closeOnClick:false,
                className : `${workout.type}-popup`
            })
        )
        .setPopupContent('workout')
        .openPopup();
    }
}

const app = new App();

    