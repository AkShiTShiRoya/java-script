function x() {
    for(let i=1 ; i<=5 ; i++)
    {

        function close(x){
            setTimeout(function(i){
                console.log(x);
    
                
            }, x *  1000);
        }
        close(i);
       
    }
    
    console.log("helllo.....");
    
}
x();    