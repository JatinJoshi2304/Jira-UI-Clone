import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Dashboard from "./Pages/Dashboard";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
