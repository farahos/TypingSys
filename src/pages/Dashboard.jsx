// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import axios from "axios";
import Summary from "./Summary";
import History from "./History";  
import Practice from "./Practice";

const Dashboard = ({ user }) => {
  const [summary, setSummary] = useState(null);
  const [history, setHistory] = useState([]);
  const [showPractice, setShowPractice] = useState(false);

  useEffect(() => {
    axios.get("/api/practice/summary")
      .then(res => setSummary(res.data))
      .catch(err => console.error(err));

    axios.get("/api/practice/history")
      .then(res => setHistory(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.username} 👋</h1>

      {!showPractice ? (
        <>
          <Summary data={summary} />

          <button
            onClick={() => setShowPractice(true)}
            className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Start Typing Practice
          </button>

          <History sessions={history} />
        </>
      ) : (
        <Practice onDone={() => {
          setShowPractice(false);
          window.location.reload(); // Refresh to get new summary/history
        }} />
      )}
    </div>
  );
};

export default Dashboard;
