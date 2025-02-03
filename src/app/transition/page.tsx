'use client';

import { useState, useTransition } from 'react';

export default function TransitionExample() {
  const [isPending, startTransition] = useTransition();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);

  // Simulate a slow data fetch
  const slowSearch = (query: string) => {
    const results = [];
    // Artificial delay to simulate slow computation
    for (let i = 0; i < 10000; i++) {
      if (i % 100 === 0) {
        results.push(`Result ${i} for "${query}"`);
      }
    }
    return results;
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Wrap the slow state update in startTransition
    startTransition(() => {
      const results = slowSearch(query);
      setSearchResults(results);
    });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">useTransition Example</h1>
      
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Type to search..."
        className="w-full p-2 border rounded mb-4"
      />

      {/* Show loading indicator when transition is pending */}
      {isPending && (
        <div className="text-blue-500 mb-2">Loading results...</div>
      )}

      {/* Display results */}
      <ul className="space-y-1">
        {searchResults.map((result, index) => (
          <li key={index} className="p-2 bg-input-background text-input-foreground rounded">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
}
