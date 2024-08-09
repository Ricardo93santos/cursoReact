import React from "react";

interface Task {
  id: number,
  nameTask: string,
  imageSrc: string,
};

let tasks: Task[] = [
  { id: 1, nameTask: `tarefa`, imageSrc: "https://images.tcdn.com.br/img/editor/up/653201/livro.png" },
  { id: 1, nameTask: `tarefa`, imageSrc: "https://urbanarts.vteximg.com.br/arquivos/ids/14333142/401104_Ampliada.jpg?v=638463916203700000" },
]

const taskList = tasks.map(task => (<li key={task.id}>{`${task.nameTask} ${task.id}`} <img src={task.imageSrc} alt={`Imagem ${task.id}`}></img></li>))

export function TasksList() {
  return (
    <ol>{taskList}</ol>
  )
}