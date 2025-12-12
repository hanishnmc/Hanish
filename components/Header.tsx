import React from 'react';
import { Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="mb-8 text-center">
      <div className="inline-flex items-center justify-center p-3 mb-4 bg-white rounded-full shadow-md">
        <Sparkles className="w-8 h-8 text-brand-500" />
      </div>
      <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl mb-2">
        Gemini <span className="text-brand-600">Generator</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-xl mx-auto">
        Unleash the power of AI to generate creative content instantly.
      </p>
    </header>
  );
};