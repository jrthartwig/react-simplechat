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
      <MessagesProvider selectedId={selectedId}>
        <div className={darkMode ? 'dark bg-gray-900 text-gray-100' : ''}>
          <div className="flex flex-col h-screen">
            <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-1 min-h-0 min-w-0 bg-inherit">
              {/* Sidebar with conversations */}
              <div className="flex flex-col w-64 flex-shrink-0 min-w-0 h-full">
                <ConversationList selectedId={selectedId} setSelectedId={setSelectedId} darkMode={darkMode} />
              </div>
              {/* Main chat area with model selector at the top left of chat area, to the right of the sidebar */}
              <div className="flex flex-col flex-1 min-h-0 min-w-0">
                <div className="flex items-center pt-4 pl-4 pb-2">
                  <select
                    className={
                      `px-4 py-2 rounded-xl shadow border text-base font-semibold cursor-pointer ` +
                      (darkMode ? 'bg-gray-800 border-gray-700 text-gray-100' : 'bg-white border-gray-200 text-gray-900')
                    }
                    value={model}
                    onChange={e => setModel(e.target.value)}
                  >
                    {MODEL_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value} className={darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900'}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <ChatMain
                  selectedId={selectedId}
                  loading={loading}
                  setLoading={setLoading}
                  input={input}
                  setInput={setInput}
                  model={model}
                  setModel={setModel}
                  feedback={feedback}
                  setFeedback={setFeedback}
                  ChatFooterProps={{
                    input,
                    setInput,
                    loading,
                    model,
                    setModel,
                    darkMode,
                  }}
                  darkMode={darkMode}
                />
              </div>
            </div>
          </div>
        </div>
      </MessagesProvider>
    </ConversationsProvider>
  );
}
