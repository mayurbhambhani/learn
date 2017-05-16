let getUser = (id, callback) => {
    let user = {
        id: 31,
        name: "Mayur"
    };
    setTimeout(() => {
        callback(user);
    }, 3 * 1000);
    //callback(user);
};
console.log("call for user");
getUser(31, (user) => {
    console.log("got user:",user);
});
console.log("Finishing up the app")

