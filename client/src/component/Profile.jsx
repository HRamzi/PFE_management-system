import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';



function Profile(props){

    const stylee = {
        display: 'flex',
        alignItems: 'center', 
        gap: '8px',
        marginBottom : '12px',
        cursor : 'pointer',
        backgroundColor : props.isSelected ? 'rgba(5, 117, 230, 1)' : 'white',
        color : props.isSelected ? 'white' : 'black',
        paddingLeft : '4px ',
        paddingTop : '10px',
        paddingBottom : '10px',
        paddingRight : '70px',
        borderRadius : '15px'
    }

    const handleClick = () => {
        if (props.onClick) {
            props.onClick();  // Trigger the onClick function passed as a prop
        }
    };

     return(
        <div style={stylee} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
            </svg>
            <span>Profile</span>
        </div>
     );
}

export default Profile