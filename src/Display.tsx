import React, { FC, useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Button from "./Button";
import { MdDelete, MdEdit } from "react-icons/md";

type fun = (data: number) => void;

type DisplayProps = {
  id: number;
  data: string;
  onAdd: (data: number) => void;
  handleRemoveClick: (data: number) => void;
  checked?: boolean;
  readOnly?: boolean;
  showDeleteButton: boolean;
  showEditButton: boolean;
  editingId: number;
  setEditingId: (key: number) => void;
  editTodo: (id: number, todoData: string) => void;
  updateEditShowButton: (key: boolean) => void;
};

const Display: FC<DisplayProps> = ({
  data,
  id,
  onAdd,
  handleRemoveClick,
  checked,
  readOnly,
  showDeleteButton,
  showEditButton,
  editingId,
  setEditingId,
  editTodo,
  updateEditShowButton,
}) => {
  let border = "border-4 border-blue-500";
  if (showDeleteButton || showEditButton) {
    border = "border-4 border-black";
  }
  let myFunction = () => {};
  if (showDeleteButton) {
    myFunction = () => handleRemoveClick(id);
  }
  console.log("showEditButton", editingId);
  return (
    <div className={"flex justify-between my-2 items-center " + border}>
      <div className="flex items-center pl-1 max-w-[95%]">
        <input
          readOnly={readOnly}
          checked={checked}
          onChange={() => {}}
          className="mt-1 mr-1"
          type="checkbox"
          onClick={() => onAdd(id)}
        />
        {showEditButton && editingId === id ? (
          <input
            className="bg-transparent border"
            value={data}
            onChange={(event) => editTodo(id, event.target.value)}
          />
        ) : (
          <p>{data}</p>
        )}
      </div>
      {showDeleteButton && (
        <MdDelete
          className="text-2xl text-blue-500 mr-2"
          onClick={() => myFunction()}
        />
      )}
      {showEditButton && (
        <MdEdit
          className="text-2xl text-blue-500 mr-2"
          onClick={() => setEditingId(editingId === id ? 0 : id)}
        />
      )}
    </div>
  );
};

export default Display;
