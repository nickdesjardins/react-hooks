'use client'

import { useState, useDeferredValue } from 'react'

export default function DeferredValueExample() {
  
  const [searchInput, setSearchInput] = useState('')
  const deferredSearchInput = useDeferredValue(searchInput)
  
  console.log('Current searchInput:', searchInput)
  console.log('Deferred searchInput:', deferredSearchInput)
  console.log('Are values different?', searchInput !== deferredSearchInput)

  // Generate a large list of items for demonstration
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`)

  // Filter items based on deferred value
  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(deferredSearchInput.toLowerCase())
  )
  
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useDeferredValue Example</h1>
      
      <div className="mb-4">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => {
            console.log('Input changed to:', e.target.value)
            setSearchInput(e.target.value)
          }}
          placeholder="Search items..."
          className="w-full p-2 border rounded"
        />
        
        {/* Show when input and deferred value are different */}
        {searchInput !== deferredSearchInput && (
          <p className="text-gray-500 text-sm mt-1">Loading...</p>
        )}
      </div>

      <ul className="space-y-1 bg-input-background text-input-foreground rounded">
        {filteredItems.map((item) => (
          <li key={item} className="p-2 text-foreground rounded">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}
