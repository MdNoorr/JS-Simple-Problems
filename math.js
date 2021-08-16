var number = 12
console.log(number)


var number2 = 13.45
console.log(Math.ceil(number2)) // 14
console.log(Math.floor(number2)) // 13
console.log(Math.round(number2)) // 13

// Random number Generator
console.log(Math.floor(Math.random() * 10)) // Random number between 0 and 10;


for (var i = 0; i < 10; i ++){
    var number = Math.random() * 10
    var rounded = Math.round(number)
    console.log(rounded)
}