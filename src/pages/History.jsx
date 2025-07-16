import React, { useEffect, useState } from "react";
const History = () => {
  const [sessions, setSessions] = useState([]);
    const [previousTotalTime, setPreviousTotalTime] = useState(0);
  
  const [error, setError] = useState("");

  // Function to fetch practice history from backend
  const fetchHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("No token found. Please login first.");
        return;
      }

      const res = await fetch("http://localhost:8080/api/sessions/history", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setSessions(data);
      setError("");
    } catch (err) {
      setError("Failed to load history");
      console.error(err);
    }
  };


  // useEffect to fetch data once and then refresh every 10 seconds
  useEffect(() => {
    fetchHistory();

    const interval = setInterval(() => {
      fetchHistory();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // clean up interval on unmount
  }, []);

  // Calculate average for a key (wpm or accuracy)
  const calculateAverage = (key) => {
    if (sessions.length === 0) return 0;
    const total = sessions.reduce((sum, s) => sum + (s[key] || 0), 0);
    return Math.round(total / sessions.length);
  };

  // Calculate total time spent (sum of timeTaken or totalTimeSpent)
  const calculateTotalTime = () => {
    return sessions.reduce((sum, s) => sum + (s.totalTimeSpent || s.timeTaken || 0), 0);
  };

  // Get the date of the last practice session
  const getLastPracticeDate = () => {
    if (sessions.length === 0) return "N/A";
    const last = [...sessions].sort((a, b) => new Date(b.practicedAt) - new Date(a.practicedAt))[0];
    return new Date(last.sessionDate).toLocaleString();
  };

  return (
    

    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">📊 Typing Stats Overview</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 shadow rounded-xl text-center">
          <p className="text-gray-500">Average WPM</p>
          <p className="text-2xl font-semibold text-blue-600">{calculateAverage("wpm")}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl text-center">
          <p className="text-gray-500">Average Accuracy</p>
          <p className="text-2xl font-semibold text-green-600">{calculateAverage("accuracy")}%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl text-center">
          <p className="text-gray-500">Total Time (sec)</p>
          <p className="text-2xl font-semibold text-purple-600">{calculateTotalTime()}</p>
        </div>
        <div className="bg-white p-4 shadow rounded-xl text-center">
          <p className="text-gray-500">Last Practice Date</p>
          <p className="text-md font-semibold text-gray-800">{getLastPracticeDate()}</p>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2">📜 Practice History</h3>
      <table className="w-full bg-white border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 border-b">WPM</th>
            <th className="py-2 px-4 border-b">Accuracy (%)</th>
            <th className="py-2 px-4 border-b">Time (sec)</th>
            <th className="py-2 px-4 border-b">Date</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td className="py-2 px-4 border-b text-center">{session.wpm}</td>
              <td className="py-2 px-4 border-b text-center">{session.accuracy}</td>
              <td className="py-2 px-4 border-b text-center">{session.totalTimeSpent || session.timeTaken}</td>
              <td className="py-2 px-4 border-b text-center">
                {new Date(session.sessionDate).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>

  );
};

export default History;

