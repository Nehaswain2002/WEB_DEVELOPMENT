/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const reduce = () => {
    if (count === 0) {
      alert("You can't reduce below 0");
      return;
    }
    setCount((prev) => prev - 1);
  };

  const addFive = () => {
    setCount((prev) => prev + 5);
  };

  return (
    <div className="border-2 border-black w-[300px] py-[20px] pl-[20px] pr-[20px] m-auto mt-[50px] shadow-2xl ">
      <h2 className="text-2xl font-bold">Count Value: {count}</h2>

      <div className="flex gap-x-3 mt-[30px]">
        <button
          onClick={add}
          className="border-2 border-black w-[100px] font-bold bg-green-500"
        >
          Add
        </button>
        <button
          onClick={reduce}
          className="border-2 border-black w-[100px] font-bold bg-red-500"
        >
          Reduce
        </button>
        <button
          onClick={addFive}
          className="border-2 border-black w-[100px] font-bold bg-blue-500"
        >
          Add +5
        </button>
      </div>
    </div>
  );
};

export default Counter;