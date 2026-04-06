function Insights({ transactions }) {

  let expenses = transactions.filter(t => t.type === "expense");
  let categoryTotals = {};

  expenses.forEach(t => {
    categoryTotals[t.category] = (categoryTotals[t.category] || 0) + t.amount;
  });

  let highestCategory = "-";
  let highestAmount = 0;

  for (let cat in categoryTotals) {
    if (categoryTotals[cat] > highestAmount) {
      highestAmount = categoryTotals[cat];
      highestCategory = cat;
    }
  }

  let monthly = {};

  transactions.forEach(t => {
    let month = t.date.slice(0, 7); // YYYY-MM
    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  let months = Object.keys(monthly).sort();
  let comparisonText = "Not enough data";

  if (months.length >= 2) {
    let last = monthly[months[months.length - 1]];
    let prev = monthly[months[months.length - 2]];

    let diff =
      (last.income - last.expense) -
      (prev.income - prev.expense);

    comparisonText =
      diff > 0
        ? "Financial health improved 📈"
        : "Spending increased 📉";
  }

  let totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  let totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  let savingsRate = totalIncome
    ? ((totalIncome - totalExpense) / totalIncome * 100).toFixed(1)
    : 0;

  return (
    <div className="section">
      <h3>Insights</h3>

      <div className="insights">

        <div className="insight-item">
          <h4>Highest Spending Category</h4>
          <p>{highestCategory} (₹{highestAmount})</p>
        </div>

        <div className="insight-item">
          <h4>Monthly Comparison</h4>
          <p>{comparisonText}</p>
        </div>

        <div className="insight-item">
          <h4>Observation</h4>
          <p>You are saving {savingsRate}%</p>
        </div>

      </div>
    </div>
  );
}

export default Insights;