//array

const myArry = [0,1,2,3,4,5]
const myHeros = ["thor","black-panther"]

const oldArray  = new Array(1, 2 ,3 ,4)

//console.log(myArry[1]);

// Array Methods

// myArry.push(6)
// myArry.pop(6)

// myArry.unshift(9) // can add the values in started element of array
// myArry.shift() // add zero of starting element

// console.log(myArry.includes(9));// include use for the ask the qustion 
// console.log(myArry.indexOf(3));

const newArr = myArry.join()//coverting in string and bind 
console.log(newArr);

//slice , splice

console.log("A",myArry);
const myn1 = myArry.slice(1,3)
console.log(myn1);

console.log("B",myArry);
const myn2 = myArry.splice(1,3)
console.log("C",myArry);
console.log(myn2);