// variable to store total expense
let totalExpense = 0;

// get the value from Input Element
const inputElement = document.querySelector("#expenseAmount");

// get element from the document
const element = document.querySelector("#addBtn");

// get the heading element from the DOM
const headingAmout = document.querySelector("#outputAmount");

// get the expense description element
const expenseDesc = document.querySelector("#desc")

//  set the heading element to the value of total expense
headingAmout.textContent = totalExpense;

// on Button click, add input amount to total expense
function addExpense() {
    
    // storing the value of the input element
    const textAmount = inputElement.value;

    // storing the value of Expense description element
    const description = expenseDesc.value;

    // convert the input to number
    const expense = parseInt(textAmount, 10);

    // add the number to total expense
    totalExpense = totalExpense + expense;

    //  set the heading element to the value of total expense
    headingAmout.textContent = totalExpense;

    // print the expense description 
    console.log({ totalExpense, description });
}

// add event listener
element.addEventListener("click", addExpense, false);
 



