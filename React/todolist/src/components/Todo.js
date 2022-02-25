import React from "react";

const Todo = ({ text, setTodos, todo, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span onClick={completeHandler}>{text}</span>
        <i onClick={deleteHandler} className="far fa-trash-alt"></i>
      </li>
    </div>
  );
};

export default Todo;
