import { useState } from "react";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Chart from "./components/Chart";
import Insights from "./components/Insights";
import SummaryCards from "./components/SummaryCards";

function App() {
  const [transactions, setTransactions] = useState([
    {date:'2026-04-01', category:'Salary', amount:50000, type:'income'},
    {date:'2026-04-02', category:'Food', amount:2000, type:'expense'},
    {date:'2026-04-03', category:'Shopping', amount:5000, type:'expense'},
    {date:'2026-04-04', category:'Freelance', amount:10000, type:'income'}
  ]);

  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("all");

  const filtered = transactions.filter(t =>
    (filterType === "all" || t.type === filterType) &&
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header role={role} setRole={setRole} />

      <div className="container">
        <SummaryCards transactions={transactions} />

        <Chart transactions={transactions} />



        <TransactionList 
          transactions={filtered}
          search={search}
          setSearch={setSearch}
          filterType={filterType}
          setFilterType={setFilterType}
          role={role}
          setTransactions={setTransactions}
        />

        <Insights transactions={transactions} />

      </div>
    </div>
  );
}

export default App;