
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

// notes or notes.js both will work
const notes = require("./notes.js");

let add = () => {
    let note = notes.addNote(argv.title, argv.body);
    notes.logNote("added  note =>", note, "Note with this title is already added. Please try with a different title.");
};

let list = () => {
    let all_notes = notes.getAll();
    console.log(`printing ${all_notes.length} notes`);
    all_notes.forEach((note) => {
        notes.logNote("===========", note, "undefined note");
    });

};

let read = () => {
    let note = notes.getNote(argv.title);
    notes.logNote("fetched  note =>", note, "Note with this title doesnt exist.");
};

let remove = () => {
    let note = notes.removeNote(argv.title);
    notes.logNote("removed  note =>", note, "Note with this title doesnt exist.");
};

let titleOptions = {
    "describe": "Title of the note",
    "demand": true,
    "alias": "t"
};
let bodyOptions = {
    "describe": "Body of the note",
    "demand": true,
    "alias": "b"
};

const argv = yargs
    .command("add", "adds a note", {
        "title": titleOptions,
        "body": bodyOptions
    })
    .command("read", "displays a note", {
        "title": titleOptions
    })
    .command("remove", "removes a note", {
        "title": titleOptions
    })
    .command("list", "lists all notes")
    .help()
    .argv;

if (argv._.length === 0) {
    console.log("no command found. Try --help");
    return;
}
let command = argv._[0];

if (command === "add") {
    add();
} else if (command === "list") {
    list();
} else if (command === "read") {
    read();
} else if (command === "remove") {
    remove();
} else {
    console.log("unrecognizable command");
}