import React from "react";

const Button = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full text-sm px-auto py-2 min-w-[100px] text-center text-white bg-orange-600 border border-orange-600 rounded-md active:text-orange-500 hover:bg-transparent hover:text-orange-600 focus:outline-none focus:ring ${className}`}
    >
      {children}
    </button>
  );
};


export { Button };