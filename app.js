// get element from the document
const element = document.querySelector("#counterBtn");

// add event listener
element.addEventListener("click", incrementCounter, false);

// add a variable that holds the counter value
let counter = 0;

// function to increment the counter
function incrementCounter() {
    counter = counter + 1;
    console.log(counter);
}

