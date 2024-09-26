import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ tasks, updateTask, deleteTask, toggleTaskStatus }) => {
  return (
    <ul className="w-full max-w-sm">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            toggleTaskStatus={toggleTaskStatus}
          />
        ))
      ) : (
        <li className="text-center text-white">No tasks available</li>
      )}
    </ul>
  );
};

export default TodoList;
