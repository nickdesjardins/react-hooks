'use client';

import { useRef, useState } from 'react';

export default function UseRefExample() {
  // Ref for DOM element
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Ref for storing a value that persists between renders
  const countRef = useRef<number>(0);
  
  // State for forcing re-render
  const [, setForceUpdate] = useState<boolean>(false);

  const focusInput = () => {
    // Access DOM element and focus it
    inputRef.current?.focus();
  };

  const incrementCounter = () => {
    // Update ref value (doesn't cause re-render)
    countRef.current += 1;
    console.log('Current count:', countRef.current);
  };

  const showCount = () => {
    // Force re-render to display current ref value
    setForceUpdate(prev => !prev);
  };

  return (
    <div className="p-4 max-w-md mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">useRef Example</h1>
      
      <div className="mb-6">
        <h2 className="text-xl mb-2">DOM Reference Example</h2>
        <input
          ref={inputRef}
          type="text"
          className="border p-2 mr-2"
          placeholder="Type something..."
        />
        <button
          onClick={focusInput}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Focus Input
        </button>
      </div>

      <div className="mb-6 flex flex-col items-center justify-center">
        <h2 className="text-xl mb-2">Persistent Value Example</h2>
        <p className="mb-2">Count (ref): {countRef.current}</p>
        <button
          onClick={incrementCounter}
          className="bg-green-500 text-white px-4 py-2 rounded mr-2 mb-2"
        >
          Increment (won&apos;t re-render)
        </button>
        <button
          onClick={showCount}
          className="bg-purple-500 text-white px-4 py-2 rounded"
        >
          Show Current Count
        </button>
      </div>
    </div>
  );
}
