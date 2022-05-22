// store the variables
let detector1 = document.querySelector(".spin1");
let detector2 = document.querySelector(".spin2");
let detector3 = document.querySelector(".spin3");
let detector4 = document.querySelector(".spin4");

let buttonT = document.querySelector(".cTrue");
let buttonF = document.querySelector(".cFalse");

let checkConT = buttonT.textContent;
let checkConF = buttonF.textContent;

function trueFunction() {
    if (checkConT == "true" || checkConF == "false") {
        detector1.classList.toggle("red")
    } else {
        prompt("error");
    }
}

function falseFunction() {
    if (checkConT == "true" || checkConF == "false") {
        detector1.classList.toggle("green")
    } else {
        prompt("error");
    }
}
// question 2
function trueFunction1(){
    if (checkConT == "true" || checkConF == "false") {
        detector2.classList.toggle("red")
    } else {
        prompt("error");
    }
}

function falseFunction1() {
    if (checkConT == "true" || checkConF == "false") {
        detector2.classList.toggle("green")
    } else {
        prompt("error");
    }
}

// question 3
function trueFunction2() {
    if (checkConT == "true" || checkConF == "false") {
        detector3.classList.toggle("red")
    } else {
        prompt("error");
    }
}

function falseFunction2() {
    if (checkConT == "true" || checkConF == "false") {
        detector3.classList.toggle("green")
    } else {
        prompt("error");
    }
}
// question 4

function trueFunction3() {
    if (checkConT == "true" || checkConF == "false") {
        detector4.classList.toggle("red")
    } else {
        prompt("error");
    }
}

function falseFunction3() {
    if (checkConT == "true" || checkConF == "false") {
        detector4.classList.toggle("green")
    } else {
        prompt("error");
    }
}

