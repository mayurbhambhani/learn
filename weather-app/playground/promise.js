console.log("started promise app.")

// let x = () => {
//     console.log("This should never be printed");
// }
// let somePromise = new Promise((resolve, reject) => {
//     // execute your logic. on the basis of your logic decide whether promise is resolved or rejected.

//     setTimeout(() => {
//         console.log("resolving promise");
//         resolve("resolved");
//         // console.log("rejecting promise")
//         // reject("rejected");
//     }, 2 * 1000);




// });

// console.log("registering callback for success")


// console.log("registering callback for failure");
// somePromise.catch((msg) => {
//     console.log("Promise task executed with status", msg);
// });

// console.log("registering another callback for failure");
// somePromise.catch((msg) => {
//     console.log("2:Promise task executed with status", msg);
// });

// somePromise.then((msg) => {
//     console.log("Promise task executed with status", msg);
// }, (errorMsg) => {
//     console.log("handling error", errorMsg);
// });




/*The promise es executed as soon as the constructor is called. It has two arguments, resolved and rejected.Both are functions
Resolved calls whatever function has been passed to then of the promise created by the promise constructor.
Rejected calls whatever function has been passed to catch of the promise created by the promise constructor.
Execute callbacks from promise and call resolve/rejected from the callbacks
then and catch can be called multiple times with different callbacks. All callbacks will be called one by one
when promise is executed. They will be called in the order of registration.

Inside the promise code the first call to a resolve or a reject will be honored. rest would be ignored.
*/

var asyncAdd = (a, b) => {
    console.log("creating and returning promise");
    return new Promise((resolve, reject) => {
        // execute your logic. on the basis of your logic decide whether promise is resolved or rejected.

        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                // console.log("adding ", a, b);
                // let sum = a + b;
                // console.log(`${a}+${b}=${sum}`);
                resolve(a + b);
            } else {
                reject("Both arguments must be numbers");
            }
        }, 2 * 1000);




    });
};
console.log("calling async add");


console.log("registering callback for add");
asyncAdd(3, 7).then((sum) => {
    console.log(sum);
    return asyncAdd(sum, '32');
}).then((sum) => {
    console.log("second")
    console.log(sum);
}).catch((errorMsg) => {
    console.log(errorMsg);
});


console.log("finishing promise app.")