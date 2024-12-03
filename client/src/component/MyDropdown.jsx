import Dropdown from 'react-bootstrap/Dropdown';

function MyDropdown(){
    return(
        <Dropdown style={{marginLeft : '970px'}}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/profile">Edit Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
            </Dropdown.Menu>
    </Dropdown>
    );

}

export default MyDropdown