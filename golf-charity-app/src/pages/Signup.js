import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }

    // Save user (temporary)
    localStorage.setItem("user", JSON.stringify({ email }));

    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="bg-zinc-900 p-8 rounded-2xl w-80 shadow-lg">
        <h2 className="text-2xl mb-6 text-center font-bold">Signup</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 rounded bg-zinc-800"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 rounded bg-zinc-800"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          className="w-full bg-yellow-400 text-black py-2 rounded-lg font-bold"
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Signup;