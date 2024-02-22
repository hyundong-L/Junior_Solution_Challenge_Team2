import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { ref, set, query, orderByKey, limitToLast, onValue, get } from 'firebase/database';
import { database } from '../firebase/firebase';
import { useAuth } from '../user/authContext/AuthContext';

const TodoCreate = ({ onSubmitHandler }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const id = useRef(0);

  const { userLoggedIn, currentUser } = useAuth();

  const db = database
  const userEmail = currentUser.email.replace("@", "-").replace(".com", "");

  useEffect(() => {
    const todoRef = ref(db, `${userEmail}`);
    const idQuery = query(todoRef, orderByKey(), limitToLast(1));

    const getId = () => {
      onValue(idQuery, (snapshot) => {
        const data = snapshot.val();

        if (data) {
          const keys = Object.keys(data);
          const lastKey = keys[0];
          id.current = parseInt(lastKey) + 1;
        }
      });
    };

    getId();
  })

  const handleSubmit = () => {
    if (!text || !title) {
      alert('텍스트를 입력해주세요.');
      return;
    }

    const newTodo = {
      id: id.current,
      title: title,
      body: text,
      isDone: false,
    };

    const todoRef = ref(db, `${userEmail}/${newTodo.id}`);

    set(todoRef, newTodo).then(() => {
      onSubmitHandler(newTodo);
      id.current++;
      setText('');
      setTitle('');
    })
      .catch((error) => {
        console.error("error 발생", error);
      });


    const ListTodoRef = ref(db, `List/${newTodo.id}`);
    const newTodoWithoutIsDone = { ...newTodo };
    delete newTodoWithoutIsDone.isDone;
    set(ListTodoRef, newTodoWithoutIsDone)
      .catch((error) => {
        console.error("error 발생", error);
      });
  };

  return (
    <InputArea>
      <InputWrapper>
        <Label htmlFor="title">Title</Label>
        <Input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="text">Text</Label>
        <Input
          className="text"
          type="text"
          value={text}
          placeholder="Text"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </InputWrapper>
      <BsFillPlusSquareFill size={40} onClick={handleSubmit} color={'#10c7a2'} cursor={'pointer'} />
    </InputArea>
  );
};

export default TodoCreate;

const InputArea = styled.div`
  margin-top: 10%;
  display: -webkit-inline-box;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

const InputWrapper = styled.div`
  margin-right: 1rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 8px;
`;

const Input = styled.input`
  width: 13vh;
  height: 2vw;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 1rem;

  &.text {
    width: 20vh;
  }
`;
