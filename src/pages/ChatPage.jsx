import { useState, useEffect } from 'react';
import { useConversations } from '../providers/ConversationsProvider';
import { MessagesProvider } from '../providers/MessagesProvider';
import ChatHeader from '../components/ChatHeader';
import ChatFooter from '../components/ChatFooter';
import ConversationList from '../components/ConversationList';
import ChatMain from '../components/ChatMain';

const MODEL_OPTIONS = [
  { value: 'gpt-4o', label: 'GPT-4o' },
  { value: 'gpt-4', label: 'GPT-4' },
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5' },
];

export default function ChatPage({ darkMode, setDarkMode }) {
  const [selectedId, setSelectedId] = useState(null);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('gpt-4o');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({});
  const { conversations, addConversation } = useConversations();

  useEffect(() => {
    if (conversations.length > 0 && selectedId == null) {
      setSelectedId(conversations[0].id);
    }
  }, [conversations, selectedId]);

  const handleNewChat = () => {
    const newId = addConversation();
    setSelectedId(newId);
  };

  return (
    <div className={
      `flex h-screen w-screen overflow-hidden ` +
      (darkMode ? 'bg-gray-900' : 'bg-white')
    } style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <ConversationList
        onSelect={setSelectedId}
        selectedId={selectedId}
        onNew={handleNewChat}
        onMenu={() => {}}
        darkMode={darkMode}
      />
      <div className="flex-1 flex flex-col h-full">
        <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-col flex-1">
          <div className={
            `flex items-center px-6 pt-4 pb-2` +
            (darkMode ? ' bg-gray-900' : ' bg-white')
          }>
            <div className="relative">
              <select
                id="model-select"
                value={model}
                onChange={e => setModel(e.target.value)}
                className={
                  `appearance-none rounded-full px-4 py-2 border focus:outline-none shadow-sm transition-colors ` +
                  (darkMode
                    ? 'bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700'
                    : 'bg-slate-100 border-slate-300 text-slate-800 hover:bg-slate-200')
                }
                style={{ minWidth: 130, fontWeight: 500 }}
              >
                {MODEL_OPTIONS.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
              <svg
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <MessagesProvider selectedId={selectedId}>
            <ChatMain
              feedback={feedback}
              onFeedback={setFeedback}
              darkMode={darkMode}
              ChatFooterProps={{ input, setInput, loading, setLoading, model }}
            />
          </MessagesProvider>
        </div>
      </div>
    </div>
  );
}
