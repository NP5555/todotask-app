import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import svg from "../add_task_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import Footer from "./Footer";
import { QRCodeCanvas } from "qrcode.react";
// import { QRCode } from "qrcode.react"; // Import QRCode component

function MianScreen() {
  const [tasks, setTasks] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false); // For showing QR code

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Update a task
  const updateTask = (id, newTask) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newTask } : task))
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion
  const toggleTaskStatus = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Toggle QR code display
  const toggleQRCode = () => {
    setShowQRCode(!showQRCode);
  };

  // Convert tasks to a string format for the QR code
  const tasksData = JSON.stringify(tasks);

  return (
    <div className="min-h-screen bg-[#3a93b4] flex flex-col items-center justify-center">
      <div className="rounded-xl p-6 md:p-10 shadow-lg bg-[#196581] flex flex-col items-center justify-center shadow-black w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <img
          src={svg}
          alt="todoList"
          className="w-1/4 md:w-1/4 sm:w-1/3 mb-2"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-pretty">
          Todo App
        </h1>
        <h2 className="text-center text-lg md:text-xl mx-4 md:mx-5 font-medium text-white mb-4">
          Add your task here
        </h2>

        <TodoForm addTask={addTask} />

        <TodoList
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleTaskStatus={toggleTaskStatus}
        />

        {/* QR Code Section */}
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={toggleQRCode}
            className="bg-[#4496b3] hover:bg-[#258aaf] text-white font-bold py-2 px-4 rounded shadow-lg"
          >
            {showQRCode ? "Hide QR Code" : "Show QR Code"}
          </button>

          {showQRCode && (
            <div className="mt-4 flex flex-col items-center">
              <QRCodeCanvas
                value={tasksData}
                size={200}
                className="w-full max-w-xs md:max-w-md lg:max-w-lg"
              />
              <p className="text-white mt-2 text-center">
                Scan to view tasks on another device
              </p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MianScreen;
