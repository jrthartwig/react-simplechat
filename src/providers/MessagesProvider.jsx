import { useEffect, useState, createContext, useContext } from 'react';

const MessagesContext = createContext();

export function useMessages() {
  return useContext(MessagesContext);
}

// Mocked messages for each conversation
const MOCKED_MESSAGES = {
  1: [
    {
      id: 101,
      user: 'You',
      text: 'What is the status of my last order?',
    },
    {
      id: 102,
      user: 'AI',
      text: 'Your last order was shipped yesterday and is expected to arrive tomorrow. [Doc: Invoice.pdf, p.2]',
    },
  ],
  2: [
    { id: 201, user: 'You', text: 'Show me project Q&A' },
    { id: 202, user: 'AI', text: 'Here are the project Q&A details...' },
  ],
};

export function MessagesProvider({ selectedId, children }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!selectedId) {
      setMessages([]);
      return;
    }
    if (MOCKED_MESSAGES[selectedId]) {
      setTimeout(() => {
        setMessages(MOCKED_MESSAGES[selectedId]);
      }, 200);
    } else {
      // New chat: show empty or welcome message
      setMessages([]);
    }
  }, [selectedId]);

  // Allow adding a message to the current conversation
  const addMessage = (msg) => {
    setMessages((prev) => [...prev, msg]);
    // Optionally update MOCKED_MESSAGES[selectedId] if you want persistence
  };

  return (
    <MessagesContext.Provider value={{ messages, setMessages, addMessage }}>
      {children}
    </MessagesContext.Provider>
  );
}
