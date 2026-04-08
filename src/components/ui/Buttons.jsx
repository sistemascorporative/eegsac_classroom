import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm px-auto py-2 min-w-[100px] text-center text-white bg-sky-600 border border-sky-600 rounded-md active:text-sky-500 hover:bg-transparent hover:text-sky-600 focus:outline-none focus:ring ${className}`}
    >
      {children}
    </button>
  );
};


export { Button };