import React, { useRef } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  justify-content: center;
  height: 40px;
`;

const Input = styled.input`
  font-style: 25px;
  width: 30%;
  border: none;
  outline: none;
  padding-left: 10px;
  letter-spacing: 3px;
  border-radius: 6px 0px 0px 6px;
  transition: 0.2s;
  box-shadow: inset 0 0 5px black;

  &:focus {
    box-shadow: 0 0 10px 1000px rgba(0, 0, 0, 0.5);
    outlinet: none;
  }
`;

const Button = styled.button`
  background: darkblue;
  padding: 5px 15px;
  color: white;
  font-style: 20px;
  font-weight: bold;
  border: none;
  border-radius: 0px 6px 6px 0px;
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 0 2px black;

  &:hover {
    background: blue;
  }

  &:active {
    font-size: 15px;
  }
`;

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Form
      className="input"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}
    >
      <Input
        ref={inputRef}
        type="input"
        className="input_box"
        placeholder="Enter a todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      ></Input>
      <Button type="submit" className="submit_btn">
        Add
      </Button>
    </Form>
  );
};

export default InputField;
