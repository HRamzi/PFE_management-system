// client/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login'; // Ensure the Login component is imported correctly
import TeacherDashboard from './pages/TeacherDashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<TeacherDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
