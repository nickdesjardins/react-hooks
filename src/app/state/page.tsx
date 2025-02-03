'use client';
import { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">useState Example</h1>
      <div className="flex flex-col items-center justify-center">
        <p>Count: {count}</p>
        <button 
          onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded mb-4"
      >
          Increment
        </button>

        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default State