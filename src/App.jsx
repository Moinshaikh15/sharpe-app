import Home from "./pages/Home";
import Data from "./pages/Data";
import Transaction from "./pages/Transaction";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-screen">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/transaction" element={<Transaction />} />
      </Routes>
    </div>
  );
}

export default App;
