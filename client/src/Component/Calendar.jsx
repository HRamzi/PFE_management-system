
const stylee = {
    borderRadius : '10px',
    width : '150%',
    backgroundColor : 'white',
    marginLeft : '25px',
    marginRight : '25px',
    marginTop: '20px'
    
}

const hstyle = {
    marginLeft : '20px',
}
const pstyle = {
    textAlign : 'center'
}

function Calendar(){
    return(
        <div style={stylee}>
            <h1 style={hstyle}>Calendar</h1>
            <p style={pstyle}>Next Event : Project meeting</p>
        </div>
    );
}
export default Calendar