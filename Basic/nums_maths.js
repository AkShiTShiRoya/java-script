const score = 100
console.log(score);

// new Number can use for the specify the values for the numeric 
const balace = new Number(100)
console.log(balace);

console.log(balace.toString().length);

console.log(balace.toFixed(2));


//for the round figure value of the points values 
const newNumber = 33.4534

console.log(newNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++MAths++++++++++++++++++++++++

console.log(Math);

// console.log(Math.abs(-4));// --value to postive value
// console.log(Math.round(4.6));//round figure 
// console.log(Math.ceil(4.2));//ceil is takes upeer value of the given values (if 4.5 == 5)
// console.log(Math.floor(4.2));//floor only takes lower values which are given(if 4.2 == 4)
// console.log(Math.min(4,6,7,8,4,6));
// console.log(Math.max(4,6,7,8,4,6));

console.log(Math.random());
console.log((Math.random()*10) +1);

const min=10
const max=20

console.log(Math.floor(Math.random() * (max - min +1)) + min);