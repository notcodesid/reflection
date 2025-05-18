'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    if (isDarkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-lg font-medium hover:underline">
          reflection
        </Link>
        <div className="flex items-center space-x-2">
          <button 
            onClick={toggleTheme}
            className="text-sm"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? "light" : "dark"}
          </button>
        </div>
      </div>
    </header>
  );
}