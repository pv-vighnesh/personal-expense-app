const inputElement = document.querySelector("#expenseAmount");
const headingAmout = document.querySelector("#outputAmount");
const expenseDesc = document.querySelector("#desc")
const expenseTable = document.querySelector("#expenseTable");

let totalExpense = 0;

headingAmout.textContent = totalExpense;

const allExpense = [];

function addExpense() {

    const expenseItem = {};
    const textAmount = inputElement.value;
    const description = expenseDesc.value;
    const expense = parseInt(textAmount, 10);

    if (description !== "" && !isNaN(expense) && expense > 0) {
    expenseItem.amount = expense;
    expenseItem.desc = description;
    expenseItem.moment = new Date();

    totalExpense += expense;
    updateTotal();
    allExpense.push(expenseItem);

    renderNewList(allExpense);
    inputElement.value = "";
    expenseDesc.value = "";
    }
}

const element = document.querySelector("#addBtn");
element.addEventListener("click", addExpense, false);
document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.which === 13) {
      addExpenseToTotal();
    }
});

function getTime(time) {
    return time.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function deleteItem(dateValue, amount) {
    const filteredArr = allExpense.filter(
        expense => expense.moment.valueOf() !== dateValue
        );
    renderNewList(filteredArr);
    totalExpense -= amount;
    updateTotal();
}

function updateTotal() {
    let updatedTotal = `Total: ${totalExpense}`;
    headingAmout.textContent = updatedTotal;
}

function renderNewList(newArray) {
    const allExpenseHTML = newArray.map(expense => 
        createList(expense)
        );
    const allExpenseHTMLJoined = allExpenseHTML.join("");
    expenseTable.innerHTML = allExpenseHTMLJoined;
    allExpense = newArray;
}
 
// function to create HTML for Expense table
function createList ({ desc, amount, moment }) {
    return `
            <li class="list-group-item d-flex justify-content-between">
                <div class="d-flex flex-column">
                    ${desc}
                    <small class="text-muted">${getTime(moment)}</small>
                </div>
                <div>
                <span class="px-5">
                    ${amount}
                </span>
                <button 
                    type="button" 
                    class="btn btn-outline-danger btn-sm"
                    onclick="deleteItem(${moment.valueOf()}, ${amount})"
                    >
                    <i class="fas fa-trash-alt"></i>
                </button>
                </div>
            </li>
        `;
}