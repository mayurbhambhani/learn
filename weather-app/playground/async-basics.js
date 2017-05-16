console.log("Starting weather app");

setTimeout(() =>{
    console.log("inside of callback!");
}, 2*1000);

setTimeout(() =>{
    console.log("second timeout");
}, 0);

console.log("Finishing up");