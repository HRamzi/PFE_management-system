import 'bootstrap/dist/css/bootstrap.min.css';



function MyTable(props){
   return (
    <table class="table table-striped" 
            style={{margin : '15px' ,width: "95%",height : '70px' , tableLayout: "fixed" }}
    >
  <thead>
    <tr>
      <th scope="col" style={{ width: "5%" }}>#</th>
      <th scope="col">{props.name === 'teacher' ? "Project Name" : "Task Name"}</th>
      <th scope="col">{props.name === 'teacher' ? "Role" : "Status"}</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    {props.name === 'teacher' 
    ?(
      <>
      <tr>
      <td>1</td>
      <td>E-Learning Platform</td>
      <td>Jury</td>
      <td>10-01-2025</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Smart Trafic Managment</td>
      <td>Examinator</td>
      <td>31-12-2024</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Sentiment Analysis</td>
      <td>Jury</td>
      <td>02-01-2025</td>
    </tr>
    </>
    ) : 
    props.name === 'student' ?
    (<>
      <tr>
    <td>1</td>
    <td>writing the report</td>
    <td>In progress</td>
    <td>10-01-2025</td>
  </tr>
  <tr>
    <td>2</td>
    <td>preparation of the presentation</td>
    <td>Not Started</td>
    <td>31-12-2024</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Code revision</td>
    <td>Completed</td>
    <td>02-01-2025</td>
  </tr>
  </>) :(<></>)
    }
  </tbody>
</table>
   );
}

export default MyTable