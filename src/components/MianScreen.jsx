import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import svg from "../add_task_40dp_000000_FILL0_wght400_GRAD0_opsz40.svg"
function MianScreen() {
  const [tasks, setTasks] = useState([]);

  // Add a new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Update a task
  const updateTask = (id, newTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newTask } : task
      )
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

  return (
<div className="min-h-screen bg-[#3a93b4] flex flex-col items-center justify-center">
  <div className="rounded-xl p-6 md:p-10 shadow-lg bg-[#196581] flex flex-col items-center justify-center shadow-black w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
    <img src={svg} alt="todoList" className="w-1/4 md:w-1/3 sm:w-1/3 mb-4" /> {/* Scales the image */}
    
    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 text-pretty">Todo App</h1>
    
    <h2 className="text-center text-lg md:text-xl mx-4  md:mx-5 font-medium text-white mb-4">
      Add your task here
    </h2>
    
    <TodoForm addTask={addTask} />
    
    <TodoList
      tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
      toggleTaskStatus={toggleTaskStatus}
    />
  </div>
</div>

  );
}

export default MianScreen;
