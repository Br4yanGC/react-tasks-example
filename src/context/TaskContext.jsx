import { createContext, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState(data);

    function addTask(taskTitle) {
        const newTask = {
        id: tasks.length + 1,
        title: taskTitle,
        description: taskTitle,
        };
        setTasks([...tasks, newTask]);
    }

    function deleteTask(taskId) {
        setTasks( tasks.filter((task) => (task.id !== taskId)) )
    }

    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}