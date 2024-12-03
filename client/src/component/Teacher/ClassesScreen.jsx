import Calendar from "../Calendar";
import Card from "../Card";
import MyProgressBar from "../MyProgressBar";
import MyTable from "../Table";
function ClassesScreen(){

    const classes = [
        { id: 1, name: "Mathematics", students: 30, schedule: "Mon & Wed, 9:00 AM" },
        { id: 2, name: "Physics", students: 25, schedule: "Tue & Thu, 11:00 AM" },
        { id: 3, name: "Chemistry", students: 28, schedule: "Mon & Fri, 10:00 AM" },
      ];


    return (
        <div style={{ padding: "20px", backgroundColor:'rgba(211, 211, 211, 0.7)', width:'100vw' }}>
          
          <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Card name="Total Classes" value="255, 224, 178" opacity={0.7}/>
          <Card name="Total Students" value="224, 247, 250" opacity={0.7}/>
          <Card name="Average Attendance" value="248, 187, 208" opacity={0.7}/>
          <Card name="Ongoing Assignment" value="290, 150, 108" opacity={0.7}/>
          </div>
    
          <h3>Classes</h3>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ backgroundColor: "#f5f5f5" }}>
                <th style={{ padding: "10px", textAlign: "left" }}>Class Name</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Students</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Schedule</th>
                <th style={{ padding: "10px", textAlign: "left" }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((cls) => (
                <tr key={cls.id} style={{ borderBottom: "1px solid #ddd" , backgroundColor : 'white' }}>
                  <td style={{ padding: "10px" }}>{cls.name}</td>
                  <td style={{ padding: "10px" }}>{cls.students}</td>
                  <td style={{ padding: "10px" }}>{cls.schedule}</td>
                  <td style={{ padding: "10px" }}>
                    <button style={{ marginRight: "10px" }}>View</button>
                    <button style={{ marginRight: "10px" }}>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );

}

export default ClassesScreen