'use client';

import Link from 'next/link';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export function Header() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  
  useEffect(() => { 
    setMounted(true) 
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  // Use consistent layout structure between mounted and unmounted states
  return (
    <header className="py-4">
      <div className="reflection-container">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {!mounted ? (
              <Image
                src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
                alt="Loading Light/Dark Toggle"
                width={24}
                height={24}
                sizes="24x24"
                priority={false}
                title="Loading Light/Dark Toggle"
              />
            ) : resolvedTheme === 'dark' ? (
              <FiSun
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => setTheme('light')}
                title="Switch to Light Mode"
              />
            ) : (
              <FiMoon
                className="cursor-pointer transition-all duration-300 hover:scale-110"
                onClick={() => setTheme('dark')}
                title="Switch to Dark Mode"
              />
            )}
            <Link href="/" className="flex items-center">
              <span className="ml-2 text-2xl font-serif">reflection</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}