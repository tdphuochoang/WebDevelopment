import React from "react";

const InputField = () => {
  return (
    <form className="input">
      <input
        type="input"
        className="input_box"
        placeholder="Enter a todo"
      ></input>
      <button type="submit" className="submit_btn">
        Enter
      </button>
    </form>
  );
};

export default InputField;
