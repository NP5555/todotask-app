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
      className={`flex flex-col p-4 mb-2  rounded-md shadow-xl shadow-black ${
        task.completed ? "bg-green-300" : "bg-gray-300"
      }`}
    >
      {/* Task text or input field */}
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
      <div className="mt-4 flex justify-between">
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-3 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-700 flex items-center"
          >
            Save
          </button>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="px-3 py-1 mx-5 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 flex items-center"
            >
              <PencilIcon className="h-5 w-5" /> {/* Edit Icon */}
            </button>

            <button
              onClick={() => toggleTaskStatus(task.id)}
              className={`px-3 py-1 ${
                task.completed ? "bg-gray-500" : "bg-green-500"
              } text-white rounded-md hover:bg-opacity-75 flex items-center`}
            >
              {task.completed ? (
                <XCircleIcon className="h-5 w-5" /> // Undo Icon (Cross)
              ) : (
                <CheckCircleIcon className="h-5 w-5" /> // Complete Icon
              )}
            </button>

            <button
              onClick={() => deleteTask(task.id)}
              className="px-3 py-1 mx-4 bg-red-500 text-white rounded-md hover:bg-red-600 flex items-center"
            >
              <TrashIcon className="h-5 w-5" /> {/* Delete Icon */}
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
