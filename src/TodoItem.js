import React from "react";

function TodoItem({ text, completed }) {
  return (
    <div>
      <h1>{text}</h1>
      <h2>{completed ? "Tarea completada" : "Por completar"}</h2>
    </div>
  );
}

export { TodoItem };
