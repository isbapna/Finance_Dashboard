import { useEffect, useState } from "react";

function Header({ role, setRole }) {
  const [dark, setDark] = useState(false);

  // load saved theme
  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    if (saved === "dark") {
      document.body.classList.add("dark");
      setDark(true);
    }
  }, []);

  // toggle theme
  const handleToggle = () => {
    const newTheme = !dark;
    setDark(newTheme);

    document.body.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <header>
      <h2>Finance Dashboard</h2>

      <div className="header-right">
        
        {/* Role */}
        <div>
          <label>Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="viewer">Viewer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <div>
          <label>Theme:</label>
          <label className="switch">
            <input 
              type="checkbox" 
              checked={dark}
              onChange={handleToggle}
            />
            <span className="slider"></span>
          </label>
        </div>

      </div>
    </header>
  );
}

export default Header;