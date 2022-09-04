import { useContext } from "react";
import { TaskCard } from "./TaskCard";
import { taskContext } from "../context/TaskContext";

export const TaskList = () => {

  const {arrayTasks} = useContext(taskContext) 

  if (arrayTasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-4 gap-2">
      {arrayTasks.map((task) => {
        return (
          <TaskCard task={task} key={task.id}/>
        );
      })}
    </div>
  );
};
