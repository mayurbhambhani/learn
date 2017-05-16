const fs = require("fs");




let addNote = (title, body) => {
    let notes = fetchNotes();
    let note = createNote(title, body);
    let unique = isUnique(notes, note);
    if (unique) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

let getAll = () => {
    return fetchNotes();
};

let getNote = (title) => {
    let notes = fetchNotes();
    return findNote(title, notes);
};

let removeNote = (title) => {
    let notes = fetchNotes();
    let note = findNote(title, notes);
    if (note) { }
    saveNotes(notes.filter((note) => note.title !== title));
    return note;
};

let logNote= (pre_note_msg,note,undefined_note_msg) =>{
    if (note) {
        console.log(pre_note_msg);
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log(undefined_note_msg);
    }
};

let findNote = (title, notes) => {
    notes = notes.filter((note) => note.title === title);
    if (notes.length !== 0) {
        return notes[0];
    }
}


let fetchNotes = () => {
    let fileName = "./notes-data.json";
    try {
        return JSON.parse(fs.readFileSync(fileName));
    } catch (error) {
        return [];
    }
}

let saveNotes = (notes) => {
    let fileName = "./notes-data.json";
    fs.writeFileSync(fileName, JSON.stringify(notes));
}

let isUnique = (notes, new_note) => {
    let duplicateNotes = notes.filter((note) => new_note.title === note.title);
    return duplicateNotes.length === 0;
}

let createNote = (title, body) => { return { title, body } };

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};
