// import "./App.css";

import { CreateTodoButton } from "./CreateTodoButton";
import { TodoCounter } from "./TodoCounter";
import { TodoItem } from "./TodoItem";
import { TodoList } from "./TodoList";
import { TodoSearch } from "./TodoSearch";

const todos = [
  {
    id: 1,
    text: "Hacer la compra",
    completed: false,
  },
  {
    id: 2,
    text: "Llevar compra a casa",
    completed: false,
  },
  {
    id: 3,
    text: "Hacer curso de react",
    completed: true,
  },
];

function App() {
  return (
    <>
      <TodoCounter />
      <h2>Hascompletado 2 de 3 TODOs</h2>
      <TodoSearch />
      <input placeholder="cebolla" />

      {/* <TodoList> */}
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} completed={todo.completed} />
      ))}
      {/* </TodoList> */}
      <CreateTodoButton />
      <button>+</button>
    </>
  );
}

export default App;
