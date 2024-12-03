import Calendar from "../Calendar";
import Card from "../Card";
import MyProgressBar from "../MyProgressBar";
import MyTable from "../Table";

function DashboardScreen(){
    const cardsDiv = {
        display: 'flex',
        padding: '0px',
        marginLeft : '15px',
    }
    return (
        <div style={{display : 'flex', flexDirection : 'column'}}>
            <div style={cardsDiv}>
                <Card name="Total Student" value="255, 224, 178" opacity={0.7}/>
                <Card name="Total Projects" value="224, 247, 250" opacity={0.7}/>
                <Card name="Supervised Projects" value="248, 187, 208" opacity={0.7}/>
                <Card name="Proposed Projects" value="290, 150, 108" opacity={0.7}/>
            </div>

            
            <div style={{display : 'flex' }}>
                <div style={{borderRadius: '10px', marginLeft : '25px' ,width : '450px' , height : '350px' , backgroundColor : 'white',}}>
                    <h1 style={{fontSize:'25px' , margin : '5px'}}>Projects : </h1>
                    <MyTable name='teacher'/>
                </div>
                <div style={{ borderRadius : '10px',padding: '20px', width: '480px', backgroundColor : 'White' , marginLeft : '15px' }}>
                    <h3 style={{fontSize : '28px'}}>statistical</h3>
                    <MyProgressBar name = "Approved Projects" value="70"/>
                    <MyProgressBar name = "In progress Projects" value="50"/>
                    <MyProgressBar name = "Validated Projects" value="80"/>
                    <MyProgressBar name = "Supervised Students" value="40"/>
                    

                </div>
            </div>
            <div style={{width : '65%'}}>
            <Calendar/>
            </div>
        </div>
    );

}

export default DashboardScreen