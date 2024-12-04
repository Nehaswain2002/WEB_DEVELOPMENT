/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const Counter = () => {
  let counter = 0;
  const [count, setCount] = useState(counter);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
      console.log("Time is running");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Time is stopped");
    };
  }, [isRunning]);

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <h2 className="text-3xl text-center mt-5">Count Value: {count}</h2>
      <div className="flex justify-center items-center">
        <button
          onClick={handleStop}
          className="border-2 bg-red-500 text-white px-5 py-3 mt-5"
        >
          Stop
        </button>
      </div>
    </div>
  );
};

export default Counter;