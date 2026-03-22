import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="bg-zinc-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo */}
      <h1 className="text-xl font-bold text-yellow-400 cursor-pointer" onClick={() => navigate("/dashboard")}>
        Golf Charity
      </h1>

      {/* Links */}
      <div className="hidden md:flex gap-6">
        <button onClick={() => navigate("/dashboard")} className="hover:text-yellow-400">
          Dashboard
        </button>
        <button onClick={() => navigate("/admin")} className="hover:text-yellow-400">
          Admin
        </button>
      </div>

      {/* Mobile Menu (simple for now) */}
      <div className="md:hidden">
        <button className="text-yellow-400">☰</button>
      </div>
    </div>
  );
}

export default Navbar;