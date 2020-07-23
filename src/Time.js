import React, { useState, useEffect } from 'react';
import './App.css';

function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div>
        <p>The current time is {currentTime}.</p>
    </div>
  );
}

export default TimeDisplay;