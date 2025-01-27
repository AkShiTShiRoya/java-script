const user=[
    { firstname : "Akshit", lastname: "patel" ,  age : 23},
    { firstname : "om", lastname: "patel" ,  age : 23},
    { firstname : "john", lastname: "carter" ,  age : 45},
    { firstname : "harsh", lastname: "vala" ,  age : 75},
    { firstname : "dhurvish", lastname: "shah" ,  age : 33},
    
];

const output= user.reduce(function(accu,curr) {
    if(accu[curr.age]){
        accu[curr.age] = ++accu [curr.age]; 
    }else{
        accu[curr.age]=1;
    }
    return accu;
}, {});

console.log(output);
