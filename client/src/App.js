import './App.css';
import CompanyDashboard from './Pages/CompanyDashboard';
import AdminDashboard from './Pages/AdminDashboard';
import StudentDashboard from './Pages/StudentDashboard';
import TeacherDashboard from './Pages/TeacherDashboard';
import ClassManagment from './Pages/ClassManagment';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/teacher-dashboard' element={<TeacherDashboard/>}/>
        <Route path='/admin' element={<AdminDashboard/>}/>
        <Route path='/classes-page' element={<ClassManagment/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
