import { useState } from "react";

function TransactionForm({ role, transactions, setTransactions }) {
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const addTransaction = () => {
    if (!category || !amount) return;

    setTransactions([
      ...transactions,
      {
        date: new Date().toISOString().slice(0,10),
        category,
        amount: Number(amount),
        type
      }
    ]);

    setCategory("");
    setAmount("");
  };

  if (role !== "admin") return null;

  return (
    <div id="adminActions">
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button onClick={addTransaction}>Add</button>
    </div>
  );
}

export default TransactionForm;