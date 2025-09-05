import React, { ChangeEvent, FC, useState } from "react";
import Button from "./Button";

type addTodoType = (data: string) => void;

type AddTodoProps = { addTodo: addTodoType };

const AddTodo: FC<AddTodoProps> = ({ addTodo }) => {
  const [click, setClick] = useState(true);
  const [input, setInput] = useState("");
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const newInput = event.target.value;
    if (newInput != "") {
      setInput(event.target.value);
    }
  }

  function handleButtonClick() {
    setClick(!click);
  }
  function handleSaveButtonClick() {
    if (input != "") {
      addTodo(input);
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
          <Button onClick={handleButtonClick}>Add Todo</Button>
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-">Create a Todo</h1>
          <input
            className="dark:text-black px-1"
            onChange={handleInputChange}
            value={input}
          />
          <div className="flex">
            <div className="w-20 h-8 mr-4">
              <Button onClick={handleSaveButtonClick}>Save</Button>
            </div>
            <div className="w-20 h-8">
              <Button type="button" onClick={resetForm}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddTodo;
