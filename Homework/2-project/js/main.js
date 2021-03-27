// ****** Part 1 ****** //
let btn = document.querySelector("#blueBtn");
btn.addEventListener("click", changeBlueBtnColor);

function changeBlueBtnColor(){
    let jumbo = document.querySelector(".jumbotron");
    jumbo.style.backgroundColor = `#588fbd`;

    let donateBike = document.querySelector(".btn.btn-primary.btn-lrg");
    donateBike.style.backgroundColor = `#ffa500`;

    let volunteer = document.querySelector(".btn.btn-secondary");
    volunteer.style.backgroundColor = "Black";
    volunteer.style.color = `white`;
}



let orangeBtn = document.querySelector("#orangeBtn");
orangeBtn.addEventListener("click", changeOrangeBtnColor);

function changeOrangeBtnColor(){
    let jumboBtn = document.querySelector(".jumbotron");
    jumboBtn.style.backgroundColor = `#f0ad4e`;

    let donateBike2 = document.querySelector(".btn.btn-primary.btn-lrg");
    donateBike2.style.backgroundColor = `#5751fd`;

    let volunteer2 = document.querySelector(".btn.btn-secondary");
    volunteer2.style.backgroundColor = `#31b0d5`;
    volunteer2.style.color = `white`;
}


let greenBtn = document.querySelector("#greenBtn");
greenBtn.addEventListener("click", changeGreenBtnColor);

function changeGreenBtnColor(){
    let jumboBtn3 = document.querySelector(".jumbotron");
    jumboBtn3.style.backgroundColor = `#87ca8a`;

    let donateBike3 = document.querySelector(".btn.btn-primary.btn-lrg");
    donateBike3.style.backgroundColor = `Black`;

    let volunteer3 = document.querySelector(".btn.btn-secondary");
    volunteer3.style.backgroundColor = `#8c9c08`;
}



// ****** Part 2 ****** //
let submitButton = document.getElementsByTagName("button");
//console.log(submitButton);

let getLastElement = submitButton[submitButton.length-1];

getLastElement.addEventListener("click", validationForm);

function validationForm(){
    //document.body.style.backgroundColor = "Red";
   // console.log("working");
let checkEmail = document.getElementById("exampleInputEmail1");
//console.log(checkEmail.value.length > 0);


let checkName = document.querySelector("#example-text-input");

let describeYourSelf = document.getElementById("exampleTextarea");

if(checkEmail.value.length > 0 && checkEmail.value.includes('@') && checkName.value.length > 0 && describeYourSelf.value.length > 0){
    alert("Thank you for filling.");
}else{
    checkEmail.style.backgroundColor = "Red";
    checkName.style.backgroundColor = "Red";
    describeYourSelf.style.backgroundColor = "Red";
}
checkEmail.value = '';
checkName.value = '';
describeYourSelf = '';

}

