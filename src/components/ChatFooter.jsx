export default function ChatFooter({ onSend, input, setInput, loading, model, setModel, darkMode }) {
  // Helper for icon color
  const iconColor = darkMode ? 'text-gray-200' : 'text-gray-700';
  return (
    <form className={
      `flex gap-2 items-center w-full max-w-3xl mx-auto rounded-xl border shadow-sm px-4 py-2 mt-4 mb-2 ` +
      (darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900')
    } style={{ fontFamily: 'Inter, IBM Plex Sans, Satoshi, sans-serif', minHeight: '48px' }} onSubmit={onSend}>
      <div className="flex gap-2 items-center">
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
      <textarea
        className={
          `flex-1 border-none outline-none bg-transparent px-2 py-1 text-base resize-none max-h-40 min-h-[40px] leading-relaxed ` +
          (darkMode ? 'placeholder-gray-400 text-gray-100' : 'placeholder-gray-400 text-gray-900')
        }
        placeholder="Type your message..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onInput={e => {
          e.target.style.height = 'auto';
          e.target.style.height = e.target.scrollHeight + 'px';
        }}
        disabled={loading}
        rows={1}
        aria-label="Chat message input"
      />
      <button
        type="submit"
        className={
          `ml-2 px-4 py-2 rounded-lg font-semibold transition-colors disabled:opacity-50 ` +
          (darkMode
            ? 'bg-gray-700 text-gray-200 hover:bg-gray-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300')
        }
        disabled={loading || !input.trim()}
      >
        Send
      </button>
    </form>
  );
}
