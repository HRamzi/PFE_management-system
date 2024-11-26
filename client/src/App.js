// client/src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./login";
import Profile from "./profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> */}
        {/* Add other routes if necessary */}
      </Routes>
    </Router>
  );
}

export default App;
