import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { useMessages } from '../providers/MessagesProvider';
import ChatFooter from './ChatFooter';

export default function ChatMain({ feedback, onFeedback, darkMode, ChatFooterProps }) {
  const { messages } = useMessages();
  // Helper for icon color
  const iconColor = darkMode ? 'text-white' : 'text-gray-700';
  const iconInactive = darkMode ? 'text-gray-400' : 'text-gray-400';
  return (
    <div className="flex flex-col flex-1 min-h-0 h-full">
      <div className={
        `flex-1 overflow-y-auto px-6 pb-6 pt-2 flex flex-col` +
        (darkMode ? ' bg-gray-900 text-gray-100' : ' bg-white text-gray-900')
      } style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        {messages.map((msg, i) => (
          <div key={msg.id} className={`flex ${msg.user === 'You' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div className={`flex items-end gap-3 max-w-2xl w-full ${msg.user === 'You' ? 'flex-row-reverse' : ''}`}>
              {/* Avatar */}
              <div className="flex-shrink-0">
                {msg.user === 'You' ? (
                  <div className={
                    `w-8 h-8 rounded-full flex items-center justify-center border ` +
                    (darkMode ? 'bg-blue-900 border-blue-800' : 'bg-slate-200 border-slate-300')
                  }>
                    {/* User icon: monochrome */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-3.314 3.134-6 8-6s8 2.686 8 6" />
                    </svg>
                  </div>
                ) : (
                  <div className={
                    `w-8 h-8 rounded-full flex items-center justify-center border ` +
                    (darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-200 border-gray-300')
                  }>
                    {/* Bot icon: monochrome */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <rect x="5" y="8" width="14" height="8" rx="4" />
                      <circle cx="9" cy="12" r="1.5" />
                      <circle cx="15" cy="12" r="1.5" />
                      <path d="M12 4v4" />
                    </svg>
                  </div>
                )}
              </div>
              {msg.user === 'You' ? (
                // User message as elevated card
                <div className={
                  `rounded-2xl shadow-lg px-8 py-6 w-full border ` +
                  (darkMode
                    ? 'bg-blue-900 text-blue-100 border-blue-800'
                    : 'bg-slate-100 text-slate-800 border-slate-200')
                } style={{ transition: 'box-shadow 0.2s', fontWeight: 500 }}>
                  <div className={
                    `font-semibold mb-1 text-lg ` + (darkMode ? 'text-blue-200' : 'text-slate-700')
                  } style={{ fontWeight: 700 }}>{'You'}</div>
                  <div className="text-base whitespace-pre-line mb-2">{msg.text}</div>
                  {/* ...existing code for doc tag if needed... */}
                </div>
              ) : (
                // AI message: plain, no bubble, just text and controls
                <div className={
                  `rounded-2xl px-8 py-6 w-full border ` +
                  (darkMode
                    ? 'bg-gray-800 text-blue-100 border-blue-800'
                    : 'bg-slate-50 text-slate-700 border-slate-200')
                }>
                  <div className={
                    `font-semibold mb-1 text-lg ` + (darkMode ? 'text-blue-200' : 'text-slate-700')
                  } style={{ fontWeight: 700 }}>{`AI (gpt-4o)`}</div>
                  <div className="text-base whitespace-pre-line mb-2">{msg.text}</div>
                  <div className={`flex items-center gap-2 mb-2 ${darkMode ? 'text-gray-100' : 'text-gray-900'}`}>
                    <div className="flex gap-1 items-center self-start">
                      {/* Copy icon (Font Awesome) */}
                      <button
                        aria-label="Copy message"
                        className={`text-lg p-0.5 rounded hover:bg-gray-100/50 dark:hover:bg-gray-700/60 transition-colors duration-150 ${darkMode ? 'text-white' : 'text-gray-700'}`}
                        tabIndex={0}
                        style={{ lineHeight: 1 }}
                      >
                        <FontAwesomeIcon icon={faCopy} className="w-4 h-4" />
                      </button>
                      {/* Thumbs up icon (Font Awesome) */}
                      <button
                        aria-label="Thumbs up"
                        className={`text-lg p-0.5 rounded hover:bg-gray-100/50 dark:hover:bg-gray-700/60 transition-colors duration-150 ${feedback[msg.id]==='up' ? (darkMode ? 'text-blue-400' : 'text-blue-700') : (darkMode ? 'text-white' : 'text-gray-700')}`}
                        onClick={() => onFeedback(msg.id, 'up')}
                        tabIndex={0}
                        style={{ lineHeight: 1 }}
                      >
                        <FontAwesomeIcon icon={faThumbsUp} className="w-4 h-4" />
                      </button>
                      {/* Thumbs down icon (Font Awesome) */}
                      <button
                        aria-label="Thumbs down"
                        className={`text-lg p-0.5 rounded hover:bg-gray-100/50 dark:hover:bg-gray-700/60 transition-colors duration-150 ${feedback[msg.id]==='down' ? (darkMode ? 'text-blue-400' : 'text-blue-700') : (darkMode ? 'text-white' : 'text-gray-700')}`}
                        onClick={() => onFeedback(msg.id, 'down')}
                        tabIndex={0}
                        style={{ lineHeight: 1 }}
                      >
                        <FontAwesomeIcon icon={faThumbsDown} className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  {msg.text.includes('order') && (
                    <span className={
                      `inline-block rounded px-2 py-0.5 text-xs ` +
                      (darkMode ? 'text-blue-200 bg-blue-950' : 'text-blue-700 bg-blue-50')
                    }>[Doc: Invoice.pdf, p.2]</span>
                  )}
                </div>
              )}
            </div> {/* end message row */}
          </div> // end message container
        ))}
      </div>
      <div className="w-full flex-shrink-0 px-6 pb-4">
        <ChatFooter {...ChatFooterProps} darkMode={darkMode} />
      </div>
    </div>
  );
}
