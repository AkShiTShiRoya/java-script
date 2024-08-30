// for

// for(let i=0 ; i<=10 ; i++){
//     const element = i;
//     console.log(element);
    
// }


for (let i=1 ; i<=10 ;i++){
    // console.log(`outer loop values : ${i}`);
    for(j=1;j<=10;j++){
        // console.log(i + '*' + j + '=' + i*j);
        
    }
    
}

let MyArray = ['flash','batman','superman']
for (let index = 0; index < MyArray.length; index++) {
    const element = MyArray[index];
    // console.log(element);
    
    
}

// break and continue

for (let index = 1; index <=10; index++) {
    if(index==5){
        console.log("detected the number");
        break
        
    }
    console.log(`value of index ${index}`);
    
    
}

