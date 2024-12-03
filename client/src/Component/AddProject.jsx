import 'bootstrap/dist/css/bootstrap.min.css';

function AddProject(props){
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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
            </svg>
            <span>Add Project</span>
        </div>
     );
}

export default AddProject