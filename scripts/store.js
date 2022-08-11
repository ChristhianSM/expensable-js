// Data store
const initialExpenses = [
  {
    category: "Shopping",
    description: "Nintendo Switch", 
    amount: 500,
  },
  {
    category: "Shopping",
    description: "Iphone 13", 
    amount: 1200,
  }
]

// Adicion localStorage
const expensesFromLocalStorage = JSON.parse(localStorage.getItem("expenses"));
const expenses = expensesFromLocalStorage || initialExpenses;

function createExpense(expense) {
  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));
  location.assign("/");
}

function deleteExpense(expense) {
  const index = expenses.indexOf(expense);
  expenses.splice(index, 1);
  renderExpenses(expenses);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
