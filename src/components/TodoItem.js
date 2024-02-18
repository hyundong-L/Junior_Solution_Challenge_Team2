import styled from 'styled-components';
import { BsPatchCheckFill, BsTrashFill } from 'react-icons/bs';

const TodoItemBlock = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 1rem;
  background-color: #f9f9f9;
  padding: 1rem 1.4rem;
  border-radius: 4px;

  .contents {
    color: #111;
    margin: 0 auto 0 1rem;

    p:last-child {
      color: #303030;
      font-size: 0.9rem;
    }
  }

  strong {
    display: inline-block;
    font-size: 1.1rem;
    margin-bottom: 2px;
  }
`;

const TodoItem = ({ title, body, id, isDone, onToggle, onDelete }) => {
  return (
    <TodoItemBlock key={id} isDone={isDone}>
      {isDone && <BsPatchCheckFill size={32} color={'#10c7a2'} cursor={'pointer'} onClick={() => onToggle(id)} />}
      {!isDone && <BsPatchCheckFill size={32} color={'#ddd'} cursor={'pointer'} onClick={() => onToggle(id)} />}
      <div className="contents">
        <p>
          <strong>{title}</strong>
        </p>
        <p>{body}</p>
      </div>
      <BsTrashFill size={24} color={'#ccc'} cursor={'pointer'} onClick={() => onDelete(id)} />
    </TodoItemBlock>
  );
};

export default TodoItem;
