import React, { useState } from "react";

const AddTeacher = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    recruitment_date: "",
    grade: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <form
      className="row g-3"
      style={{
        backgroundColor: "whitesmoke",
        padding: "3%",
        width: "100%",
      }}
      onSubmit={handleSubmit}
    >
      <div className="col-md-6">
        <label htmlFor="first_name" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="first_name"
          name="first_name"
          value={formData.first_name}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="last_name" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="last_name"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="phone_number" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          className="form-control"
          id="phone_number"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="recruitment_date" className="form-label">
          Recruitment Date
        </label>
        <input
          type="date"
          className="form-control"
          id="recruitment_date"
          name="recruitment_date"
          value={formData.recruitment_date}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="grade" className="form-label">
          Grade
        </label>
        <select
          className="form-select"
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Grade
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <div className="col-12 ">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddTeacher;
