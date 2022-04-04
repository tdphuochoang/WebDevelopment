import React from "react";
import styled from "styled-components";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

const Todos = styled.div``;

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <Todos>
      {todos.map((todo) => (
        <SingleTodo
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          todo={todo}
        />
      ))}
    </Todos>
  );
};

export default TodoList;
