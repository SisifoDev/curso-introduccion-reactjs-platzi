import React from "react";
import styled from "styled-components";

function TodoSearch() {
  return (
    <TodoSearchContainer>
      <input placeholder="cebolla" />
    </TodoSearchContainer>
  );
}

const TodoSearchContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 20px;

  & input {
    width: 100%;
    height: 30px;
  }
`;

export { TodoSearch };
