'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

export default function GirlfriendPage() {
  const [showMessage, setShowMessage] = useState(false);
  const [showHearts, setShowHearts] = useState(false);

  useEffect(() => {
    setShowMessage(true);
    setTimeout(() => setShowHearts(true), 1000);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-200 to-purple-200 flex flex-col items-center justify-center p-4">
      <div className={`transition-opacity duration-1000 ${showMessage ? 'opacity-100' : 'opacity-0'}`}>
        <h1 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 text-center">
          To My Beloved Kathya ❤️
        </h1>
        
        <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-8 shadow-lg">
          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
            My dearest love, I want to thank you for being the most understanding
            and supportive girlfriend anyone could ask for. Your patience while I study
            and code means the world to me.
          </p>
          
          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
            Every moment you wait for me, every smile you give me when I talk about
            my progress, and every bit of encouragement you provide makes me fall
            in love with you even more.
          </p>

          <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed">
            I promise to make up for all the time I spend coding. You deserve all
            the love and attention in the world. I love you with all my heart!
          </p>
        </div>

        <div className="text-center mt-8">
          <button 
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full text-xl transition-all transform hover:scale-105"
            onClick={() => alert('I love you so much, my darling! ❤️')}
          >
            Click for a surprise! 💝
          </button>
        </div>
      </div>

      {showHearts && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                fontSize: `${Math.random() * 2 + 1}rem`
              }}
            >
              ❤️
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
