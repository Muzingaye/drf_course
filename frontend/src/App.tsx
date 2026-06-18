import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Auth from "./pages/Auth";
import Navbar from "./components/Navbar";
import AuthProvider from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="checkout" element={<Checkout />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
