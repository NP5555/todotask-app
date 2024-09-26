import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import svg from "../add_task_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg";
import Footer from "./Footer";
import { QRCodeCanvas } from "qrcode.react"; // Use QRCodeCanvas
import emailjs from "emailjs-com"; // Import EmailJS
import toast from "react-hot-toast";

function MianScreen() {
  const [tasks, setTasks] = useState([]);
  const [showQRCode, setShowQRCode] = useState(false); // For showing QR code
  const [email, setEmail] = useState(""); // For email input

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Convert tasks to a string format for the QR code
  const tasksData = JSON.stringify(tasks);

  // Function to handle email sending
  const sendEmail = (e) => {
    e.preventDefault();

    // Prepare task details for email
    const taskDetails = tasks.map((task, index) => `${index + 1}. ${task.text}`)
      .join("\n");

    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      to_email: email, // Ensure this matches the template
      tasks: taskDetails, // Matches the {{tasks}} variable in the template
      message: "Here is the list of your tasks.", // Matches the {{message}} variable in the template
    };

    emailjs
      .send(serviceID, templateID , templateParams, userID)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        toast.success("Tasks sent to your email!");
        setEmail(""); // Clear email input after sending
      })
      .catch((err) => {
        console.error("FAILED...", err);
        toast.error("Failed to send email.");
      });
  };

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
        <TodoList tasks={tasks} />

        {/* QR Code Section */}
        <div className="mt-4 flex flex-col items-center">
          <button
            onClick={() => setShowQRCode(!showQRCode)}
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

        {/* Email Form Section */}
        <div className="mt-6">
          <form onSubmit={sendEmail} className="flex flex-col items-center">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-400 p-2 rounded mb-4"
              required
            />
            <button
              type="submit"
              className="bg-[#4496b3] hover:bg-[#258aaf] text-white font-bold py-2 px-4 rounded shadow-lg"
            >
              Send Tasks to Email
            </button>
          </form>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MianScreen;
