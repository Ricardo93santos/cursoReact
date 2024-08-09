import React from "react";
import { TasksList } from "./Taskslist";

export function Todolist() {
  return(
    <div>
      <h1>Tarefas do dia</h1>
      <TasksList />
    </div>
  )
}