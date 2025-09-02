import React, { ButtonHTMLAttributes, FC } from "react";

type ButtonData = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonData> = ({ children, ...rest }) => {
  return (
    <button
      className="bg-green-500 text-yellow-300 flex items-cnter justify-center rounded-md text-lg w-full h-full"
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
