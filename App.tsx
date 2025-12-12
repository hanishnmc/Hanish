import React, { useState, useCallback } from 'react';
import { generateContent } from './services/geminiService';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Button } from './components/Button';
import { TextArea } from './components/TextArea';
import { OutputDisplay } from './components/OutputDisplay';
import { GenerationState } from './types';
import { Wand2 } from 'lucide-react';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [state, setState] = useState<GenerationState>({
    isLoading: false,
    data: null,
    error: null,
  });

  const handleGenerate = useCallback(async () => {
    if (!input.trim()) return;

    setState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      const result = await generateContent(input);
      setState({ isLoading: false, data: result, error: null });
    } catch (err: any) {
      setState({
        isLoading: false,
        data: null,
        error: err.message || "An unexpected error occurred",
      });
    }
  }, [input]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  return (
    <Layout>
      <Header />
      
      <main className="bg-white p-6 sm:p-8 rounded-3xl shadow-2xl shadow-gray-200/50 border border-white">
        <div className="space-y-6">
          <TextArea
            label="What would you like to create?"
            placeholder="E.g., Write a haiku about a futuristic city..."
            value={input}
            onChange={handleInputChange}
            rows={5}
            disabled={state.isLoading}
          />
          
          <Button 
            onClick={handleGenerate} 
            isLoading={state.isLoading}
            disabled={!input.trim()}
          >
            {!state.isLoading && <Wand2 className="w-5 h-5 mr-2" />}
            {state.isLoading ? 'Generating Magic...' : 'Generate Content'}
          </Button>
        </div>

        <OutputDisplay 
          content={state.data} 
          error={state.error} 
        />
      </main>
      
      <footer className="mt-12 text-center text-sm text-gray-400">
        <p>Powered by Google Gemini API</p>
      </footer>
    </Layout>
  );
};

export default App;