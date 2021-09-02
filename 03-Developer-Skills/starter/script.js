// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// if(x === 23) console.log('me')

// console.log();

/* 
var num = prompt("Input a number: ")  ;
var total = 0 ;
function addNum(num){
    for (var i=0 ; i <=num ;i++ ){
        total += i
    }
    return  total
}

console.log(addNum(num)) */
/* 

const calcTempAmplitude = function (temps) {

    let max = temps[0] ;
    let min = temps[0] ;

    for( let i =1; i < temps.length; i++){
        
        const curTemp = temps[i] ;

        if (typeof curTemp !== 'number')  continue ;
        if (curTemp > max ) max = curTemp ;
        if (curTemp <  min ) min = curTemp ;

    }
    console.log(max, min) ;
    // `the max is ${max} and the min ${min}`;
    return max - min 
} ;

// max = 3 using first value in the array .

const amplitude  = calcTempAmplitude([3, 7, 4, -2, 1, 12])
console.log(amplitude) */


/* 
const calcTempAmplitudeNew = function (t1, t2) {
    const temps = t1.concat(t2)

    let max = temps[0] ;
    let min = temps[0] ;

    console.log(temps)
    for( let i =1; i < temps.length; i++){
        
        const curTemp = temps[i] ;

        if (typeof curTemp !== 'number')  continue ;
        if (curTemp > max ) max = curTemp ;
        if (curTemp <  min ) min = curTemp ;

    }
    console.log(max, min) ;
    // `the max is ${max} and the min ${min}`;
    return max - min 
} ;

const amplitudeNew  = calcTempAmplitudeNew([3, 7, 4, -2, 1, 12], [1,2,3,3,0, 151])
console.log(amplitudeNew) */


const measureKelvin =  function () {
    const measurement = {
        type : 'temp' ,
        unit : 'celsius' ,
        value : Number(prompt("Degrees celius: ") )

    } ;

    // console.log(measurement) ;
    console.table(measurement) ;

    // console.log(measurement.value) ;
    // console.warn(measurement.value) ;
    // console.error(measurement.value) ;

    const kelvin = measurement.value +  273 ;
    return kelvin ;

} ;

console.log(measureKelvin())