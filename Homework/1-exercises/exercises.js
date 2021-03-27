/**
 *
 * For each of the names in the array passed into this function
 *
 * - Add a <h1> tag to the website containing the name of the person
 * - Add a <h2> tag to the website containing the job of the person
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 * <div id="content">
 *      <h1>{Name Here}</h1>
 *      <h2>{Job Here}</h2>
 *      .....
 * </div>
 */

 function exerciseOne(arrayOfPeople) {
  let content = document.querySelector("#content");
 
  arrayOfPeople.forEach((item) => {
  //  console.log(item.name, item.job);
    let h1 = document.createElement("h1");
    content.appendChild(h1);
    h1.innerHTML  +=  item.name;

    let h2 = document.createElement("h2");
    content.appendChild(h2);
    h2.innerHTML  +=  item.job;
 
  });
}



/**
 *
 * Create a list of shopping items. You should use an unordered list.
 *
 * All of your HTML should go inside the Div tag with the id "content".
 *
 */
function exerciseTwo(shopping) {
  //Write your code in here
  let ul = document.createElement("ul");
  let content = document.querySelector("#content").appendChild(ul);
  shopping.forEach((item) => {
    //console.log(item);
    let li = document.createElement("li");
    ul.appendChild(li);
    li.innerHTML +=  item;
  });

}

/**
    I'd like to display my three favorite books inside a nice webpage!

    const books = [
        {
            title: "The Design of Everyday Things",
            author: "Don Norman",
            alreadyRead: false
        },
        {
            title: "The Most Human Human",
            author: "Brian Christian",
            alreadyRead: true
        },
        {
            title: "The Pragmatic Programmer",
            author: "Andrew Hunt",
            alreadyRead: true
        }
    ];




    Iterate through the array of books.
    - For each book, create a <p> element with the book title and author and append it to the page.
    - Use a <ul> and <li> to display the books.
    - Add an <img> to each book that links to a URL of the book cover.
    - Change the style of the book depending on whether you have read it (green) or not (red).

    The end result should look something like this: https://hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
**/

function exerciseThree(books) {
  //Write your code in here
  //let ul = document.createElement("ul");
    books.forEach((item) => {
    //console.log(item);
    let p = document.createElement("p");
   // let li = document.createElement("li");
    let content = document.querySelector("#content").appendChild(p);
   // ul.appendChild(li);
    content.innerHTML +=  item.title  + " - " + item.author + " "  ;

   
    
    let image = document.createElement('img');
    image.src= item.url;
    content.appendChild(image);
  
    if(item.alreadyRead){
        content.style.backgroundColor = "Green";
    }else{
      content.style.backgroundColor = "Red";
    }
});
}
//
//
//
//
// DO NOT EDIT BELOW HERE
//
//
//
//

let people = [
  { name: "Chris", job: "Teacher" },
  { name: "Joanna", job: "Student" },
  { name: "Boris", job: "Prime Minister" }
];

exerciseOne(people);

let shopping = ["Milk", "Break", "Eggs", "A Dinosaur", "Cake", "Sugar", "Tea"];

exerciseTwo(shopping);

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "./images/designeveryday.jpg"
    
  },
  
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "./images/mosthuman.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "./images/theprogramtic.jpg"
  }
  
];

exerciseThree(books);
