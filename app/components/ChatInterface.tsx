'use client';

import { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  sources?: string[];
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('http://34.19.151.78/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage })
      });

      const data = await response.json();

      if (data.detail) {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: 'Error: ' + data.detail
        }]);
      } else {
        setMessages(prev => [...prev, {
          role: 'assistant',
          content: data.answer,
          sources: data.sources
        }]);
      }
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'Connection error. Please check if the API is running.'
      }]);
    }

    setLoading(false);
  };

  return (
    /* h-[100dvh] handles iOS Safari's dynamic toolbar (100vh doesn't) */
    <div className="flex flex-col h-[100dvh] bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header — pt-safe-6 adds safe-area-inset-top for the notch/Dynamic Island */}
      <div className="bg-white border-b border-gray-200 shadow-sm px-4 pt-safe-6 pb-4">
        <h1 className="text-2xl font-bold text-gray-800">Oracle 26ai RAG Chat</h1>
        <p className="text-gray-600 mt-1 text-sm">Powered by Oracle 26ai, Ollama, and GCP</p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 overscroll-contain">
        {messages.length === 0 && (
          <div className="h-full flex items-center justify-center text-center">
            <div>
              <h2 className="text-xl font-bold text-gray-700 mb-3">Welcome to AI Oracle</h2>
              <p className="text-gray-600 max-w-sm text-sm px-4">
                Ask questions about the application. I'll search Oracle 26ai and provide answers with sources.
              </p>
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] sm:max-w-md rounded-2xl p-3 sm:p-4 ${
              msg.role === 'user'
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-800 border border-gray-200'
            }`}>
              <p className="whitespace-pre-wrap text-sm sm:text-base">{msg.content}</p>
              {msg.sources && msg.sources.length > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-300">
                  <p className="text-xs font-semibold mb-1">Sources:</p>
                  <ul className="text-xs space-y-1">
                    {msg.sources.map((source, i) => (
                      <li key={i} className="text-gray-600">• {source}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white text-gray-800 border border-gray-200 rounded-2xl p-4">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input bar — pb-safe-6 adds safe-area-inset-bottom for the home indicator */}
      <div className="bg-white border-t border-gray-200 px-4 pt-4 pb-safe-6">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 text-base"
            disabled={loading}
            /* text-base (16px) prevents iOS Safari from auto-zooming on input focus */
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:bg-gray-400 transition min-w-[72px] font-medium"
          >
            {loading ? '...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  );
}
