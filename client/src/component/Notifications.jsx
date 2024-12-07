import 'bootstrap/dist/css/bootstrap.min.css';

function Notifications(props){
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell-fill" viewBox="0 0 16 16">
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"/>
            </svg>
            <span>Notifications</span>
        </div>
     );
}

export default Notifications