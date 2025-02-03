'use client';

import { useReducer } from 'react';

// Define the type for our state
type CounterState = {
  count: number;
};

// Define the type for our actions
type CounterAction = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'RESET' };

// Initial state
const initialState: CounterState = {
  count: 0
};

// Reducer function
function counterReducer(state: CounterState, action: CounterAction): CounterState {
  console.log('🔄 Reducer called with action:', action.type, 'current state:', state);
  
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
}

export default function CounterPage() {
  console.log('📦 Component rendering');
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div className="flex flex-col items-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold my-4">Counter with useReducer</h1>
      <p className="text-xl">Count: {state.count}</p>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch({ type: 'DECREMENT' })}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch({ type: 'RESET' })}
          className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
