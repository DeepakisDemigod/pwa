document.addEventListener('DOMContentLoaded', function () {
  const expenseForm = document.getElementById('expenseForm');
  const expenseList = document.getElementById('expenseList');
  const totalExpenses = document.getElementById('totalExpenses');

  let expenses = [];

  // Add expense
  expenseForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('expenseTitle').value;
    const amount = parseFloat(document.getElementById('expenseAmount').value);

    if (title.trim() === '' || isNaN(amount) || amount <= 0) {
      alert('Please enter a valid title and amount');
      return;
    }

    const expense = {
      title: title,
      amount: amount,
    };

    expenses.push(expense);

    renderExpenses();
    updateTotalExpenses();

    expenseForm.reset();
  });

  // Render expenses
  function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach(function (expense, index) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${expense.title}</span>
        <span>${expense.amount}</span>
        <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  // Delete expense
  window.deleteExpense = function (index) {
    expenses.splice(index, 1);
    renderExpenses();
    updateTotalExpenses();
  };

  // Update total expenses
  function updateTotalExpenses() {
    let total = 0;
    expenses.forEach(function (expense) {
      total += expense.amount;
    });
    totalExpenses.textContent = total;
  }
});
