// let a = 300

// if(true){
//     let a = 10
//     const b =20

//     console.log("inner values is :",a);
    
// }

// console.log(a);

function one() {
    const username = "akshit"

    function two(){
        const website ="google.com"
        console.log(username,website);
        
    }
    two()
}
//one()

if (true){
    const username ="akshit shiroya"
    if(username === "akshit shiroya"){
        const website="  google.com"
       // console.log(username + website);
        
    }
    // console.log(username);
    
}
// console.log(username);



//+++++++++++++++++++++++ interesting +++++++++++++++++++++

function addone (number){
    return number +1
}
number(6)

const addTwo=function(number){
    return number +2

}
addTwo(6)