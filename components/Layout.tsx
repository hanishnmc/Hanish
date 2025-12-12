import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-100 to-zinc-200 flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 font-sans text-gray-800">
      <div className="w-full max-w-2xl">
        {children}
      </div>
    </div>
  );
};