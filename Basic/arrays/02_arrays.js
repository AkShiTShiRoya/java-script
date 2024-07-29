const marvel_heros =["thor","Ironman","spiderman"]
const dc_heros =["superman","batman","flash"]

//marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


//Concat use for the spred or combine the all element in single string
const new_heros = marvel_heros.concat(dc_heros)
console.log(new_heros);


//....str1 and ...str2 this is second method which perferd most (single element are didved)
const newHeros = [...marvel_heros , ...dc_heros]
console.log(newHeros);

// flat can use for the all array in single array in addition infinity is all the sub array can involve in the operation 
const another_array = [1,2,3,[4,5,6],7,[8,9,[2,34,4]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);


console.log(Array.isArray("Akshit"));
console.log(Array.from("Akshit"));
console.log(Array.from({name :"akshit"}));// important for interview 

let score1 =100
let score2 =200
let score3 =300

console.log(Array.of(score1,score2,score3));

//need to know .is .form . of in details 
