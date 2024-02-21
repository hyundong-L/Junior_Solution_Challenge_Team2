import { useEffect, useState } from 'react';
import TodoCreate from '../components/TodoCreate';
import TodoList from '../components/TodoList';
import { useAuth } from '../user/authContext/AuthContext';
import { database } from '../firebase/firebase';
import { onValue, remove, update } from 'firebase/database';
import { ref } from 'firebase/database';
import OtherTodoList from '../components/OtherTodoList';


function RecyclePage() {
  const [todos, setTodos] = useState([]);
  const [otherTodos, otherSetTodos] = useState([]);
  const { currentUser } = useAuth();
  const db = database;
  const userEmail = currentUser.email.replace("@", "-").replace(".com", "");

  useEffect(() => {
    const todoRef = ref(db, userEmail);
    onValue(todoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const todoList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setTodos(todoList);
      } else {
        setTodos([]);
      }
    });

    const otherTodoRef = ref(db, "List");
    onValue(otherTodoRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const otherTodoList = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        otherSetTodos(otherTodoList);

      } else {
        otherSetTodos([]);
      }
    })
  }, [db, userEmail]);

  const onSubmitHandler = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const onToggleHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? {
            ...todo,
            isDone: !todo.isDone,
          }
          : todo
      )
    );

    const todoRef = ref(db, `${userEmail}/${id}`);
    update(todoRef, { isDone: !todos.find(todo => todo.id === id).isDone })
  };

  const onDeleteHandler = (id) => {
    if (window.confirm('해당 투두를 정말로 삭제하시겠습니까?')) {
      setTodos(todos.filter((todo) => todo.id !== id));

      const todoRef = ref(db, `${userEmail}/${id}`);
      remove(todoRef);
    }
  };

  return (
    <div className="todo-wrapper">
      <section className="create-todo">
        <h1 className="title"> To Do List</h1>
        <TodoCreate onSubmitHandler={onSubmitHandler} />
      </section>
      <OtherTodoList
        todos={otherTodos}
        listTitle={"모든 사람들의 투두리스트"}
      />
      <TodoList
        todos={todos.filter((todo) => !todo.isDone)}
        listTitle={'🔥 진행중 🔥'}
        onToggle={onToggleHandler}
        onDelete={onDeleteHandler}
      />
      <TodoList
        todos={todos.filter((todo) => todo.isDone)}
        listTitle={'🎉 완료 🎉'}
        onToggle={onToggleHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  );
}

export default RecyclePage;
