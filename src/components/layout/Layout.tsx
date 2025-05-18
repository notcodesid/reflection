import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[700px] ml-16 md:ml-32 lg:ml-48 px-4 py-8">
      <Header />
      {children}
    </div>
  );
}
