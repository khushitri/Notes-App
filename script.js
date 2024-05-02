let addButton = document.querySelector(".addNote");
let titleElem = document.getElementById("title");
let descElem = document.getElementById("note");
let container = document.querySelector(".notes-container");
let notesArr = [];


function onClick(e){
    let titleValue = e.target.value;
    let description = e.target.value;
    
    console.log({titleValue, description})
    
    notesArr.push({title: titleValue, desc: description})

    viewNotes()
    
    }

addButton.addEventListener("click", onClick);



function viewNotes(){
    notesArr.forEach((element) => {
        container.innerHTML += `
        <div class = "note">
        <h2> ${element.title}</h2>
        <p>
         ${element.desc}   
        </p>
        <button id= "delete">Delete</button>
        </div>
  `;    
});
}