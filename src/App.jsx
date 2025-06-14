import { useEffect, useState } from 'react';
import { ConversationsProvider } from './providers/ConversationsProvider';
import { MessagesProvider } from './providers/MessagesProvider';
import ChatHeader from './components/ChatHeader';
import ChatFooter from './components/ChatFooter';
import ConversationList from './components/ConversationList';
import ChatMain from './components/ChatMain';

// Mocked chat history and initial messages
const MOCK_CONVERSATIONS = [
  { id: 1, title: 'Welcome Chat', time: '09:00 AM' },
  { id: 2, title: 'Project Q&A', time: 'Yesterday' },
];

const MODEL_OPTIONS = [
  { value: 'gpt-4o', label: 'GPT-4o' },
  { value: 'gpt-4', label: 'GPT-4' },
  { value: 'gpt-3.5-turbo', label: 'GPT-3.5' },
];

export default function Chat() {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('gpt-4o');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({});

  // On mount, load mock data
  useEffect(() => {
    setSelectedId(MOCK_CONVERSATIONS[0].id);
  }, []);

  useEffect(() => {
    if (selectedId && selectedId !== 1) {
      setLoading(true);
      chatApi.getMessages(selectedId)
        .then(msgs => {
          setLoading(false);
        });
    }
  }, [selectedId]);

  // Wrap the app in the correct providers
  return (
    <ConversationsProvider>
      <MessagesProvider>
        <div className={
          `flex h-screen w-screen overflow-hidden ` +
          (darkMode ? 'bg-gray-900' : 'bg-white')
        }>
          {/* Sidebar: fixed width, no resizing */}
          <ConversationList
            onSelect={setSelectedId}
            selectedId={selectedId}
            onNew={() => {}}
            onMenu={() => {}}
            darkMode={darkMode}
          />
          {/* Main chat area */}
          <div className="flex-1 flex flex-col h-full">
            <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            {/* Model selector and chat main */}
            <div className="flex flex-col flex-1">
              {/* Model selector at top left of chat area */}
              <div className={
                `flex items-center px-6 pt-4 pb-2` +
                (darkMode ? ' bg-gray-900' : ' bg-white')
              }>
                <label htmlFor="model-select" className={darkMode ? 'text-gray-300' : 'text-gray-700'} style={{ fontWeight: 500, marginRight: 8 }}>Model:</label>
                <select
                  id="model-select"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                  className={
                    `rounded px-3 py-1 border focus:outline-none ` +
                    (darkMode
                      ? 'bg-gray-800 border-gray-700 text-gray-100'
                      : 'bg-white border-gray-300 text-gray-900')
                  }
                  style={{ minWidth: 120 }}
                >
                  {MODEL_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>
              <ChatMain
                feedback={feedback}
                onFeedback={setFeedback}
                darkMode={darkMode}
                ChatFooterProps={{ input, setInput, loading, setLoading, model }}
              />
            </div>
          </div>
        </div>
      </MessagesProvider>
    </ConversationsProvider>
  );
}
