// Stats.js
import React from 'react';
import './stats.css'

const Stats = ({ schedule }) => {
  // Calculate statistics based on schedule data
  const totalTasks = schedule.length;
  // Add more statistics as needed

  return (
    <div className='stats'>
      <h2>Statistics</h2>
      <p>Total Tasks: {totalTasks}</p>
      {/* Display more statistics here */}
    </div>
  );
};

export default Stats;
