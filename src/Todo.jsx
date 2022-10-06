import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";
import { ImCross } from "react-icons/im";

function Todo() {
  //   const todoStorage = localStorage.getItem("Todo") || '["hi"] ';
  //   const doneStorage = localStorage.getItem("Done") || '["hi"] ';
  //   const t = JSON.parse(todoStorage);
  //   const [todo, setTodo] = useState(JSON.stringify(todoStorage));
  //   const [done, setDone] = useState(JSON.stringify(doneStorage));
  const a = {
    as: "as",
    az: "az",
    ad: "ad",
  };
  const aa = {
    aas: "aas",
    aaz: "aaz",
    aad: "aad",
  };
  const [todo, setTodo] = useState(aa);
  const [done, setDone] = useState(a);

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
    console.log("NewTodo", newTodo);
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

// name

// Things to be done heading

// list

// add Todo = button

// Things done heading

// list cross button
