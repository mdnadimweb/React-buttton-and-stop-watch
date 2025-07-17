import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 1);
      }, 1000);
    } else if (!isRunning && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning, time]);

  const reset = () => {
    setIsRunning(false);
    setTime(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stopwatch</h2>
      <h1>{time} sec</h1>
      <button onClick={() => setIsRunning(true)} style={{ marginRight: "10px" }}>
        Start
      </button>
      <button onClick={() => setIsRunning(false)} style={{ marginRight: "10px" }}>
        Stop
      </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Stopwatch;
