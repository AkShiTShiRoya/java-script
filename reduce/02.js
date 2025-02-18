const user=[
    { firstname : "Akshit", lastname: "patel" ,  age : 23},
    { firstname : "om", lastname: "patel" ,  age : 23},
    { firstname : "john", lastname: "carter" ,  age : 45},
    { firstname : "harsh", lastname: "vala" ,  age : 75},
    { firstname : "dhurvish", lastname: "shah" ,  age : 33},
    
];
   const total=  user.reduce((acc,curr)=> acc+curr.age,0);
    console.log(total);


//     { firstname : "Akshit", lastname: "patel" ,  age : 23},
//     { firstname : "om", lastname: "patel" ,  age : 23},
//     { firstname : "john", lastname: "carter" ,  age : 45},
//     { firstname : "harsh", lastname: "vala" ,  age : 75},
//     { firstname : "dhurvish", lastname: "shah" ,  age : 33},
    
// ];
//    const total=  user.reduce((acc,curr)=> acc+curr.age,0);
//     console.log(total);
// const user = [
//     { firstname: "Akshit", lastname: "patel", age: 23 },
//     { firstname: "om", lastname: "patel", age: 23 },
//     { firstname: "john", lastname: "carter", age: 45 },
//     { firstname: "harsh", lastname: "vala", age: 75 },
//     { firstname: "dhurvish", lastname: "shah", age: 33 },
// ];

// const total = user.reduce((acc, currentUser) => acc + currentUser.age, 0);
// console.log(total);
console.log("================");
