import { useState, useRef } from 'react';
import styled from 'styled-components';
import { BsFillPlusSquareFill } from 'react-icons/bs';

const TodoCreate = ({ onSubmitHandler }) => {
  const [text, setText] = useState('');
  const [title, setTitle] = useState('');
  const id = useRef(0);

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

    onSubmitHandler(newTodo);
    id.current++;
    setText('');
    setTitle('');
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
