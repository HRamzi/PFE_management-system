import './Card.css'

function Card(props){
    return(
        <div className="Card" style={{backgroundColor : `rgba(${props.value}, ${props.opacity})`}}>
            <h1 className='Cards-text'>{props.name}</h1>
            <p className="Counters-style">489</p>
        </div>
    );
}

export default Card;