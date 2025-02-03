'use client';

import { useMemo, useState } from 'react';

export default function MemoExample() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  // Expensive calculation memoized with useMemo
  const expensiveValue = useMemo(() => {
    console.log('Calculating expensive value...'); // This will only run when count changes
    return count * 2 * 100 * 99 * 88 * 77 * 66 * 55 * 44 * 33 * 22 * 11;
  }, [count]); // Only recalculate when count changes

  return (
    <div className={`p-4 flex flex-col items-center justify-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl mb-4">useMemo Example</h1>
      
      <div className="space-y-4 flex flex-col items-center justify-center">
        <div>
          <p>Count: {count}</p>
          <p>Expensive Calculated Value: {expensiveValue}</p>
        </div>

        <div className="space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment Count
          </button>

          <button
            className="px-4 py-2 bg-purple-500 text-white rounded"
            onClick={() => setDarkMode(!darkMode)}
          >
            Toggle Theme
          </button>
        </div>
      </div>
    </div>
  );
}
