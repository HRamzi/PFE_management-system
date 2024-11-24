import Card from "../component/Card";
import NavbarContent from "../component/NavbarContent";
import './TeacherDashboard.css'
import React from 'react';
import Calendar from "../component/Calendar";
import MyTable from "../component/Table";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyProgressBar from "../component/MyProgressBar";
import MyDropdown from "../component/MyDropdown";

function StudentDashboard(){
    return (
        <React.Fragment>
        <header className="Header">
        <img
          src="https://static.vecteezy.com/system/resources/previews/001/840/612/non_2x/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-free-vector.jpg" // Replace this with your profile picture URL
          alt="Profile"
          className="Profile-Pic"
        />
        <span className="Header-Text" >Welcome, Student!</span>
        <MyDropdown/>
      </header>
        <body className="bodyy">
        <div className='Main-div'>
            <div className="Navbar">
                <NavbarContent name='student'/>
            </div>
            <div style={{display : 'flex', flexDirection : 'column'}}>
            <div className="Cards-div">
                <Card name="Submitted Projects" value="255, 224, 178" opacity={0.7}/>
                <Card name="Validated Projects" value="224, 247, 250" opacity={0.7}/>
                <Card name="Assigned Projects" value="248, 187, 208" opacity={0.7}/>
                <Card name="Next Defense" value="290, 150, 108" opacity={0.7}/>
            </div>

            
            <div style={{display : 'flex' }}>
                <div style={{borderRadius: '10px', marginLeft : '25px' ,width : '450px' , height : '350px' , backgroundColor : 'white',}}>
                    <h1 style={{fontSize:'25px' , margin : '5px'}}>Projects : </h1>
                    <MyTable name='student'/>
                </div>
                <div style={{ borderRadius : '10px',padding: '20px', width: '480px', backgroundColor : 'White' , marginLeft : '15px' }}>
                    <h3 style={{fontSize : '28px'}}>statistical</h3>
                    <MyProgressBar name = "Completed tasks" value="20"/>
                    <MyProgressBar name = "In progress Tasks" value="50"/>
                    <MyProgressBar name = "Supervised Tasks" value="90"/>
                    

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

export default StudentDashboard