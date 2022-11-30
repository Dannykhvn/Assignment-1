document.body.addEventListener("click", selectButton);
const darkButton = document.getElementById("button2");
const bgmain = document.querySelector(".better");
const bgaside = document.querySelector("aside");
function selectButton(event){
    if(event.target.textContent === "New Note")
    {
        console.log("a")
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
        console.log("b")
    }
    else if(event.target.textContent === "Cancel")
    {
        console.log("c")
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
    bgmain.classList.toggle("bg-color");
    darkButton.classList.toggle("dark");
    bgaside.classList.toggle("dark");
}

