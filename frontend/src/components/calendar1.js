import React, { useState } from 'react';
import Calendar from 'rc-calendar';
import 'rc-calendar/assets/index.css'; // import the CSS
import './calendar1.css';

function MyComponent() {
  const [schedules, setSchedules] = useState({});

  const onSelect = (value) => {
    const date = value.format('YYYY-MM-DD');

    // Prompt the user to enter a schedule for the selected date
    const schedule = window.prompt(`Enter schedule for ${date}:`);

    // Add the schedule to the state
    if (schedule) {
      setSchedules({
        ...schedules,
        [date]: schedule,
      });
    }
  };

  return (
    <div className='calendar-view'>
      <Calendar onSelect={onSelect} />
      <ul>
        {Object.entries(schedules).map(([date, schedule]) => (
          <li key={date}>{date}: {schedule}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyComponent;