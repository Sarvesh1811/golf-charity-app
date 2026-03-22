import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import API from "../services/api";

function Dashboard() {
  const navigate = useNavigate();

  const [score, setScore] = useState("");
  const [scores, setScores] = useState([]);
  const [charity, setCharity] = useState("");
  const [winner, setWinner] = useState("");

  
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) navigate("/");

    fetchScores();
  }, []);

  // Fetch scores from backend
  const fetchScores = async () => {
    try {
      const res = await API.get("/score");
      setScores(res.data);
    } catch (err) {
      console.error(err); 
    }
  };

  
  const handleAddScore = async () => {
    if (!score) return alert("Enter score");

    try {
      const res = await API.post("/score/add", { score });
      setScores(res.data.scores);
      setScore("");
    } catch (err) {
      console.error(err);
    }
  };

  
  const getWinner = async () => {
    try {
      const res = await API.get("/draw");
      setWinner(res.data.winner);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
  <h2 className="text-xl mb-2">Subscription</h2>

  <select className="w-full p-2 rounded bg-zinc-800">
    <option>Monthly</option>
    <option>Yearly</option>
  </select>

  <button className="mt-3 bg-yellow-400 text-black px-4 py-2 rounded">
    Subscribe
  </button>
</div> 

        {/* Score Entry */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl mb-2">Enter Score</h2>

          <input
            type="number"
            value={score}
            onChange={(e) => setScore(e.target.value)}
            placeholder="Stableford Score"
            className="w-full p-2 rounded bg-zinc-800 mb-3"
          />

          <button
            onClick={handleAddScore}
            className="bg-yellow-400 text-black px-4 py-2 rounded"
          >
            Add Score
          </button>
        </div>

        {/* Score History */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl mb-2">Score History</h2>

          {scores.length === 0 ? (
            <p>No scores yet</p>
          ) : (
            <ul className="list-disc ml-4">
              {scores.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Monthly Draw */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-xl mb-2">Monthly Draw</h2>
          <button
            onClick={getWinner}
            className="mt-2 bg-yellow-400 text-black px-4 py-2 rounded"
          >
            View Winner
          </button>

          {winner && (
            <p className="mt-2 text-green-400">Winner: {winner}</p>
          )}
        </div>

        {/* Charity */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg md:col-span-2">
          <h2 className="text-xl mb-2">Select Charity</h2>

          <select
            className="w-full p-2 rounded bg-zinc-800"
            onChange={(e) => setCharity(e.target.value)}
          >
            <option value="">Choose charity</option>
            <option value="education">Education</option>
            <option value="health">Health</option>
            <option value="environment">Environment</option>
          </select>

          {charity && (
            <p className="mt-2 text-green-400">
              Selected: {charity}
            </p>
          )}
        </div>

      </div>
    </Layout>
  );
}

export default Dashboard;