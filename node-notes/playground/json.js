console.log("running json.js");

const fs= require("fs");


let noteJson = {
    "title" : "First note",
    "body"  : "This is my first note.",
};

fs.writeFileSync("notes.json",JSON.stringify(noteJson));

let notesJsonString=fs.readFileSync("notes.json");

let notesFromFile=JSON.parse(notesJsonString);

console.log(typeof notesFromFile);
console.log(notesFromFile);

