import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import API from "../services/api";

function Admin() {
  const [users, setUsers] = useState([]);
  const [scores, setScores] = useState([]);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    fetchUsers();
    fetchScores();
    fetchLastWinner();
  }, []);

  const fetchUsers = async () => {
    const res = await API.get("/auth/users");
    setUsers(res.data);
  };

  const fetchScores = async () => {
    const res = await API.get("/score");
    setScores(res.data);
  };

  const fetchLastWinner = async () => {
    const res = await API.get("/draw/last");
    setWinner(res.data.winner);
  };

  const runDraw = async () => {
    const res = await API.get("/draw");
    setWinner(res.data.winner);
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Admin Panel
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Users */}
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl mb-2">Users</h2>

          {users.length === 0 ? (
            <p>No users</p>
          ) : (
            <ul className="list-disc ml-4">
              {users.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Scores */}
        <div className="bg-zinc-900 p-6 rounded-2xl">
          <h2 className="text-xl mb-2">Scores</h2>

          {scores.length === 0 ? (
            <p>No scores</p>
          ) : (
            <ul className="list-disc ml-4">
              {scores.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          )}
        </div>

        {/* Draw */}
        <div className="bg-zinc-900 p-6 rounded-2xl md:col-span-2">
          <h2 className="text-xl mb-2">Run Draw</h2>

          <button
            onClick={runDraw}
            className="bg-yellow-400 text-black px-4 py-2 rounded"
          >
            Select Winner
          </button>

          {winner && (
            <p className="mt-2 text-green-400">
              Winner: {winner}
            </p>
          )}
        </div>

      </div>
    </Layout>
  );
}

export default Admin; 