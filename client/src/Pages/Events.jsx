import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Events.css"; // Custom CSS for event colors

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [eventType, setEventType] = useState("");
  const [events, setEvents] = useState([]);
  const [showInput, setShowInput] = useState(false);

  const daysInMonth = new Date(2024, 11, 0).getDate(); // December 2024

  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleEventSubmit = () => {
    if (selectedDate && eventType) {
      setEvents([...events, { date: selectedDate, type: eventType }]);
      setShowInput(false);
      setSelectedDate(null); // Reset selected date after event is added
    }
  };

  const getEventClass = (date) => {
    const event = events.find((event) => event.date === date);
    if (event) {
      switch (event.type) {
        case "send_email":
          return "blue";
        case "choose_project":
          return "red";
        case "choose_examine":
          return "purple";
        default:
          return "";
      }
    }
    return "";
  };

  return (
    <div className="container">
      <div className="col-md-6 mx-auto mt-4">
        <div className="card">
          <div className="card-header">
            <h5 className="text-center">Event Calendar</h5>
          </div>
          <div className="card-body">
            <div className="d-flex justify-content-between mb-3">
              <button
                className="btn btn-primary"
                onClick={() => setShowInput(!showInput)}
              >
                Add Event
              </button>
            </div>

            {showInput && (
              <div>
                <div className="form-group">
                  <label htmlFor="eventType">Select Event Type</label>
                  <select
                    id="eventType"
                    className="form-control"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                  >
                    <option value="">Choose Event Type</option>
                    <option value="send_email">Date to Send Emails</option>
                    <option value="choose_project">
                      Date to Choose Project
                    </option>
                    <option value="choose_examine">
                      Date to Choose Project to Examine
                    </option>
                  </select>
                </div>
                <p className="mt-2">Select Date on Calendar:</p>
              </div>
            )}

            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>S</th>
                  <th>M</th>
                  <th>T</th>
                  <th>W</th>
                  <th>T</th>
                  <th>F</th>
                  <th>S</th>
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 5 }).map((_, weekIndex) => (
                  <tr key={weekIndex}>
                    {Array.from({ length: 7 }).map((_, dayIndex) => {
                      const day = weekIndex * 7 + dayIndex + 1;
                      if (day > daysInMonth) return <td key={day}></td>;
                      return (
                        <td
                          key={day}
                          className={`calendar-day ${getEventClass(day)}`}
                          onClick={() => handleDateClick(day)}
                        >
                          {day}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>

            {selectedDate && eventType && showInput && (
              <button
                className="btn btn-success mt-3"
                onClick={handleEventSubmit}
              >
                Save Event
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
