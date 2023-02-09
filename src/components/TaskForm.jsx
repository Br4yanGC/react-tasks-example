import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export function TaskForm() {
  const { addTask } = useContext(TaskContext);
  
  const [title, setTitle] = useState("");
  
  function handleSubmit(taskTitle) {
    addTask(taskTitle);
    setTitle("");
  }

  return (
    <div className="max-w-md mx-auto ">
      <form className="bg-slate-800 p-10 mb-4 "
        onSubmit={(e) => {
          handleSubmit(title);
          e.preventDefault();
        }}
      >
        <h1 className="text-2xl font-bold text-white mb-3">Create Task</h1>
        <input
          className="bg-slate-300  p-3 w-full mb-2 "
          placeholder="Add your task"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white ">Save</button>
      </form>
    </div>
    
  );
}
