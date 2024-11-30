import React, { useState } from "react";

const AddCompany = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
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
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={formData.first_name}
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
      <div className="col-12 ">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
};

export default AddCompany;
