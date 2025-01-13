// Function statemrnt  or functions declarations 

function a() {
    console.log("a is called");

}
a();

// Functions Declarations
var a = function b() {
    console.log("b is called");

}
a();

// Annonymous Functions is without any name is called 

//  function(){

//  }

// named functons expressions

var b = function xyz() {
    console.log("named functions expression is called");

}
b()

// First class functions
const b = function (param1) {
    console.log("helloo");
    return function xyz() {

    }

}

console.log(b);


