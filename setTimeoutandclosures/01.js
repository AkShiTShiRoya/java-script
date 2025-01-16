// function x(){
//     for(var x=1 ; x<=5 ; x++){
//         setTimeout ( function(){
//             console.log(x);
            
//         }, x*1000
//     );
//     }

//     console.log("Akshit......");
    
// }
// x();



// fix the problems 

function x(){


        for(var x=1 ; x<=5 ; x++){
            function close(x){
            setTimeout ( function(){
                console.log(x);
                
            }, x*1000
        );

    }
    close(x);

    }

    console.log("Akshit......");
    
}
x();