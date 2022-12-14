document.body.addEventListener("click", selectButton);
const bgaside = document.querySelector("aside");
const bgmain = document.querySelector(".better");
const newButton = document.querySelector(".button1");
const darkButton = document.querySelector(".button2");
const saveButton = document.querySelector(".button3");
const cancelButton = document.querySelector(".button4");
const textBox = document.querySelector(".myText");
function selectButton(event){
    if(event.target.textContent === "New Note")
    {
        show();
        clearTxt();
    }
    else if(event.target.textContent === "Dark Theme")
    {
        changeClick();
        darkmode();
    }
    else if(event.target.textContent === "Light Theme")
    {
        changeClick();
        darkmode();
    }
    else if(event.target.textContent === "Save")
    {
        saveNote();
    }
    else if(event.target.textContent === "Cancel")
    {
        hide();
    }
}

function changeClick(){
    const firstText = "Dark Theme"
    if (darkButton.textContent === "Dark Theme")
    {
        
        darkButton.textContent = "Light Theme"
    }
    else{
        darkButton.textContent = firstText;
        
    }
}
function darkmode(){
    bgaside.classList.toggle("aside_theme");
    bgmain.classList.toggle("main_theme");
    newButton.classList.toggle("b1_theme");
    darkButton.classList.toggle("b2_theme");
    textBox.classList.toggle("text_theme");
    saveButton.classList.toggle("b3_theme");
    cancelButton.classList.toggle("b4_theme");
}
function hide() {
    cancelButton.classList.add("toggleItems");
    saveButton.classList.add("toggleItems");
    textBox.classList.add("toggleItems");
}
function show() {
    cancelButton.classList.remove("toggleItems");
    saveButton.classList.remove("toggleItems");
    textBox.classList.remove("toggleItems");
}
function clearTxt() {
    textBox.value = "";
}
let notesArray = [{title: "note one", body: "This is my first note"},
                  {title: "note two", body: "This is my second note"}]
function saveNote() {
    const noteTitle = prompt("Please enter a title...");
    const inputNote = document.querySelector(".myText");
    let note ={
        title : noteTitle,
        body : inputNote.value,
    }
noteTitle.value = "";
inputNote.value = "";
updatedNotes(note);
notesArray.push(note);
console.log(notesArray);
}
function updatedNotes(note){
    const notelist = document.querySelector(".notes");
        const listItem = document.createElement("li");
        listItem.textContent = `${note.title}`;
        notelist.appendChild(listItem);
        listItem.classList.add("square");
}
const noteClick = document.querySelector(".notes");
noteClick.addEventListener("click", displayNote);
function displayNote(event){
    for(let printNote of notesArray){
        if(event.target.textContent === printNote.title){
            document.getElementById("textBox").value = printNote.body;
            console.log(printNote.body);
    }
}
}

