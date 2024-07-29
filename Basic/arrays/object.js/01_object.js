//Sibgle ton
// litreals

const mySyb = Symbol("Key1")

const JsUse={
    name : "akshit shiroya",
    "full name" : "akshit k shiroya",
    [mySyb] : "myKey1",
    age : 18,
    location : 'india',
    email : "akshier@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday ", "saturday"]
}

// console.log(JsUse["full name"]);
// console.log(JsUse.name);
// console.log(JsUse);
// console.log(JsUse[mySyb]);


///chnage the values in objects
JsUse.email = "akshit@upi.com"
//Object.freeze(JsUse) // freeze can be used for the value freeze 
JsUse.email = "jay@gmail.com"
//console.log(JsUse);

JsUse.greeting = function(){
    console.log("Hello Good Morning ");
}

console.log(JsUse.greeting());


JsUse.greetingTwo = function(){
    console.log(`hello JS suer, ${this.name}`);
}

console.log(JsUse.greetingTwo());