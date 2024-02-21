import styled from 'styled-components';
import { BsBookmarkCheckFill } from 'react-icons/bs';

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

const OtherTodoItem = ({ title, body, id }) => {
    return (
        <TodoItemBlock key={id}>
            <BsBookmarkCheckFill size={32} color={'#ddd'} cursor={'pointer'}/>
            <div className="contents">
                <p>
                    <strong>{title}</strong>
                </p>
                <p>{body}</p>
            </div>
        </TodoItemBlock>
    );
};

export default OtherTodoItem;
