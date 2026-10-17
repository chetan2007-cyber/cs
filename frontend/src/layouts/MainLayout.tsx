import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fafaf9] text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
