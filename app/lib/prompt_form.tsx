'use client';

import { useState } from 'react';
import generateResponse from '@/app/lib/generate_response';

const PromptForm = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await generateResponse(prompt);
      setResponse(res);
    } catch (error) {
      setResponse(`Error: ${error.message}`);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-white">
      <h1 className="mb-4 text-2xl font-bold">Generate Response</h1>
      <form onSubmit={handleSubmit} className="mb-4 flex items-center">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="px-4 py-2 border rounded-md text-black"
          placeholder="Enter your prompt"
          required
        />
        <button
          type="submit"
          className="ml-2 px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Submit'}
        </button>
      </form>
      {response && (
        <div className="mt-4 p-4 border rounded-md">
          <h2 className="text-xl font-bold">Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
};

export default PromptForm;
