import React from 'react';
import { Copy, Check } from 'lucide-react';

interface OutputDisplayProps {
  content: string | null;
  error: string | null;
}

export const OutputDisplay: React.FC<OutputDisplayProps> = ({ content, error }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = async () => {
    if (content) {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (error) {
    return (
      <div className="p-6 mt-6 bg-red-50 border border-red-100 rounded-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="text-sm font-bold text-red-800 uppercase tracking-wide mb-1">Error</h3>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  if (!content) return null;

  return (
    <div className="relative mt-8 group animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-purple-600 rounded-2xl opacity-20 blur group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
      <div className="relative bg-white border border-gray-100 rounded-2xl shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-3 border-b border-gray-100 bg-gray-50/50">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">AI Response</span>
          <button
            onClick={handleCopy}
            className="flex items-center text-xs font-medium text-gray-500 hover:text-brand-600 transition-colors"
            title="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 mr-1.5 text-green-500" />
                <span className="text-green-600">Copied</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 mr-1.5" />
                Copy
              </>
            )}
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
        </div>
      </div>
    </div>
  );
};