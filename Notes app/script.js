let addNoteBtn = document.querySelector(".add-note");
let noteBox = document.querySelector(".note-box");
let noteBody = document.querySelector(".note-body");
let noteTittle = document.querySelector(".note-tittle");
let editNote = document.querySelector(".edit-note");
let closeArrow = document.querySelector(".fa-arrow-left");

const allNotes = JSON.parse(localStorage.getItem("allNotes") || "[]");