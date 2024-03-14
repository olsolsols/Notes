console.log('Printing App.js');
showNotes(); // Whenever the page is loaded this function will be called (including displaying all the notes)
// We would add an event listener to "'Add Note' Button.
// When a user adds a note, add it to the local sotrage
// ----trying to do how to displ;ay there are no notes to display
// emptyNote();
// function emptyNote() {
//   let notes = localStorage.getItem("notes");
//   if(notes == null){
//      notesObj = [];}
//      else{
//   console.log('Nothing to display');
//      }
// }


let addButton = document.getElementById('addBtn');
addButton.addEventListener("click", function (params) {
  let addText = document.getElementById('addTxt');
  let addTitle = document.getElementById('addTitle');
  let notes = localStorage.getItem("notes");

  if(notes == null){
    notesObj = []; // blank array
  }
  else{
    notesObj = JSON.parse(notes);
  }
  // I am going to store the notes in an array
// title

let myObj = {
  title: addTitle.value,
  text: addText.value
};

notesObj.push(myObj);
addText.value = '';
addTitle.value = '';

 // notesObj.push(addText.value);

  // we will be inserting the notes to the local storage

localStorage.setItem("notes", JSON.stringify(notesObj));
// addText.value = ""; // empty string. the text area will get clear when you click Add note button.
// We have convered into string as we need to set as "Strings" in the local Storage
console.log(notesObj);
 showNotes();
})

// The purpose of below function is to show/display notes ON THE SCREEN
function showNotes(){
  let notes = localStorage.getItem("notes");

  if(notes == null){
    notesObj = []; // blank array
  }
  else{
    notesObj = JSON.parse(notes);
  }

  let html = ""; // blank empty string
  //In the below function - element is the 'content' and 'index' represents a number, starts from 0.
  notesObj.forEach(function (element, index){
    // html = html +
    html +=`
    <div class="card row my-2 mx-2 noteCard" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title" id="addTitle">${element.title}</h5>
            <p class="card-text">${element.text}</p>
            <button id= "${index}" onclick="delBtn(this.id)" class="btn btn-primary" >Delete Note</button>
        </div>
        </div>
    `;
  })

  let notesElm = document.getElementById('notes');
  if(notesElm.length !=0){
  notesElm.innerHTML = html;
  }
}

// delete button
function delBtn(index) {
  
  let notes = localStorage.getItem("notes");

  if(notes == null){
    notesObj = []; // blank array
  }
  else{
    notesObj = JSON.parse(notes);
  }

  notesObj.splice(index, 1); // removing the note with specific index
  localStorage.setItem("notes", JSON.stringify(notesObj));
showNotes(); 
}

// let emptyNotes = document.getElementById('notes');
// // {
// //   if(notes == null){
// //    notesObj = [];
// //   }
// //   console.log('Nothing to display');
// // }


// Creating the Search function

let searchTxt = document.getElementById("search");
// console.log(search);
let searchTitle = document.getElementById("search");

searchTxt.addEventListener("input", function(){
  let inputVal = searchTxt.value;
  // alert(inputVal);

  
  let noteCard = document.getElementsByClassName("noteCard");
Array.from(noteCard).forEach(function (element){
  let cardText = element.getElementsByTagName("p")[0].innerText;
  let cardTitle = element.getElementsByTagName("h5")[0].innerText;

if  (cardText.toLowerCase().includes(inputVal)||
cardTitle.toLowerCase().includes(inputVal))
{
  element.style.display = 'block';
}
else{
  element.style.display = 'none';
}
})
})

// You can extend this project by adding these features:

// a) Add a 'title' to the notes instead of 'Note 1', 'Note 2', Note 3' and so on....
// b) Improve the SEARCH functionlity == by title, by notes
// c) Mark some notes as IMPORTANT (for example, a button next to Delete Note, let's say - 'IMP' that will mark the note as important like put a RED colour border so that it's easily accessible. )

