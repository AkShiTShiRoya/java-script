const user ={
    username : "akshit shiroya",
    price : 999,

    welcomeMessga: function(){
        // console.log(`${this.username} , welcome to the website..`);
        
    }
}
user.welcomeMessga()
user.username="jay shah"
user.welcomeMessga()

// console.log(this);

// function chai(){
//     let username ="akshit shiroya "
//     console.log(this.username);
//     // this keyword work only in the object not in the function 
// }
// chai()


// const chai = function () {
//     let username = "Akshit"
//     console.log(this.username);
// }



// const chai =() => {
//     let username = " akshit Shiroya"
//     console.log(this.username);
    
// }
// chai()

// const addTwo =(num1 , num2)=>{
//     return num1+num2
// }


// const addTwo=(num1 , num2)=> num1+num2
// const addTwo=(num1 , num2)=> (num1+num2)
const addTwo=(num1 , num2)=> ({username:"akshit"})

console.log(addTwo(6,7))