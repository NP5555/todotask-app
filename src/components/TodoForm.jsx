import React, { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-sm mb-6 flex shadow-lg rounded-xl shadow-black"
    >
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="flex-grow px-3 py-2 border bg-gray-300   rounded-l-md focus:outline-none"
        placeholder="Add a task..."
      />
      <button
        type="submit"
        className="px-4 py-2 bg-gray-500  text-white rounded-r-md hover:bg-gray-700"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
