import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";
import { ImCross } from "react-icons/im";

function Todo() {
  const todoStorage = localStorage.getItem("Todo") || "[]";
  const doneStorage = localStorage.getItem("Done") || "[]";
  const td = JSON.parse(todoStorage);
  const dd = JSON.parse(doneStorage);
  const [todo, setTodo] = useState(td);
  const [done, setDone] = useState(dd);

  const onAddFromTodo = (data) => {
    updatedDoneObject(data);
    const newTodo = [...todo];
    const newTodoo = newTodo.filter((item) => {
      if (item != data) {
        return item;
      }
    });
    updateTodo(newTodoo);
  };

  const updatedTodoObject = (data) => updateTodo([...todo, data]);

  const updateTodo = (data) => {
    setTodo(data);
    const todoString = JSON.stringify(data);
    localStorage.setItem("Todo", todoString);
  };

  const addTodo = (data) => {
    const newTodo = [...todo, data];
    updateTodo(newTodo);
  };

  const updatedDoneObject = (data) => updateDone([...done, data]);

  const onAddFromDone = (data) => {
    updatedTodoObject(data);
    const newDone = [...done];
    const newDonee = newDone.filter((item) => {
      if (item != data) {
        return item;
      }
    });
    updateDone(newDonee);
  };

  const updateDone = (data) => {
    setDone(data);
    const doneString = JSON.stringify(data);
    localStorage.setItem("Done", doneString);
  };

  const handleRemoveClick = (data) => removeDone(data);

  const removeDone = (data) => {
    const newDone = [...done];
    const newDonee = newDone.filter((item) => {
      if (item != data) {
        return item;
      }
    });
    updateDone(newDonee);
  };

  return (
    <div className="bg-red-500 p-10">
      <h1 className="text-blue-700 font-bold mb-10 text-3xl">My Todo App</h1>
      <h2 className="my-4">Things to be done</h2>
      <div className="my-4">
        {todo &&
          todo.map((item) => (
            <Display key={item} data={item} onAdd={onAddFromTodo} />
          ))}
      </div>
      <AddTodo addTodo={addTodo} />
      <h2 className="my-4">Things done</h2>
      <div className="my-4">
        {done &&
          done.map((item) => (
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
