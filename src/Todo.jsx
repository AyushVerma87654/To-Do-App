import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";
import { ImCross } from "react-icons/im";

function Todo() {
  // const todoStorage = localStorage.getItem("Todo") || "{}";
  // const doneStorage = localStorage.getItem("Done") || "{}";
  // const td = JSON.stringify(todoStorage);
  // const dd = JSON.stringify(doneStorage);
  // console.log(td);
  // console.log(dd);
  // const [todo, setTodo] = useState(td);
  // const [done, setDone] = useState(dd);

  const td = { "Bring Milk and Bread": "Bring Milk and Bread" };
  const dd = { "Clean my room": "Clean my room" };
  const [todo, setTodo] = useState(td);
  const [done, setDone] = useState(dd);

  const onAddFromTodo = (data) => {
    updatedDoneObject(data);
    const newTodo = { ...todo };
    delete newTodo[data];
    updateTodo(newTodo);
  };

  const updatedTodoObject = (data) => updateTodo({ ...todo, [data]: data });

  const updateTodo = (data) => {
    setTodo({ ...data });
    const todoString = JSON.stringify(data);
    localStorage.setItem("Todo", todoString);
  };

  const addTodo = (data) => {
    const newTodo = { ...todo, [data]: data };
    setTodo(newTodo);
  };

  const updatedDoneObject = (data) => updateDone({ ...done, [data]: data });

  const onAddFromDone = (data) => {
    updatedTodoObject(data);
    const newDone = { ...done };
    delete newDone[data];
    updateDone(newDone);
  };

  const updateDone = (data) => {
    setDone(data);
    const doneString = JSON.stringify(data);
    localStorage.setItem("Done", doneString);
  };

  const handleRemoveClick = (data) => removeDone(data);

  const removeDone = (data) => {
    console.log(data);
    const newDone = { ...done };
    delete newDone[data];
    updateDone(newDone);
  };

  return (
    <div className="bg-red-500 p-10">
      <h1 className="text-blue-700 font-bold mb-10 text-3xl">My Todo App</h1>
      <h2 className="my-4">Things to be done</h2>
      <div className="my-4">
        {Object.keys(todo).map((item) => (
          <Display key={item} data={item} onAdd={onAddFromTodo} />
        ))}
      </div>
      <AddTodo addTodo={addTodo} />
      <h2 className="my-4">Things done</h2>
      <div className="my-4">
        {Object.keys(done).map((item) => (
          <div className="flex space-x-5 item">
            <Display
              key={item}
              data={item}
              onAdd={onAddFromDone}
              checked="true"
              readOnly="readOnly"
            />
            <ImCross
              className="w-2 text-end"
              onClick={(event) => handleRemoveClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
