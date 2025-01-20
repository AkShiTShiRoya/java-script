console.log("start");

setTimeout(function cbt(){
    console.log("CB timeout");
    
},5000);

fetch("https://api.netflix.com").then(function cbf(){
    console.log("cbf netflix");
    
});

console.log("end");

