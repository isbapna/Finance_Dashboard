import { useState } from "react";

function TransactionList({
  transactions,
  setTransactions,
  search,
  setSearch,
  filterType,
  setFilterType,
  role
}) {

  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");
  const [sortBy, setSortBy] = useState("");

  const [editIndex, setEditIndex] = useState(null);
  const [editData, setEditData] = useState({ category: "", amount: "" });

  // ADD
  const handleAdd = () => {
    if (!category || !amount) return;

    setTransactions([
      ...transactions,
      {
        date: new Date().toISOString().slice(0, 10),
        category,
        amount: Number(amount),
        type
      }
    ]);

    setCategory("");
    setAmount("");
  };

  // EDIT CLICK
  const handleEdit = (index) => {
    setEditIndex(index);
    setEditData({
      category: transactions[index].category,
      amount: transactions[index].amount
    });
  };

  // SAVE EDIT
  const handleSave = (index) => {
    const updated = [...transactions];
    updated[index] = {
      ...updated[index],
      category: editData.category,
      amount: Number(editData.amount)
    };

    setTransactions(updated);
    setEditIndex(null);
  };

  // SORT
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === "amount") return a.amount - b.amount;
    if (sortBy === "date") return new Date(a.date) - new Date(b.date);
    return 0;
  });

  return (
    <div className="section">

      <h3>Transactions</h3>

      <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="amount">Amount</option>
          <option value="date">Date</option>
        </select>
      </div>

      {role === "admin" && (
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
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

          <button onClick={handleAdd}>Add</button>
        </div>
      )}

      {/* TABLE */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
            {role === "admin" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {sortedTransactions.map((t, index) => (
            <tr key={index}>
              <td>{t.date}</td>

              <td>
                {editIndex === index ? (
                  <input
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({ ...editData, category: e.target.value })
                    }
                  />
                ) : (
                  t.category
                )}
              </td>

              <td>
                {editIndex === index ? (
                  <input
                    type="number"
                    value={editData.amount}
                    onChange={(e) =>
                      setEditData({ ...editData, amount: e.target.value })
                    }
                  />
                ) : (
                  `₹${t.amount}`
                )}
              </td>

              <td>{t.type}</td>

              {role === "admin" && (
                <td>
                  {editIndex === index ? (
                    <>
                      <button onClick={() => handleSave(index)}>Save</button>
                      <button onClick={() => setEditIndex(null)}>Cancel</button>
                    </>
                  ) : (
                    <button onClick={() => handleEdit(index)}>Edit</button>
                  )}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default TransactionList;