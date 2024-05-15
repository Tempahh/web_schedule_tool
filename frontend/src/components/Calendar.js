// Importing necessary modules
import React from 'react';
import { Calendar as Mycalendar, momentLocalizer } from 'react-big-calendar'; // Importing Calendar component from 'react-big-calendar'
import moment from 'moment'; // Importing moment for date management
import './calendar.css' // Importing CSS for the calendar

// Creating a localizer using moment
const localizer = momentLocalizer(moment);

// Defining an array of events to be displayed on the calendar
// Each event is an object with an id, title, start date, and end date
const events = [
  {
    id: 0,
    title: 'Meeting with Client',
    start: new Date(2024, 4, 10, 10, 0), // Year, Month (0-based), Day, Hour, Minute
    end: new Date(2024, 4, 10, 11, 0),
  },
  {
    id: 1,
    title: 'Project Deadline',
    start: new Date(2024, 4, 15, 12, 0),
    end: new Date(2024, 4, 15, 13, 0),
  },
  {
    id: 2,
    title: 'Team Meeting',
    start: new Date(2024, 4, 20, 14, 0),
    end: new Date(2024, 4, 20, 15, 0),
  },
];

// Defining the Calendar component
const Calendar = () => {
  return (
    <div className='calendar'>
      <Mycalendar
        localizer={localizer} // Using the localizer created above
        events={events} // Passing the events array as a prop
        // Add more props here as needed
      />
    </div>
  );
};

export default Calendar;