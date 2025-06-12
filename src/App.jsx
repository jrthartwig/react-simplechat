import { useEffect, useState } from 'react';
import { chatApi } from './api';
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
  const [conversations, setConversations] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [model, setModel] = useState('gpt-4o');
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({});

  // On mount, load mock data
  useEffect(() => {
    setConversations(MOCK_CONVERSATIONS);
    setSelectedId(MOCK_CONVERSATIONS[0].id);
    setMessages(MOCK_MESSAGES);
  }, []);

  useEffect(() => {
    if (selectedId && selectedId !== 1) {
      setLoading(true);
      chatApi.getMessages(selectedId)
        .then(msgs => {
          setMessages(msgs);
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
    setMessages(prev => [...prev, newMsg]);
    setInput('');
    await chatApi.sendMessage(selectedId, input, model);
    setLoading(false);
  };

  const handleNewConversation = async () => {
    const title = prompt('Enter conversation title:');
    if (!title) return;
    setLoading(true);
    const newConvo = await chatApi.createConversation(title);
    setConversations(prev => [...prev, newConvo]);
    setSelectedId(newConvo.id);
    setMessages([]);
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
            setConversations(prev => prev.filter(c => c.id !== id));
            if (selectedId === id) {
              setSelectedId(null);
              setMessages([]);
            }
          });
      }
    }
  };

  const handleFeedback = (msgId, type) => {
    setFeedback(prev => ({ ...prev, [msgId]: type }));
    chatApi.sendFeedback(msgId, type);
  };

  return (
    <div className={
      `flex h-screen ` +
      (darkMode ? 'bg-gray-900' : 'bg-gray-50')
    }>
      <ConversationList
        conversations={conversations}
        onSelect={handleSelectConversation}
        selectedId={selectedId}
        onNew={handleNewConversation}
        onMenu={handleMenuAction}
        darkMode={darkMode}
      />
      <div className="flex-1 flex flex-col">
        <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
        <ChatMain
          messages={messages}
          feedback={feedback}
          onFeedback={handleFeedback}
          darkMode={darkMode}
        />
        <ChatFooter
          onSend={handleSend}
          input={input}
          setInput={setInput}
          loading={loading}
          model={model}
          setModel={setModel}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}
