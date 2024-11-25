
import Card from "../Component/Card";
import NavbarContent from "../Component/NavbarContent";
import './Dashboard.css'
import React from 'react';
import Calendar from "../Component/Calendar";
import MyTable from "../Component/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProgressBar from "../Component/MyProgressBar";
import MyDropdown from "../Component/MyDropdown";



function TeacherDashboard(){
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

    return (
        <React.Fragment>
        <header style={headerStyle}>
        <div style={profileContainer}>
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" // Replace this with your profile picture URL
          alt="Profile"
          style={profilePic}
        />
        <span style={HeaderText} >Welcome, Teacher!</span>
        </div>
        <MyDropdown/>
      </header>
        <body className="bodyy">
        <div className='Main-div'>
            <div className="Navbar">
                <NavbarContent name='teacher' current='dashboard'/>
            </div>
            <div style={{display : 'flex', flexDirection : 'column'}}>
            <div className="Cards-div">
                <Card name="Total Student" value="255, 224, 178" opacity={0.7}/>
                <Card name="Total Projects" value="224, 247, 250" opacity={0.7}/>
                <Card name="Supervised Projects" value="248, 187, 208" opacity={0.7}/>
                <Card name="Proposed Projects" value="290, 150, 108" opacity={0.7}/>
            </div>

            
            <div style={{display : 'flex' }}>
                <div style={{borderRadius: '10px', marginLeft : '25px' ,width : '450px' , height : '350px' , backgroundColor : 'white',}}>
                    <h1 style={{fontSize:'25px' , margin : '5px'}}>Projects : </h1>
                    <MyTable name='teacher'/>
                </div>
                <div style={{ borderRadius : '10px',padding: '20px', width: '480px', backgroundColor : 'White' , marginLeft : '15px' }}>
                    <h3 style={{fontSize : '28px'}}>statistical</h3>
                    <MyProgressBar name = "Approved Projects" value="70"/>
                    <MyProgressBar name = "In progress Projects" value="50"/>
                    <MyProgressBar name = "Validated Projects" value="30"/>
                    <MyProgressBar name = "Supervised Students" value="40"/>
                    

                </div>
            </div>
            <div style={{width : '65%'}}>
            <Calendar/>
            </div>
        </div>
        </div>
        </body>
        </React.Fragment>
    );
}

export default TeacherDashboard