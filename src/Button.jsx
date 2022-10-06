import React from "react";

function Button({ onClick, data, type }) {
  return (
    <button
      className="bg-green-500 text-yellow-300 flex items-cnter justify-center rounded-md text-lg w-full h-full"
      onClick={onClick}
      type={type}
    >
      {data}
    </button>
  );
}

export default Button;
