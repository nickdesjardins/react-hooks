'use client';

import { useTheme } from '@/ThemeContext';

export default function Home() {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">React Hooks Guide</h1>
      <div className="max-w-3xl w-full space-y-6">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Hooks</h2>
          
          <div className="space-y-4">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/state" className="text-xl font-medium hover:underline">useState</a>
              <p className="text-gray-600">Manage local state in functional components. Perfect for simple state management needs.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/effect" className="text-xl font-medium hover:underline">useEffect</a>
              <p className="text-gray-600">Handle side effects in your components, like data fetching, subscriptions, or DOM mutations.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <span className="text-xl font-medium">useContext</span>
                <button
                  onClick={toggleTheme}
                  className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  {isDarkMode ? '🌙 Dark' : '☀️ Light'}
                </button>
              </div>
              <p className="text-gray-600 mt-2">Access our theme context for dark/light mode switching. Try the button above!</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Additional Hooks</h2>
          
          <div className="space-y-4">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/action-state" className="text-xl font-medium hover:underline">useActionState</a>
              <p className="text-gray-600">Track the state of async actions and transitions in React applications.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/reducer" className="text-xl font-medium hover:underline">useReducer</a>
              <p className="text-gray-600">Manage complex state logic using a reducer pattern, similar to Redux.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/callback" className="text-xl font-medium hover:underline">useCallback</a>
              <p className="text-gray-600">Memoize functions to prevent unnecessary re-renders in child components.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/memo" className="text-xl font-medium hover:underline">useMemo</a>
              <p className="text-gray-600">Memoize expensive computations to optimize performance.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/ref" className="text-xl font-medium hover:underline">useRef</a>
              <p className="text-gray-600">Access DOM elements directly and persist values across renders without causing re-renders.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/layout-effect" className="text-xl font-medium hover:underline">useLayoutEffect</a>
              <p className="text-gray-600">Similar to useEffect, but fires synchronously after DOM mutations.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/imperative-handle" className="text-xl font-medium hover:underline">useImperativeHandle</a>
              <p className="text-gray-600">Customize the instance value exposed to parent components when using refs.</p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Performance Hooks</h2>
          
          <div className="space-y-4">
            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/transition" className="text-xl font-medium hover:underline">useTransition</a>
              <p className="text-gray-600">Mark state updates as non-urgent to keep the UI responsive during heavy updates.</p>
            </div>

            <div className="border p-4 rounded-lg hover:shadow-md transition-shadow">
              <a href="/deferred-value" className="text-xl font-medium hover:underline">useDeferredValue</a>
              <p className="text-gray-600">Defer updating less important parts of the UI to avoid blocking more critical updates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
