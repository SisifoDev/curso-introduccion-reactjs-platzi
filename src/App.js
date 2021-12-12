// import "./App.css";
import styled from "styled-components";
import background from "./assets/img/background.svg";

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
    text: "Aprender react.js 100%",
    completed: true,
  },
];

function App() {
  return (
    <MainApp>
      <Left>
        <h1>Create New Task</h1>
        <TodoSearch />
        <CreateTodoButton />
        <img alt="img" src={background} />
      </Left>
      <Right>
        <TodoCounter />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem key={todo.id} text={todo.text} />
          ))}
        </TodoList>
      </Right>
    </MainApp>
  );
}

const MainApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  width: 100%;
  height: 100%;
  margin: 0 60px;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 40%;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 60%;
`;

export default App;
