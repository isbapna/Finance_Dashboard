function SummaryCards({ transactions }) {

  const totalIncome = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div className="cards">

      <div className="card">
        <p><strong>Balance:</strong> ₹{balance}</p>
      </div>

      <div className="card">
        <p><strong>Income:</strong> ₹{totalIncome}</p>
      </div>

      <div className="card">
        <p><strong>Expense:</strong> ₹{totalExpense}</p>
      </div>

    </div>
  );
}

export default SummaryCards;