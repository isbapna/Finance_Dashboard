import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
} from "chart.js";

import { Line, Pie } from "react-chartjs-2";


ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Chart({ transactions }) {

  let dates = transactions.map(t => t.date);
  let balances = [];
  let running = 0;

  transactions.forEach(t => {
    running += t.type === "income" ? t.amount : -t.amount;
    balances.push(running);
  });

  const lineData = {
    labels: dates,
    datasets: [
  {
    label: "Balance Trend",
    data: balances,
    borderColor: "#00bfff",   
    backgroundColor: "#00bfff",
            
  }
]
  };

  let expenseData = {};
  transactions
    .filter(t => t.type === "expense")
    .forEach(t => {
      expenseData[t.category] =
        (expenseData[t.category] || 0) + t.amount;
    });

  const pieData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: [   
          "#2f80ed",
          "#27ae60",
          "#f2994a",
          "#eb5757",
          "#9b51e0"
        ]
      }
    ]
  };

  return (
    <div className="charts-row">
      <div className="chart-card">
        <h3>Balance Trend</h3>
        <div className="chart-container"> 
          <Line 
            data={lineData} 
            options={{
              responsive: true,
              maintainAspectRatio: false  
            }}
          />
        </div>
      </div>

      <div className="chart-card">
        <h3>Spending Breakdown</h3>
        <div className="chart-container"> 
          <Pie 
            data={pieData} 
            options={{
              responsive: true,
              maintainAspectRatio: false   
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;