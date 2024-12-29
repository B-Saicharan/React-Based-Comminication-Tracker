import React, { useState } from 'react';
import Calendar from 'react-calendar';

function CalendarView() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h2>Calendar View</h2>
      <Calendar onChange={handleDateChange} value={date} />
    </div>
  );
}

export default CalendarView;
