import React from "react";
import Todo from "./Todo";
import DarkModeToggle from "./DarkModeToggle";

function App() {
  return (
    <div className="dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 h-screen bg-red-500 overflow-auto">
      <DarkModeToggle />
      <Todo />
    </div>
  );
}

export default App;
