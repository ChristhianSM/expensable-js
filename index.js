console.log("Index!");
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
const expenses = expensesFromLocalStorage || initialExpenses

function createExpense(expense){
  // Create Elements
  const li = document.createElement("li");
  li.classList.add("expense");

  const expenseDetail = document.createElement("div");
  expenseDetail.className = "expense__detail";

  const container = document.createElement("div");
  
  const category = document.createElement("p");
  category.className = "heading--xs bold";
  category.textContent = expense.category;

  const description = document.createElement("p");
  description.className = "content-sm gray-300";
  description.textContent = expense.description;

  const amount = document.createElement("p");
  amount.className = "content-xl bold";
  amount.textContent = `$ ${expense.amount}`;

  const actions = document.createElement("div");
  actions.className = "expense__actions";

  const deleteLink = document.createElement("a");
  deleteLink.textContent = "Delete";

  // Build Template
  container.append(category, description);
  actions.append(deleteLink);
  expenseDetail.append(container, amount);
  li.append(expenseDetail, actions);

  // Event Listeners
  deleteLink.addEventListener("click", (event) => {
    event.preventDefault();
    deleteExpense(expense);
  })
  return li;
}

function deleteExpense(expense) {
  const index = expenses.indexOf(expense);
  expenses.splice(index, 1);
  renderExpenses(expenses);
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// const expense = createExpense(expenses[0]);
// expensesList.append(expense);

function renderExpenses(expenses) {
  const expensesList = document.querySelector(".js-expenses");
  expensesList.innerHTML = "";
  
  expenses.forEach(expense => {
    const expenseEl = createExpense(expense);
    expensesList.appendChild(expenseEl);
  });
}

renderExpenses(expenses)