function x(){
    for(let x=1 ; x<=5 ; x++){
        setTimeout ( function(){
            console.log(x);
            
        }, x*1000
    );
    }

    console.log("Akshit......");
    
}
x();