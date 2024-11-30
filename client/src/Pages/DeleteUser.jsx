import React, { useState } from "react";

const DelelteUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
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
      className="col "
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
      <div className="col-md-6" style={{ paddingTop: 40 }}>
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
      <div className="col-12 " style={{ paddingTop: 40 }}>
        <button type="submit" className="btn btn-primary">
          Delete
        </button>
      </div>
    </form>
  );
};

export default DelelteUser;
