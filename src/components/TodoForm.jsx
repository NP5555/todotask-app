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
  className="w-full sm:max-w-lg lg:max-w-xl mb-6 flex flex-col sm:flex-row shadow-lg rounded-xl  shadow-black"
>
  <input
    type="text"
    value={task}
    onChange={(e) => setTask(e.target.value)}
    className="flex-grow w-full sm:w-auto px-3 py-2 border bg-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none"
    placeholder="Add a task..."
  />
  <button
    type="submit"
    className="px-4 py-2 bg-[#2187ab] text-white rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-[#1a6985]"
  >
    Add
  </button>
</form>


  );
};

export default TodoForm;
