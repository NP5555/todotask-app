import React, { useState } from "react";
import { PencilIcon, TrashIcon, CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid"; // Import the icons

const TodoItem = ({ task, updateTask, deleteTask, toggleTaskStatus }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(task.text);

  const handleUpdate = () => {
    updateTask(task.id, newTask);
    setIsEditing(false);
  };

  return (
<li
  className={`flex flex-col p-4 mb-2 rounded-md shadow-lg shadow-black ${
    task.completed ? "bg-[#267b9a]" : "bg-gray-300"
  }`}
>
  {isEditing ? (
    <input
      type="text"
      value={newTask}
      onChange={(e) => setNewTask(e.target.value)}
      className="flex-grow px-3 py-2 rounded-md bg-gray-100"
    />
  ) : (
    <span
      className={`flex-grow text-gray-900 ${
        task.completed ? "line-through" : ""
      }`}
    >
      {task.text}
    </span>
  )}

  {/* Buttons below the task */}
  <div className="mt-4 flex flex-col sm:flex-row sm:justify-between">
    {isEditing ? (
      <button
        onClick={handleUpdate}
        className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-700 mb-2 sm:mb-0 flex items-center justify-center"
      >
        Save
      </button>
    ) : (
      <>
        <button
          onClick={() => setIsEditing(true)}
          className="px-3 py-1 mx-0 sm:mx-5 mb-2 sm:mb-0 bg-gray-500 text-white rounded-md hover:bg-gray-700 flex items-center justify-center"
        >
          <PencilIcon className="h-5 w-5" />
          <span className="ml-1 text-sm">Edit</span>
        </button>

        <button
          onClick={() => toggleTaskStatus(task.id)}
          className={`px-3 py-1 mb-2 sm:mb-0 ${
            task.completed ? "bg-gray-500" : "bg-green-500"
          } text-white rounded-md hover:bg-opacity-75 flex items-center justify-center`}
        >
          {task.completed ? (
            <XCircleIcon className="h-5 w-5" />
          ) : (
            <CheckCircleIcon className="h-5 w-5" />
          )}
          <span className="ml-1 text-sm">
            {task.completed ? "Undo" : "Completed"}
          </span>
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="px-3 py-1 mx-0 sm:mx-4 bg-gray-500 text-white rounded-md hover:bg-gray-700 flex items-center justify-center"
        >
          <TrashIcon className="h-5 w-5" />
          <span className="ml-1 text-sm">Delete</span>
        </button>
      </>
    )}
  </div>
</li>

  );
};

export default TodoItem;
