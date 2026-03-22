import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="p-6">{children}</div>
    </div>
  );
}

export default Layout;