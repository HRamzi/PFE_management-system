import ProgressBar from 'react-bootstrap/ProgressBar';
import React from 'react';


function MyProgressBar(props){
    return (
    <React.Fragment>
        <span>{props.name}</span>
        <ProgressBar now={props.value} label={`${props.value}%`} variant={
                props.value < 50 ? "danger" : props.value < 75 ? "warning" : "success"
                }/>
        <br />
    </React.Fragment>);
}

export default MyProgressBar