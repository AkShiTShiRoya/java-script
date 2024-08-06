// function Name(){
//     console.log("jay shree ram");
//     console.log("jay shree ram");
//     console.log("jay shree ram");
//     console.log("jay shree ram");
//     console.log("jay shree ram");
    
// }
// Name()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
//  addTwoNumbers(2,3)

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result=addTwoNumbers(3,31)

// console.log("Result :",result);

// function loginUserMessage(username){
//     return `${username} just logged in the system`
// }

// console.log(loginUserMessage("akshit"))


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter the username");
//         return
//     }
//     return `${username} just loggged in `
// }

// console.log(loginUserMessage())





function cart(product){
    if(!product){
        return `${product} is empty`
    }
    return "your cart addded succesfully"
    
}

console.log(cart("bag"))