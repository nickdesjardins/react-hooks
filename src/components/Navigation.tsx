'use client';

import Link from 'next/link';
import { useTheme } from '../ThemeContext';
import { useState } from 'react';

export default function Navigation() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isHooksOpen, setIsHooksOpen] = useState(false);
  
  return (
    <nav className="bg-background border-b border-foreground/10 p-4">
      <div className="max-w-6xl mx-auto flex gap-4 justify-between">
        <div className="flex gap-4">
          <Link 
            href="/" 
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={() => setIsHooksOpen(!isHooksOpen)}
              onBlur={() => setTimeout(() => setIsHooksOpen(false), 200)}
              className="text-foreground hover:text-foreground/80 transition-colors"
            >
              Hooks ▼
            </button>
            
            {isHooksOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-background border border-foreground/10 rounded-lg shadow-lg py-2">
                <Link 
                  href="/state" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useState
                </Link>
                <Link 
                  href="/effect" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useEffect
                </Link>
                <Link 
                  href="/memo" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useMemo
                </Link>
                <Link 
                  href="/callback" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useCallback
                </Link>
                <Link 
                  href="/ref" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useRef
                </Link>
                <Link 
                  href="/reducer" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useReducer
                </Link>
                <Link 
                  href="/imperative-handle" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useImperativeHandle
                </Link>
                <Link 
                  href="/transition" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useTransition
                </Link>
                <Link 
                  href="/deferred-value" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useDeferredValue
                </Link>
                <Link 
                  href="/layout-effect" 
                  className="block px-4 py-2 text-foreground hover:bg-foreground/10 transition-colors"
                >
                  useLayoutEffect
                </Link>
              </div>
            )}
          </div>

          {/* <Link 
            href="/girlfriend" 
            className="text-foreground hover:text-foreground/80 transition-colors"
          >
            Girlfriend
          </Link> */}
        </div>
        <div className="flex gap-4 justify-between items-center">
        
          <button
            onClick={toggleTheme}
            className="relative w-14 h-7 rounded-full bg-gradient-to-r from-zinc-200 to-zinc-300 dark:from-zinc-700 dark:to-zinc-800 shadow-inner transition-colors duration-200"
          >
            <div
              className={`absolute top-1 left-1 w-5 h-5 rounded-full shadow-md transition-transform duration-200 flex items-center justify-center
                ${isDarkMode 
                  ? 'translate-x-7 bg-gradient-to-br from-indigo-500 to-purple-600' 
                  : 'translate-x-0 bg-gradient-to-br from-amber-300 to-yellow-400'
                }`}
            >
              {isDarkMode ? '🌙' : '☀️'}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
