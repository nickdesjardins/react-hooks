'use client';

import { useEffect, useState } from 'react';

export default function EffectExample() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // Effect that runs on every render
  useEffect(() => {
    console.log('This effect runs on every render');
  });

  // Effect that runs only once on mount
  useEffect(() => {
    console.log('This effect runs only once when component mounts');
  }, []);

  // Effect that runs when count changes
  useEffect(() => {
    console.log(`Count changed to: ${count}`);
    // Cleanup function example
    return () => {
      console.log('Cleanup before next effect or unmount');
    };
  }, [count]);

  return (
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">useEffect Examples</h1>
      
      <div className="space-y-4 flex flex-col items-center justify-center">

        <p>Count: {count}</p>

        <div>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(prev => prev + 1)}
          >
            Increment
          </button>
        </div>

        <div>
          <button 
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => setCount(prev => prev - 1)}
          >
            Decrement
          </button>
        </div>

        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type something..."
            className="border p-2 rounded mb-4 text-foreground"
          />
          <p>Name: {name}</p>
        </div>
      </div>
    </div>
  );
}
