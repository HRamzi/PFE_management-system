import React, { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    university_major: "",
    master1_average: "",
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
      style={{ backgroundColor: "whitesmoke", padding: "3%", width: "100%" }}
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
        <label htmlFor="university_major" className="form-label">
          University Major
        </label>
        <select
          className="form-select"
          id="university_major"
          name="university_major"
          value={formData.university_major}
          onChange={handleChange}
        >
          <option value="" disabled>
            Select Major
          </option>
          <option value="Computer Science">Computer Science</option>
          <option value="Engineering">Engineering</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Physics">Physics</option>
        </select>
      </div>
      <div className="col-md-6">
        <label htmlFor="master1_average" className="form-label">
          Master 1 Average
        </label>
        <input
          type="number"
          step="0.01"
          className="form-control"
          id="master1_average"
          name="master1_average"
          value={formData.master1_average}
          onChange={handleChange}
        />
      </div>
      <div className="col-12  ">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
