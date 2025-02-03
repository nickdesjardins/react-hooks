'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

export default function LayoutEffectExample() {
  const [width, setWidth] = useState(0);
  const [effectWidth, setEffectWidth] = useState(0);
  const [position, setPosition] = useState('left');

  // useLayoutEffect runs synchronously before browser paint
  useLayoutEffect(() => {
    // This will be executed before the browser repaints
    const element = document.getElementById('layout-box');
    if (element) {
      const newWidth = element.getBoundingClientRect().width;
      setWidth(newWidth);
    }
  }, []); // Empty dependency array means this runs once after mount

  // useEffect runs asynchronously after browser paint
  useEffect(() => {
    // This will be executed after the browser repaints
    const element = document.getElementById('effect-box');
    if (element) {
      const newWidth = element.getBoundingClientRect().width;
      setEffectWidth(newWidth);
    }
  }, []); // Empty dependency array means this runs once after mount

  // New animation example
  useLayoutEffect(() => {
    // This will run synchronously, preventing the initial "left" position from being visible
    if (position === 'left') {
      setPosition('right');
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">useLayoutEffect vs useEffect Example</h1>
      
      <div className="space-y-4">
        <div>
          <h2 className="font-semibold">useLayoutEffect (Synchronous):</h2>
          <div
            id="layout-box"
            className="bg-blue-500 p-4 text-white"
          >
            Width: {width}px
          </div>
        </div>

        <div>
          <h2 className="font-semibold">useEffect (Asynchronous):</h2>
          <div
            id="effect-box"
            className="bg-green-500 p-4 text-white"
          >
            Width: {effectWidth}px
          </div>
        </div>
      </div>

      {/* New animation example */}
      <div className="mt-8">
        <h2 className="font-semibold mb-4">Animation Example:</h2>
        <div className="relative h-20 bg-gray-100 rounded">
          <div
            className={`absolute top-0 h-16 w-16 bg-purple-500 rounded transition-all duration-300 ${
              position === 'left' ? 'left-0' : 'left-[calc(100%-4rem)]'
            }`}
          />
        </div>
        <p className="mt-2 text-sm text-foreground">
          This box instantly appears on the right side without showing the initial left position,
          thanks to useLayoutEffect running before the browser paint.
        </p>
      </div>

      <div className="mt-8">
        <p className="text-foreground">
          <strong>Key Differences:</strong>
        </p>
        <ul className="list-disc ml-6 text-foreground">
          <li>useLayoutEffect runs synchronously after React performs all DOM mutations</li>
          <li>useEffect runs asynchronously after the browser has painted the updates</li>
          <li>useLayoutEffect can be useful when you need to make DOM measurements or prevent visual flickering</li>
        </ul>
      </div>
    </div>
  );
}
