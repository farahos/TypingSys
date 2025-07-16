import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Practice() {
  const texts = [
    "Anisa waxay aaminsan tahay in waxbarashadu ay tahay furaha horumarka.",
    "Farah wuxuu doonayaa inuu noqdo developer xirfad leh.",
    "Barashada programming waxay u baahan tahay dulqaad iyo dadaal."
  ];

  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [previousTotalTime, setPreviousTotalTime] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setText(randomText);
    inputRef.current?.focus();
    fetchPreviousTotalTime();
  }, []);

  const fetchPreviousTotalTime = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.get("http://localhost:8080/api/sessions/history", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const sessions = res.data;
      const total = sessions.reduce((sum, session) => sum + (session.timeTaken || 0), 0);
      setPreviousTotalTime(total);
    } catch (err) {
      console.error("❌ Failed to fetch total time:", err);
    }
  };

  const calculateWPM = (typed, time) => {
    if (time === 0) return 0;
    const words = typed.trim().split(/\s+/).length;
    return Math.round((words / time) * 60);
  };

  const calculateAccuracy = (typed) => {
    let correct = 0;
    for (let i = 0; i < typed.length; i++) {
      if (typed[i] === text[i]) correct++;
    }
    return Math.round((correct / text.length) * 100);
  };

  const handleKeyDown = (e) => {
    if (!startTime) setStartTime(Date.now());
    if (e.key.length === 1 || e.key === "Backspace") {
      let newText = input;
      if (e.key === "Backspace") {
        newText = input.slice(0, -1);
      } else {
        newText += e.key;
      }
      setInput(newText);
      const timeTaken = (Date.now() - startTime) / 1000;
      setWpm(calculateWPM(newText, timeTaken));
      setAccuracy(calculateAccuracy(newText));
    }
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("❌ Token ma jiro, fadlan gal system-ka mar kale.");
      return;
    }

    if (!startTime) {
      alert("⚠️ Fadlan bilow qorista ka hor intaadan Submit gareyn.");
      return;
    }

    const sessionTime = Math.floor((Date.now() - startTime) / 1000);

    try {
      await axios.post(
        "http://localhost:8080/api/sessions",
        {
          wpm: parseFloat(wpm),
          accuracy: parseFloat(accuracy),
          timeTaken: sessionTime,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("✅ Practice session saved!");

      // Reset
      setInput("");
      setStartTime(null);
      setWpm(0);
      setAccuracy(100);

      const newText = texts[Math.floor(Math.random() * texts.length)];
      setText(newText);

      setPreviousTotalTime((prev) => prev + sessionTime);
    } catch (err) {
      alert("❌ Failed to save session, fadlan isku day mar kale.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Typing Practice</h2>

        <div className="bg-white rounded-2xl shadow-md p-6 space-y-4">
          <div className="flex justify-between text-lg font-semibold text-gray-600">
            <p>
              WPM: <span className="text-blue-600">{wpm}</span>
            </p>
            <p>
              Accuracy: <span className="text-green-600">{accuracy}%</span>
            </p>
            <p>
              Total Time:{" "}
              <span className="text-purple-600">{previousTotalTime} sec</span>
            </p>
          </div>

          <div
            tabIndex={0}
            ref={inputRef}
            onKeyDown={handleKeyDown}
            className="bg-gray-100 rounded-xl font-mono text-black p-6 h-40 overflow-y-auto outline-none cursor-text"
          >
            {text.split("").map((char, index) => {
              let className = "";
              if (index < input.length) {
                className = input[index] === char ? "text-green-500" : "text-red-500";
              } else if (index === input.length) {
                className = "bg-yellow-300";
              }
              return (
                <span key={index} className={className}>
                  {char}
                </span>
              );
            })}
          </div>

          <button
            onClick={handleSubmit}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-xl transition duration-200"
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
}

export default Practice;
