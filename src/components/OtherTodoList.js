import OtherTodoItem from './OtherTodoItem';
import styled from 'styled-components';

const OtherTodoList = ({ listTitle, todos }) => {
    return (
        <ListWrapper>
            <h2>{listTitle}</h2>
            <TodoListWrapper>
                {todos.map((todo) => (
                    <OtherTodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        body={todo.body}
                    />
                ))}
            </TodoListWrapper>
        </ListWrapper>
    );
};

export default OtherTodoList;

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
