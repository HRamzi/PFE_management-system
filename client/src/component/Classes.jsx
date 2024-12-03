import 'bootstrap/dist/css/bootstrap.min.css';

function Classes(props) {
    // Define the style object for conditional styling
    const stylee = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginBottom: '12px',
        cursor: 'pointer',
        backgroundColor: props.isSelected ? 'rgba(5, 117, 230, 1)' : 'white',
        color: props.isSelected ? 'white' : 'black',
        paddingLeft: '4px',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '70px',
        borderRadius: '15px'
    };

    // Handle the click event
    const handleClick = () => {
        if (props.onClick) {
            props.onClick();  // Trigger the onClick function passed as a prop
        }
    };

    return (
        <div style={stylee} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-collection-fill" viewBox="0 0 16 16">
                <path d="M0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6zM2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1"/>
            </svg>
            <span>Classes</span>
        </div>
    );
}

export default Classes;
