function x(){
        setTimeout (function(){
            console.log(x);
            
        }  , 3000);
        console.log("hello ....");
        
}

x();

