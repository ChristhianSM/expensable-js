const form = document.querySelector(".js-expense-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.dir(event.target);
  // Primera forma para obtener los elementos
  // const category = event.target.category.value;
  // const description = event.target.description.value;
  // const amount = event.target.amount.value;

  // Segunda forma
  const {category, description, amount} = event.target;
  const newExpense = {
    category : category.value,
    description : description.value,
    amount : amount.value
  }
  createExpense(newExpense);
})

