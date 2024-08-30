// flasy values

//false , 0 , -0, BigInt 0n , "",  null , undefined , NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}

const emptyobj ={}

if(Object.keys(emptyobj).length ===0){
    console.log("object is empty");
    
}

// Nullish Coalescing Operator (??) : null undefined

let val1;

val1 = 5 ?? 10;
// val1 = undefined ?? 10;

console.log(val1);


// Terniary operator

const iceCreanPrice =100

iceCreanPrice <=80 ? console.log("price is less than 80") : console.log("more than 80")


