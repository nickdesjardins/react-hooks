'use client'

import React, { useRef, useImperativeHandle, forwardRef } from 'react'

// Define the type for methods we want to expose
interface ChildHandles {
  focus: () => void
  clear: () => void
}

// Child component with forwarded ref
const ChildInput = forwardRef<ChildHandles, {}>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null)

  // Expose specific methods to parent
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
    clear: () => {
      if (inputRef.current) {
        inputRef.current.value = ''
      }
    }
  }))

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type something..."
      className="border p-2 rounded"
    />
  )
})

// Add display name for debugging
ChildInput.displayName = 'ChildInput'

// Parent component
export default function ImperativeHandlePage() {
  const childRef = useRef<ChildHandles>(null)

  const handleFocusClick = () => {
    childRef.current?.focus()
  }

  const handleClearClick = () => {
    childRef.current?.clear()
  }

  return (
    <div className="p-4 space-y-4 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold">useImperativeHandle Example</h1>
      <div className="space-y-2">
        <ChildInput ref={childRef} />
        <div className="space-x-2">
          <button
            onClick={handleFocusClick}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Focus Input
          </button>
          <button
            onClick={handleClearClick}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Clear Input
          </button>
        </div>
      </div>
    </div>
  )
}
