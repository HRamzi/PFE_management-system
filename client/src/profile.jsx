import avatarImage from "./assets/IMG_2984.JPG";
import "./profile.css";
export default function Profile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        height: "100%",
      }}
    >
      <div
        style={{
          width: "30%",
          padding: 50,
        }}
      >
        <img
          src={avatarImage}
          alt="User's profile picture"
          className="avatar"
          style={{
            width: 300,
            height: 300,

            objectFit: "cover",
            border: "2px solid #ccc",
          }}
        />
      </div>
      <div style={{ height: "100%" }}>
        <header style={{ paddingBottom: 60, paddingTop: 60 }}>
          <p
            style={{
              fontFamily: '"Gill Sans", sans-serif',
              fontSize: 35,
              color: "black",
            }}
          >
            MCIRDI ABDALLAH <br />
            <span style={{ color: "#3B82F6", fontSize: 30 }}>Student</span>
          </p>
        </header>

        <section style={{ paddingBottom: 20 }}>
          <p className="informations">
            Contact Informations.......................................
          </p>

          <p>
            <span>Phone : </span> 0675951505
          </p>
          <p>
            <span>email : </span> mcirdiabdallah02@gmail.com
          </p>
        </section>

        <section style={{ paddingBottom: 20 }}>
          <p className="informations">
            Academic Informations....................................
          </p>

          <p>
            <span>Major : </span> Software Engineering,
          </p>
          <p>
            <span>Average Master 01 : </span> 12
          </p>
        </section>
      </div>
    </div>
  );
}
