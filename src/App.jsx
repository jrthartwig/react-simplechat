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
const MOCK_MESSAGES = [
  {
    id: 101,
    user: 'You',
    text: 'What is the status of my last order?',
    time: '09:01 AM',
  },
  {
    id: 102,
    user: 'AI',
    text: 'Your last order was shipped yesterday and is expected to arrive tomorrow. [Doc: Invoice.pdf, p.2]',
    time: '09:01 AM',
  },
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

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    const newMsg = {
      id: Date.now(),
      user: 'You',
      text: input,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setInput('');
    await chatApi.sendMessage(selectedId, input, model);
    setLoading(false);
  };

  const handleNewConversation = async () => {
    const title = prompt('Enter conversation title:');
    if (!title) return;
    setLoading(true);
    const newConvo = await chatApi.createConversation(title);
    setSelectedId(newConvo.id);
    setLoading(false);
  };

  const handleSelectConversation = (id) => {
    setSelectedId(id);
  };

  const handleMenuAction = (id, action) => {
    if (action === 'delete') {
      if (window.confirm('Delete this conversation?')) {
        chatApi.deleteConversation(id)
          .then(() => {
            if (selectedId === id) {
              setSelectedId(null);
            }
          });
      }
    }
  };

  const handleFeedback = (msgId, type) => {
    setFeedback(prev => ({ ...prev, [msgId]: type }));
    chatApi.sendFeedback(msgId, type);
  };

  // Wrap the app in the correct providers
  return (
    <ConversationsProvider>
      <MessagesProvider selectedId={selectedId}>
        <div className={darkMode ? 'dark' : ''}>
          <div className="flex flex-col h-screen">
            <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
            <div className="flex flex-1 min-h-0 min-w-0">
              <ConversationList selectedId={selectedId} setSelectedId={setSelectedId} />
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
              />
            </div>
            <ChatFooter input={input} setInput={setInput} loading={loading} />
          </div>
        </div>
      </MessagesProvider>
    </ConversationsProvider>
  );
}
