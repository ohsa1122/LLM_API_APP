"use client";

import { useState } from 'react';

const ButtonPage = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="mb-4 text-2xl font-bold">Button Counter</h1>
      <p className="mb-4 text-xl">Count: {count}</p>
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={handleClick}
      >
        Increment
      </button>
    </div>
  );
};

export default ButtonPage;