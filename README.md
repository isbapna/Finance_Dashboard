Financial Dashboard
A responsive financial dashboard built with React, js, and CSS. It allows users to track income, expenses, and balances visually with interactive charts and tables.

1. Features:
Responsive UI: Works seamlessly on desktop and mobile devices.

2. Role-Based Access:
Admin: Can add, edit, and view transactions.
Viewer: Can only view transactions and insights.

3. Transactions Management:
Add new transactions (category, amount, type)
Edit existing transactions (admin only)
Filter and sort transactions
Search by category

4. Charts & Insights:
Balance Trend (Line chart)
Spending Breakdown (Pie chart)
Insights cards showing key metrics like Highest Spending Category, Monthly Comparison, Observation
Dark Mode toggle
Clean, modern design with hover effects and card layouts

Tech Stack-
Frontend: React.js, HTML, CSS, JavaScript
Charts: Chart.js (Line & Pie)
State Management: React useState 
Styling: Custom CSS (Responsive + Dark Mode)

Installation & Setup-
Clone the repository
git clone https://github.com/<your-username>/Finance_Dashboard.git
cd Finance_Dashboard
Install dependencies
npm install
Start the development server
npm start
Open http://localhost:3000 in your browser.

Usage-
Switch Role: Use the role dropdown in the header to toggle between Admin and Viewer.
Dark Mode: Use the toggle switch in the header.
Transactions Table:
Admins can add, edit, and sort transactions.
Viewers can see and sort the transaction data.

Charts:
Line chart shows balance trend over time.
Pie chart shows expense breakdown by category.

Insights Cards:
Shows Highest Spending Category, Monthly Comparison, Observation.

Notes-
Role-based rendering ensures viewers cannot manipulate data.
All charts are responsive and update dynamically based on transactions.
Dark mode styles are implemented with CSS class toggles.
