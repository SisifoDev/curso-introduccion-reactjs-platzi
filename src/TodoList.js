import styled from "styled-components";

function TodoList(props) {
  return (
    <StyledTodoList>
      <ul>{props.children}</ul>
    </StyledTodoList>
  );
}

const StyledTodoList = styled.section``;
export { TodoList };
