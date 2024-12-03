import 'bootstrap/dist/css/bootstrap.min.css';


function Assignment(props){

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

     return(
        <div style={stylee}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pass-fill" viewBox="0 0 16 16">
            <path d="M10 0a2 2 0 1 1-4 0H3.5A1.5 1.5 0 0 0 2 1.5v13A1.5 1.5 0 0 0 3.5 16h9a1.5 1.5 0 0 0 1.5-1.5v-13A1.5 1.5 0 0 0 12.5 0zM4.5 5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 2h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1 0-1"/>
            </svg>
            <span>Assignment</span>
        </div>
     );
}

export default Assignment