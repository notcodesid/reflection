import Link from 'next/link';
import Image from 'next/image';

export function Header() {
  return (
    <header className="py-4">
      <div className="reflection-container">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full border border-primary bg-transparent mr-1"></div>
              <div className="w-4 h-4 rounded-full bg-primary"></div>
              <span className="ml-2 text-2xl font-serif">reflection</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
