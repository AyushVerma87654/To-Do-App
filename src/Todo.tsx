import React, { useState } from "react";
import AddTodo from "./AddTodo";
import Display from "./Display";
import { MdDelete, MdEdit } from "react-icons/md";
import { list, todo } from "./models";

function Todo() {
  const storage = localStorage.getItem("List") || "[]";
  const td: list = JSON.parse(storage);
  const [list, setList] = useState(td);
  const [show, setShow] = useState({
    delete: false,
    edit: false,
    editingId: 0,
  });

  const todos = list.filter((todo) => todo.status == false);
  const done = list.filter((todo) => todo.status == true);

  const onAddFromTodo = (id: number) => {
    const newList = list.filter((todo: todo) => {
      if (todo.id == id) {
        todo.status = true;
        return todo;
      } else {
        return todo;
      }
    });
    updateList(newList);
  };

  const updateList = (data: list) => {
    setList(data);
    const todoString = JSON.stringify(data);
    localStorage.setItem("List", todoString);
  };

  const addTodo = (data: string) => {
    const idStorage = localStorage.getItem("id") || "1";
    const id: number = JSON.parse(idStorage);
    const newTodo = { title: data, id: id, status: false };
    const newList = [...list, newTodo];
    localStorage.setItem("id", JSON.stringify(id + 1));
    updateList(newList);
  };

  const onAddFromDone = (id: number) => {
    const newList = list.filter((todo: todo) => {
      if (todo.id == id) {
        todo.status = false;
        return todo;
      } else {
        return todo;
      }
    });
    updateList(newList);
  };

  const updateEditShowButton = (key: boolean) =>
    setShow({ ...show, edit: key });

  const setEditingId = (key: number) => setShow({ ...show, editingId: key });

  const editTodo = (id: number, todoData: string) => {
    console.log("todoData", todoData);
    const newList = list.filter((todo: todo) => {
      if (todo.id == id) {
        todo.title = todoData;
        return todo;
      } else {
        return todo;
      }
    });
    updateList(newList);
  };

  const handleRemoveClick = (id: number) => {
    const newList = list.filter((todo) => todo.id != id);
    updateList(newList);
  };

  return (
    <div className="bg-red-500 p-6 sm:p-10 h-screen overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h1 className="text-blue-700 font-bold mb-10 text-3xl">My Todo's</h1>
        <div>
          {list.length > 0 && (
            <div className="flex items-center gap-2">
              <MdEdit
                className="text-3xl mb-9 text-blue-500"
                onClick={() => setShow({ ...show, edit: !show.edit })}
              />
              <MdDelete
                className="text-3xl mb-9 text-blue-500"
                onClick={() => setShow({ ...show, delete: !show.delete })}
              />
            </div>
          )}
        </div>
      </div>
      <h2 className="my-4">Things to be done</h2>
      <div className="my-4">
        {todos &&
          todos.map((item) => (
            <Display
              id={item.id}
              key={item.id}
              data={item.title}
              onAdd={onAddFromTodo}
              handleRemoveClick={handleRemoveClick}
              showDeleteButton={show.delete}
              showEditButton={show.edit}
              editingId={show.editingId}
              setEditingId={setEditingId}
              editTodo={editTodo}
              updateEditShowButton={updateEditShowButton}
            />
          ))}
      </div>
      <AddTodo addTodo={addTodo} />
      <h2 className="my-4">Things done</h2>
      <div className="my-4">
        {done &&
          done.map((done: todo) => (
            <Display
              id={done.id}
              handleRemoveClick={handleRemoveClick}
              key={done.id}
              data={done.title}
              onAdd={onAddFromDone}
              checked={true}
              showDeleteButton={show.delete}
              showEditButton={show.edit}
              editingId={show.editingId}
              setEditingId={setEditingId}
              editTodo={editTodo}
              updateEditShowButton={updateEditShowButton}
            />
          ))}
      </div>
    </div>
  );
}

export default Todo;
