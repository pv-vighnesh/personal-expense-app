// variable to store total expense
let totalExpense = 0;

// Array to store all the expenses 
const allExpense = [];

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

    // Object to store Amount spent and description
    const expenseItem = {};

    // storing the value of the input element
    const textAmount = inputElement.value;

    // storing the value of Expense description element
    const description = expenseDesc.value;

    // convert the input to number
    const expense = parseInt(textAmount, 10);

    // adding Amount and description to the object
    expenseItem.amount = expense;
    expenseItem.desc = description;

    // pusing the object into the array
    allExpense.push(expenseItem);

    console.clear();
    console.table(allExpense);

    // add the number to total expense
    totalExpense = totalExpense + expense;

    //  set the heading element to the value of total expense
    headingAmout.textContent = totalExpense;
}

// add event listener
element.addEventListener("click", addExpense, false);
 



