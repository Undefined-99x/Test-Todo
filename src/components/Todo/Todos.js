import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllTodo } from "../../redux/Todo/actions";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./Todo.css";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTodo(page));
  }, [dispatch, page]);

  return (
    <div>
      <div className="todo-list">
        <TodoForm page={page} todos={todos} setTodos={setTodos} />
        <TodoList page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Todos;
