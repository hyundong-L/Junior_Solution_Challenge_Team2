import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsFillPlusSquareFill } from 'react-icons/bs';
import { ref, push, set, query, orderByKey, limitToLast, onValue, get } from 'firebase/database';
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
  };

  return (
    <InputArea>
      <InputWrapper>
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          value={title}
          placeholder="제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Label htmlFor="text">내용</Label>
        <Input
          className="text"
          type="text"
          value={text}
          placeholder="해야 할 일"
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
  display: flex;
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
  width: 200px;
  height: 36px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 0 8px;
  font-size: 1rem;

  &.text {
    width: 340px;
  }
`;
