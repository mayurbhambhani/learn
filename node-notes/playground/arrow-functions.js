let square = (x) => {
    let result = x * x;
    return result;
}

// for one statement return and braces are not required
let square2 = (x) => x * x;

//for one arg parenthesis are not required
let square3 = x => x * x;

let user = {
    name: "Mayur",
    sayHi: () => {
        console.log(arguments);
        console.log(`say hi ${this.name}`);
    },
    sayHiAlt() {
        console.log(arguments);
        console.log(`say hi ${this.name}`);
    }
}

console.log(square(3));
console.log(square2(3));
console.log(square3(3));
user.sayHi(1,2,3);
user.sayHiAlt(1,2,3);   