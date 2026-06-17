import React, { use, useContext, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./components/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="flex justify-between px-4 py-2 bg-blue-200 border border-b-gray-300 justify-between">
      <nav className="">
        <Link to="/" className="mx-4">
          Home
        </Link>
        <Link to="/profile" className="mx-4">
          Profile
        </Link>
      </nav>

      <div className="f">
        {!user.isAuth ? (
          <Link to="/login">Login</Link>
        ) : (
          <button onClick={logout}> Logout</button>
        )}
      </div>
    </header>
  );
}
function HomePage() {
  const { user, login } = useContext(AuthContext);

  return (
    <div className="mt-6">
      <h1>Home page</h1>
      {user ? (
        <p> Welcome back, {user.name}! </p>
      ) : (
        <p> You are not logged in, Go to login in page to sign in.</p>
      )}
    </div>
  );
}

function ProfilePage() {
  const { user, login } = useContext(AuthContext);

  return (
    <div className="mt-6">
      <h1>Profile Page</h1>
      <p> Name {user.name}</p>
      <p> More info to displaced</p>
    </div>
  );
}

function LoginPage() {
  const [name, setName] = useState("");
  const { user, login } = useContext(AuthContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    login(name);
  }
  return (
    <div className="">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            placeholder="Type your name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="m-1.5"
          />
        </label>

        <button type="submit" className="mx-4 border border-2 rounded-3xl">
          Login
        </button>
      </form>
    </div>
  );
}
const App: React.FC = () => {
  const [user, setUser] = useState({ name: "", isAuth: false });

  function login(name) {
    setUser({ name: name, isAuth: true });
  }

  function logout() {
    setUser({ name: "", isAuth: false });
  }

  return (
    <div>
      <AuthContext.Provider value={{ user, login, logout }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
};

export default App;
