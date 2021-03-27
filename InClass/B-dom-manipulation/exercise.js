/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    


    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/

const elementsList = document.querySelectorAll("p");
console.log(elementsList);
//elementsList.forEach(p => p.style.fontSize = '30px');

const firstElementNode = document.querySelector(".site-header");
console.log(firstElementNode);

const jumboId = document.querySelector("#jumbotron-text");
console.log(jumboId);

const pElement = document.querySelectorAll(".primary-content p");
console.log(pElement);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let btn = document.querySelector("#alertBtn");
btn.addEventListener("click", sayThanks);

function sayThanks() {
  alert("Thanks for visiting Bikes for Refugees!");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
/*
let changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", changeColor);

function changeColor() {
  document.body.style.backgroundColor = "Salmon";
}
*/
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
addTextBtn  mainArticles*/

/*
let changeTextBtn = document.querySelector("#addTextBtn");
changeTextBtn.addEventListener("click", addSomeParagraph);

addSomeParagraph(){
    let addText = document.querySelector("#article");
    addText.appendChild();
} 
*/

document.querySelector("#addTextBtn").addEventListener("click", addSomeText);
function addSomeText() {
  const p = document.createElement("p");
  p.textContent = "When a user clicks the ‘Add some text’ button";
  document.querySelector("#mainArticles").appendChild(p);
}

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
largerLinksBtn */
let linkBtn = document.querySelector("#largerLinksBtn");
linkBtn.addEventListener("click", increaseLinkSize);

function increaseLinkSize() {
  const links = document.querySelectorAll("a");
  links.forEach((a) => (a.style.fontSize = "20px"));
}

/*
Task 6
======

Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/

document.querySelector("#addArticleBtn").addEventListener("click", addText);
function addText() {
    /*
  const p = document.createElement("p");
  p.textContent = "Adding some text here";
  document.querySelector(".form-control").value =   p.textContent;
  document.querySelector("#mainArticles").appendChild(p);
  */

  const p = document.createElement("p");
  const input = document.querySelector('.form-control.addArticle');
  p.textContent = input.value;
  document.querySelector('#mainArticles').appendChild(p);

  // Also clear the text inside the input field
  input.value = " ";
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/

let changeColorBtn = document.querySelector("#bgrChangeBtn");
changeColorBtn.addEventListener("click", changeColor);
let colors = ['blue', 'red', 'purple', 'orange', 'black'];

function changeColor() {
    const currentColor = document.body.style.backgroundColor
    const indexCurrent = colors.findIndex(c => c === currentColor)
    const nextColor = colors[indexCurrent + 1] || colors[0]
    document.body.style.backgroundColor = nextColor
}

