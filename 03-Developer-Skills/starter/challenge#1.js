
const printForecast = arr => {

    let str = '' ;
    for(let i = 0; i <= arr.length-1 ; i++){
        // return `${arr[i]} ºC in ${i+1} days`
        str += `... ${arr[i]}ºC in ${i+1} days `
    }
    return  str ;
}

console.log(printForecast([17, 21, 23]))
// console.log(printForecast([12, 5, -5, 0, 4]))