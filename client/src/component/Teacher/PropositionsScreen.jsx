import React, { useState } from 'react';
import './PropositionsScreen.css';


const PropositionsScreen = () => {
  // Simulating a list of previously submitted proposals
  const [proposals, setProposals] = useState([
    {
      title: 'AI-Based Classroom Assistant',
      description: 'A project to develop an AI-based assistant to help teachers with administrative tasks.',
      technologies: 'Python, TensorFlow, OpenAI API',
      materials: 'Computer, Camera, Microphone',
    },
    {
      title: 'Online Learning Platform',
      description: 'Developing a platform for teachers and students to interact and exchange learning materials.',
      technologies: 'React, Node.js, MongoDB',
      materials: 'Laptop, Whiteboard, Internet Connection',
    },
    {
      title: 'Smart Classroom Management',
      description: 'Creating an IoT solution for smart classroom management and monitoring.',
      technologies: 'Arduino, IoT, Node.js',
      materials: 'Arduino Kit, Sensors, Actuators',
    }
  ]);

  return (
    <div className="dashboard-container">

      <div className="proposals-list">
        <h2>Submitted Project Proposals</h2>
        {proposals.length === 0 ? (
          <p>No proposals submitted yet.</p>
        ) : (
          <table className="proposals-table">
            <thead>
              <tr>
                <th>Project Title</th>
                <th>Description</th>
                <th>Technologies</th>
                <th>Materials</th>
              </tr>
            </thead>
            <tbody>
              {proposals.map((proposal, index) => (
                <tr key={index}>
                  <td>{proposal.title}</td>
                  <td>{proposal.description}</td>
                  <td>{proposal.technologies}</td>
                  <td>{proposal.materials}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PropositionsScreen;
