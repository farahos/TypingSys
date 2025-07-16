// src/components/Summary.jsx
const Summary = ({ data }) => {
  if (!data) return <p>Loading summary...</p>;

  const { averageWpm, averageAccuracy, totalTimeSpent, lastPractice } = data;

  return (
    <div className="bg-white shadow p-6 rounded-lg mb-6">
      <h2 className="text-xl font-semibold mb-4">Typing Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Avg WPM</p>
          <p>{averageWpm.toFixed(2)}</p>
        </div>
        <div>
          <p className="font-medium">Avg Accuracy</p>
          <p>{averageAccuracy.toFixed(2)}%</p>
        </div>
        <div>
          <p className="font-medium">Total Time</p>
          <p>{totalTimeSpent} sec</p>
        </div>
        <div>
          <p className="font-medium">Last Practice</p>
          <p>{lastPractice ? new Date(lastPractice).toLocaleString() : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
