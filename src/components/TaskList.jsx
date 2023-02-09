import { useContext} from "react";
import { TaskCard } from "./TaskCard";
import { TaskContext } from "../context/TaskContext";

export function TaskList() {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
