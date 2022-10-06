import React from "react";

function Display({ data, onAdd, checked }) {
  return (
    <div className="flex h-4 space-x-2 items-center">
      <input
        checked={checked}
        className="-mb-1"
        type="checkbox"
        onClick={(event) => onAdd(data)}
      />
      <p>{data}</p>
    </div>
  );
}

export default Display;
