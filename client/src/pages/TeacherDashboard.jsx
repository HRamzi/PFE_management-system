import './Dashboard.css'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyDropdown from "../Component/MyDropdown";
import DashboardScreen from "../Component/Teacher/DashboardScreen";
import ClassesScreen from "../Component/Teacher/ClassesScreen";
import Dashboard from "../Component/Dashboard";
import Propositions from "../Component/Propositions";
import Settings from "../Component/Settings";
import AddProject from "../Component/AddProject";
import Notifications from "../Component/Notifications";
import AddingProjectScreen from '../Component/Teacher/AddingProjectScreen';
import PropositionsScreen from '../Component/Teacher/PropositionsScreen';
import NotificationScreen from '../Component/Teacher/NotificationScreen';
import Profile from '../Component/Profile';
import ProfileScreen from '../Component/Teacher/ProfileScreen';



function TeacherDashboard(){
    const [currentPage , setCurrentPage] = useState('dashboard');
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f8f9fa', /* Light gray background */
        padding: '10px 20px',
        borderBottom: '2px solid #e0e0e0', /* Subtle bottom border */
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }

    const profileContainer = {
        display: 'flex',
        alignItems: 'center'
    }

    const profilePic = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '2px solid #007bff',
        marginRight: '10px'
    }

    const HeaderText = {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333'
    }
    const handleClick = (page) => {
        setCurrentPage(page);
      };

    return (
        <React.Fragment>
        <header style={headerStyle}>
        <div style={profileContainer}>
        <img
          src="https://i.postimg.cc/D0bffYbP/IMG-1246-900x675.jpg" 
          alt="Profile"
          style={profilePic}
        />
        <span style={HeaderText} >Welcome, nTeacher!</span>
        </div>
        <MyDropdown/>
      </header>
        <body className="bodyy">
        <div className='Main-div'>
            <div className="Navbar">
                <Dashboard isSelected={currentPage === 'dashboard' ? 'true' : ''} onClick={() => handleClick('dashboard')}/>
                <AddProject isSelected={currentPage === 'add projects' ? 'true' : ''} onClick={() => handleClick('add projects')}/>
                <Notifications isSelected={currentPage === 'notifications' ? 'true' : ''} onClick={() => handleClick('notifications')}/>
                <Propositions isSelected={currentPage === 'propositions' ? 'true' : ''} onClick={() => handleClick('propositions')}/>
                <Profile isSelected={currentPage === 'profile' ? 'true' : ''} onClick={() => handleClick('profile')}/>
            </div>
            {currentPage === 'dashboard' && <DashboardScreen />}
            {currentPage === 'add projects' && <AddingProjectScreen/>}
            {currentPage === 'propositions' && <PropositionsScreen/>}
            {currentPage === 'notifications' && <NotificationScreen/>}
            {currentPage === 'profile' && <ProfileScreen/>}
            
        </div>
        </body>
        </React.Fragment>
    );
}

export default TeacherDashboard