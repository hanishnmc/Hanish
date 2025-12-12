import React from 'react';
import { TextAreaProps } from '../types';

export const TextArea: React.FC<TextAreaProps> = ({ label, className = '', ...props }) => {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-semibold text-gray-700">
        {label}
      </label>
      <textarea
        className={`w-full p-4 text-gray-800 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all duration-200 resize-none shadow-sm placeholder-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
};