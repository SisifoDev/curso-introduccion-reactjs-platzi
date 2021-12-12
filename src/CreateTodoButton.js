import React from "react";
import styled from "styled-components";

function CreateTodoButton(props) {
  return <TodoButton>Create Task</TodoButton>;
}

const TodoButton = styled.button`
  height: 40px;
  padding: 8px 12px;
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  background-color: purple;
  border-radius: 8px;
  margin-bottom: 30px;

  &:hover {
    background-color: rgba(101, 10, 121, 0.8);
    cursor: pointer;
  }
`;

export { CreateTodoButton };
