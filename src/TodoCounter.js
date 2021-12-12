import React from "react";
import styled from "styled-components";

function TodoCounter() {
  return (
    <StyledTodoCounter>
      <h2>Has completado 2 de 3 TODOs</h2>
    </StyledTodoCounter>
  );
}

const StyledTodoCounter = styled.div`
  height: 100px;
  width: 100%;

  color: coral;

  & h2 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
  }
`;

export { TodoCounter };
