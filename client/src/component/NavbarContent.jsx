import AddProject from './AddProject';
import AddUser from './AddUser';
import Assignment from './Assignment';
import Classes from './Classes';
import ClosingDates from './ClosingDates';
import Dashboard from './Dashboard'; 
import EmailCalendar from './EmailCalendar';
import Notifications from './Notifications';
import Propositions from './Propositions'; 
import RemoveUser from './RemoveUser';
import Settings from './Settings';
import Stats from './Stats';


const navbarStyle = {
    display : 'flex',
    flexDirection : 'column',
    marginTop : '10px'
}


function NavbarContent(props){
    if(props.name === 'teacher'){
        return (
            <div style={navbarStyle}>
                <Dashboard isSelected={props.current === 'dashboard' ? 'true' : ''}/>
                <Classes isSelected={props.current === 'classes' ? 'true' : ''}/>
                <Assignment isSelected={props.current === 'assignment' ? 'true' : ''}/>
                <Propositions isSelected={props.current === 'propositions' ? 'true' : ''}/>
                <Settings isSelected={props.current === 'settings' ? 'true' : ''}/>
            </div>
        );
    }
    if(props.name === 'admin'){
        return (
            <div style={navbarStyle}>
                <Dashboard isSelected='true'/>
                <AddUser isSelected=''/>
                <RemoveUser isSelected=''/>
                <EmailCalendar isSelected=''/>
                <ClosingDates isSelected=''/>
                <Settings isSelected=''/>
            </div>
        );
    }
    if(props.name === 'student'){
        return (
            <div style={navbarStyle}>
                <Dashboard isSelected='true'/>
                <Propositions isSelected=''/>
                <EmailCalendar isSelected=''/>
                <Notifications isSelected=''/>
                <Stats isSelected=''/>
                <Settings isSelected=''/>
            </div>
        );
    }
    if(props.name === 'company'){
        return (
            <div style={navbarStyle}>
                <Dashboard isSelected='true'/>
                <AddProject isSelected=''/>
                <EmailCalendar isSelected=''/>
                <Notifications isSelected=''/>
                <Stats isSelected=''/>
                <Settings isSelected=''/>
            </div>
        );
    }
}

export default NavbarContent