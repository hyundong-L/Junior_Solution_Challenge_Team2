import TodoItem from './TodoItem';

import styled from 'styled-components';

const TodoList = ({ listTitle, todos, onToggle, onDelete }) => {
  return (
    <ListWrapper>
      <h2>{listTitle}</h2>
      <TodoListWrapper>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            title={todo.title}
            body={todo.body}
            isDone={todo.isDone}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </TodoListWrapper>
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.section`
  margin-bottom: 6rem;

  h2 {
    color: #222;
  }
`;

const TodoListWrapper = styled.ul`
  flex: 1;
  padding: 20px 0;
`;
