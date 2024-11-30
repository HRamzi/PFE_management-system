import React from "react";
import { Link } from "react-router-dom";

const AddUser = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row gap-4 justify-content-center">
        <div className="col-md-4">
          <Link
            to="/add-student"
            className="card shadow-lg border-0 text-white"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              background: "linear-gradient(to right, #4facfe,#2575fc)",
              textDecoration: "none",
            }}
          >
            <div className="card-body text-center p-4">
              <h5 className="card-title">Add Student</h5>
              <p className="card-text">
                Create a new student record in the system.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/add-teacher"
            className="card shadow-lg border-0 text-white"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              background: "linear-gradient(to right, #1e3c72,#2575fc)",
              textDecoration: "none",
            }}
          >
            <div className="card-body text-center p-4">
              <h5 className="card-title">Add Teacher</h5>
              <p className="card-text">
                Create a new teacher profile in the system.
              </p>
            </div>
          </Link>
        </div>

        <div className="col-md-4">
          <Link
            to="/add-company"
            className="card shadow-lg border-0 text-white"
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              background: "linear-gradient(to right, #6a11cb, #2575fc)",
              textDecoration: "none",
            }}
          >
            <div className="card-body text-center p-4">
              <h5 className="card-title">Add Company</h5>
              <p className="card-text">Register a new company in the system.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
