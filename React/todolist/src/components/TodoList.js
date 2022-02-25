import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul className="todos">
      {todos.map((todo) => (
        <Todo
          todos={todos}
          setTodos={setTodos}
          key={todo.id}
          text={todo.text}
          todo={todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
