'use client';

import { useState, useCallback, useEffect } from 'react';

const CallbackExample = () => {
  console.log('🔄 Component rendered');  // Logs every time the component renders

  // Basic state declarations for our example
  // These will trigger re-renders when they change
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useCallback Example 1: Memoized callback with no dependencies
  // This function will be cached and reused across re-renders
  // Without useCallback, a new function would be created on every render
  // The empty dependency array [] means this function will never need to be recreated
  const handleIncrement = useCallback(() => {
    console.log('⚡ Increment callback executed');
    setCount((prevCount) => {
      console.log(`📈 Updating count from ${prevCount} to ${prevCount + 1}`);
      return prevCount + 1;
    });
  }, []); 

  // useCallback Example 2: Memoized callback for input handling
  // The function is still memoized but demonstrates a different use case
  // This is particularly useful when passing callbacks to child components
  // TypeScript type annotation shows this handles input change events
  const handleTextChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('✏️ Text callback executed');
    setText(e.target.value);
  }, []); // Empty array as we don't need to recreate this function

  // Effect to demonstrate when callbacks are recreated
  useEffect(() => {
    console.log('🎣 Callbacks were initialized');
  }, [handleIncrement, handleTextChange]);

  return (
    // Basic layout structure with Tailwind CSS classes
    <div className="p-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl mb-4">useCallback Example</h1>
      
      {/* Counter section: Demonstrates the first useCallback usage */}
      <div className="mb-4 flex flex-col items-center justify-center">
        <p>Count: {count}</p>
        <button 
          onClick={handleIncrement} // Using our memoized callback
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Increment
        </button>
      </div>

      {/* Text input section: Demonstrates the second useCallback usage */}
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          value={text}
          onChange={handleTextChange} // Using our memoized callback
          className="border p-2 rounded"
          placeholder="Type something..."
        />
        <p className="mt-2">Text: {text}</p>
      </div>

      <div className="mt-4 p-4 bg-muted rounded text-foreground">
        <p>Open the console (F12) to see the logs!</p>
      </div>
    </div>
  );
};

export default CallbackExample;
