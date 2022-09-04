import { createContext, useState, useEffect } from "react";
import { tasks } from "../data/Tasks";

export const taskContext = createContext();

export const TaskContextProvider = (props) => {
  let [arrayTasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasks);
  }, []);

  const createTask = (newTask) => {
    setTasks([
      ...arrayTasks,
      {
        id: arrayTasks.length + 1,
        title: newTask.title,
        description: newTask.description,
      },
    ]);
  };

  const deleteTask = (idTask) => {
    setTasks(arrayTasks.filter((task) => task.id != idTask));
  };

  return (
    <taskContext.Provider value={{
        arrayTasks:arrayTasks,
        createTask:createTask,
        deleteTask:deleteTask
    }}>{props.children}</taskContext.Provider>
  );
};
