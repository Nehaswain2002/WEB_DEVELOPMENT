/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState(""); // for storing new task
  const [tasks, setTasks] = useState([]); // let tasks = [] (JS)

  const handleChange = (e) => {
    // handle change event for input field
    setTask(e.target.value);
  };
  const handleClick = () => {
    // handle click event for button
    setTasks([...tasks, task]);
    setTask(""); // empty
  };

  const deleteTask = (index) => {
    // handle delete event for button
    setTasks(tasks.filter((_, i) => i !== index));
    alert("Deleted");
  };

  const editTask = (index) => {
    const editTask = prompt("Edit your task:");
    if (editTask) {
      tasks[index] = editTask;
      setTask([...tasks]);
      alert("Updated");
    } else {
      alert("Don't leave empty field");
    }
  };

  return (
    <div className="w-[500px] border-2 border-black p-4 rounded mx-auto mt-10 shadow-2xl">
      <input type="text"
        value={task}
        onChange={handleChange}
        placeholder="Add your todos here"
        className="rounded py-2 px-6 bg-slate-500 text-white focus:outline-none"
      />
      <button
        type="submit"
        onClick={handleClick}
        className="rounded py-2 px-6 bg-green-500 text-white ml-2"
      >
        Submit
      </button>
      <div className="mt-5">
        {/* <h2 className="font-bold">Todo List</h2> */}
        {tasks.map((task, i) => (
          <div key={i} className="border-2 flex justify-between font-bold">
            <li className="list-none font-bold">{task}</li>
            <button
              onClick={() => editTask(i)}
              className="text-blue-500 font-bold"
            >
              Edit
            </button>
            <button
              onClick={() => deleteTask(i)}
              className="text-red-500 font-bold"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todo;