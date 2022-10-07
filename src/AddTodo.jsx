import React, { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
  const [click, setClick] = useState(true);
  const [disable, setDisable] = useState(0);
  const [input, setInput] = useState("");
  function handleInputChange(event) {
    const newInput = event.target.value;

    if (newInput != "") {
      setInput(event.target.value);
      setDisable(1);
    }
  }

  function handleButtonClick() {
    setClick(!click);
  }
  function submitForm(event) {
    event.preventDefault();
    if (input != "") {
      addTodo(input);
      setClick(!click);
      setInput("");
    }
  }
  function resetForm() {
    setInput("");
    setClick(!click);
  }
  return (
    <div className="p-1">
      {click ? (
        <div className="w-32 h-8 my-4">
          <Button onClick={handleButtonClick} data="Add Todo" />{" "}
        </div>
      ) : (
        <form onSubmit={submitForm} className="space-y-4">
          <h1 className="text-">Create a Todo</h1>
          <input type="text-xl" onChange={handleInputChange} value={input} />
          <div className="flex">
            <div className="w-20 h-8 mr-4">
              <Button data="Save" />
            </div>
            <div className="w-20 h-8">
              <Button type="button" onClick={resetForm} data="Cancel" />
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default AddTodo;
