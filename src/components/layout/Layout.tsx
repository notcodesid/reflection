import { ReactNode } from 'react';
import { Header } from './Header';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[700px] ml-8 md:ml-16 lg:ml-32 xl:ml-48 pr-4 py-8">
      <Header />
      {children}
    </div>
  );
}
