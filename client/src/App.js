import "./App.css";
import CompanyDashboard from "./Pages/CompanyDashboard";
import AdminDashboard from "./Pages/AdminDashboard";
import StudentDashboard from "./Pages/StudentDashboard";
import TeacherDashboard from "./Pages/TeacherDashboard";
import ClassManagment from "./Pages/ClassManagment";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Component/AddUser";
import AddStudent from "./Pages/AddStudent";
import AddTeacher from "./Pages/AddTeacher";
import AddCompany from "./Pages/AddCompany";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/teacher_dashboard" element={<TeacherDashboard />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/add_user" element={<AddUser />} />
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/add-teacher" element={<AddTeacher />} />
        <Route path="/add-company" element={<AddCompany />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
