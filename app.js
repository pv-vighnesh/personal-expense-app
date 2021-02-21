// variable to store total expense
let totalExpense = 0;

// get element from the document
const element = document.querySelector("#addBtn");

// on Button click, add input amount to total expense
function addExpense() {

    // read the value from Input Element
    const inputElement = document.querySelector("#expenseAmount");
    const textAmount = inputElement.value;

    // convert the input to number
    const expense = parseInt(textAmount, 10);

    // add the number to total expense
    totalExpense = totalExpense + expense;
}

// add event listener
element.addEventListener("click", addExpense, false);
 



