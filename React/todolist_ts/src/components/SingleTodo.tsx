import React from "react";
import { Todo } from "../model";
import styled from "styled-components";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const Form = styled.form`
  background: gold;
  width: 33.5%;
  height: 50px;
  margin: 0px auto;
  display: flex;
  border-radius: 5px;
  align-items: center;
  padding: 0px 20px;
  margin-top: 2px;

  @media (max-width: 700px) {
    width: 60%;
  }
`;
const SingleText = styled.span`
  flex: 1;
  font-size: 20px;
  border: none;
  padding: 5px;

  &:focus {
    outline: none;
  }
`;
const IconContainer = styled.div``;

const Icon = styled.span`
  margin-left: 10px;
  font-size: 25px;
  cursor: pointer;
  transition: 0.3s;
`;

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <Form>
      <SingleText>{todo.todo}</SingleText>
      <IconContainer>
        <Icon className="grey">
          <AiFillEdit />
        </Icon>
        <Icon className="red">
          <AiFillDelete />
        </Icon>
        <Icon className="green">
          <MdDone />
        </Icon>
      </IconContainer>
    </Form>
  );
};

export default SingleTodo;
