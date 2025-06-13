import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

export default function ChatFooter({ onSend, input, setInput, loading, model, setModel, darkMode }) {
  // Helper for icon color
  const iconColor = darkMode ? 'text-white' : 'text-gray-700';
  return (
    <form className={
      `flex gap-2 p-4 border-t items-center shadow-lg z-10 fixed bottom-0 left-80 right-0 ` +
      (darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200') +
      ' font-sans'
    } style={{ fontFamily: 'Inter, IBM Plex Sans, Satoshi, sans-serif', minHeight: '56px', backdropFilter: 'blur(8px)' }} onSubmit={onSend}>
      <div className="flex gap-2">
        {/* Image generation icon */}
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            className={`p-2 rounded transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            tabIndex={0}
            aria-label="Generate an image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="2.5" />
              <path d="M21 21l-6-6-3 3-4-4-4 4" />
            </svg>
          </button>
          <span className={`pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-xs text-white px-2 py-1 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-150 ${darkMode ? '' : 'bg-gray-900'}`}>Generate an image</span>
        </div>
        {/* File: search workspaces icon (folder with magnifier) */}
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            className={`p-2 rounded transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            tabIndex={0}
            aria-label="Search workspaces"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M3 7a2 2 0 012-2h3.5l1-1h4l1 1H19a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
              <circle cx="16.5" cy="16.5" r="2.5" />
              <path d="M18.5 18.5l2 2" />
            </svg>
          </button>
          <span className={`pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-xs text-white px-2 py-1 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-150 ${darkMode ? '' : 'bg-gray-900'}`}>Search workspaces</span>
        </div>
        {/* Browser: Bing search icon (globe) */}
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            className={`p-2 rounded transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            tabIndex={0}
            aria-label="Search with Bing Search API"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20M12 2a15.3 15.3 0 0 0 0 20" />
            </svg>
          </button>
          <span className={`pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-xs text-white px-2 py-1 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-150 ${darkMode ? '' : 'bg-gray-900'}`}>Search with Bing Search API</span>
        </div>
        {/* Paperclip: upload a file */}
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            className={`p-2 rounded transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            tabIndex={0}
            aria-label="Upload a file to the conversation"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M16.5 13.5V7a4.5 4.5 0 0 0-9 0v8a6 6 0 0 0 12 0V9" />
            </svg>
          </button>
          <span className={`pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-xs text-white px-2 py-1 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-150 ${darkMode ? '' : 'bg-gray-900'}`}>Upload a file to the conversation</span>
        </div>
        {/* Lightbulb: use a saved prompt */}
        <div className="group relative flex flex-col items-center">
          <button
            type="button"
            className={`p-2 rounded transition-colors duration-150 ${darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
            tabIndex={0}
            aria-label="Use a saved prompt"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path d="M12 3a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3.5 5.5V18a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2.5C6.5 14.5 5 12.5 5 10a7 7 0 0 1 7-7z" />
              <path d="M9 21h6" />
            </svg>
          </button>
          <span className={`pointer-events-none absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 text-xs text-white px-2 py-1 opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-150 ${darkMode ? '' : 'bg-gray-900'}`}>Use a saved prompt</span>
        </div>
      </div>
      <input
        value={input}
        onChange={e => setInput(e.target.value)}
        placeholder="Type your message..."
        disabled={loading}
        className={
          `flex-1 px-4 py-2 rounded border text-base shadow-sm ` +
          (darkMode
            ? 'border-gray-600 bg-gray-700 text-gray-100 placeholder-gray-400 focus:ring-blue-400 focus:outline-none'
            : 'border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-blue-400 focus:outline-none')
        }
        style={{ fontFamily: 'inherit' }}
      />
      <select
        className={
          `ml-2 px-2 py-2 rounded border text-base shadow-sm ` +
          (darkMode ? 'border-gray-600 bg-gray-700 text-gray-100' : 'border-gray-300 bg-gray-50 text-gray-900')
        }
        value={model}
        onChange={e => setModel(e.target.value)}
        style={{ fontFamily: 'inherit' }}
      >
        <option value="gpt-4o">gpt-4o</option>
        <option value="gpt-4">gpt-4</option>
        <option value="gpt-3.5">gpt-3.5</option>
      </select>
      <button
        type="submit"
        disabled={loading || !input.trim()}
        className={
          `px-6 py-2 rounded font-semibold shadow-sm ` +
          (darkMode
            ? 'bg-blue-600 text-white disabled:bg-gray-700'
            : 'bg-blue-700 text-white disabled:bg-gray-400')
        }
        style={{ fontFamily: 'inherit' }}
      >
        Send
      </button>
    </form>
  );
}
