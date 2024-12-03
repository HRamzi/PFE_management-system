import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function NotificationScreen(){
    const notifications = [
        { id: 1, title: 'Project Approved', message: 'Your project was approved by the admin.', date: '2024-11-25' },
        { id: 2, title: 'New Task Assigned', message: 'You have a new task in the project.', date: '2024-11-24' },
        { id: 3, title: 'Reminder', message: 'Submit your project report by 2024-11-30.', date: '2024-11-23' },
    ];
    return(
        <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            {/* Section des notifications */}
                            <div
                                style={{
                                    borderRadius: '10px',
                                    margin: '25px',
                                    width: '1050px',
                                    padding: '20px',
                                    backgroundColor: 'white',
                                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <h1 style={{ fontSize: '25px', marginBottom: '15px' }}>Notifications</h1>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {notifications.map((notification) => (
                                        <li
                                            key={notification.id}
                                            style={{
                                                marginBottom: '10px',
                                                padding: '10px',
                                                border: '1px solid #ddd',
                                                borderRadius: '5px',
                                                backgroundColor: '#f9f9f9',
                                            }}
                                        >
                                            <h4 style={{ margin: '0 0 5px', fontSize: '18px' }}>
                                                {notification.title}
                                            </h4>
                                            <p style={{ margin: '0 0 5px', fontSize: '14px' }}>
                                                {notification.message}
                                            </p>
                                            <small style={{ color: 'gray' }}>Date: {notification.date}</small>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
    );
}
export default NotificationScreen