// document.body.addEventListener("click", changeClick);
document.body.addEventListener("click", selectButton);
const darkMode = document.querySelector("#button2");
const bgmain = document.querySelector(".better");
function selectButton(event){
    if(event.target.textContent === "New Note")
    {
        console.log("a")
    }
    else if(event.target.textContent === "Dark Theme")
    {
        darkmode()
        event.target.textContent = "Light Theme"
    }
    else if(event.target.textContent === "Save")
    {
        console.log("b")
    }
    else if(event.target.textContent === "Cancel")
    {
        console.log("c")
    }
}

function changeClick(){
    
    if (darkMode.textContent === "Dark Theme")
    {
        
        darkMode.textContent = "Light Theme"
    }
    else{
        darkMode.textContent = firstText;
        
    }
}
function darkmode(){
    bgmain.classList.toggle("bg-color");
}

