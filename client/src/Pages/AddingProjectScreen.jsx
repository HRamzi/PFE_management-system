import React, { useState } from 'react';
import './AddingProjectScreen.css';

const AddingProjectScreen = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    technologies: '',
    materials: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Project Proposal Submitted:', formData);
    alert('Proposal Submitted Successfully!');
    setFormData({
      title: '',
      description: '',
      technologies: '',
      materials: ''
    });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Project Proposal Submission</h2>
      <form className="project-proposal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Project Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter the project title"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Provide a brief description of the project"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="technologies">Technologies Used:</label>
          <input
            type="text"
            id="technologies"
            name="technologies"
            value={formData.technologies}
            onChange={handleChange}
            placeholder="List the technologies used"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="materials">Material Needs:</label>
          <input
            type="text"
            id="materials"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            placeholder="List any material needs"
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit Proposal</button>
      </form>
    </div>
  );
};

export default AddingProjectScreen;
