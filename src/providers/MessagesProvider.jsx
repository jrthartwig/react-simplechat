import { useEffect, useState, createContext, useContext } from 'react';

const MessagesContext = createContext();

export function useMessages() {
  return useContext(MessagesContext);
}

export function MessagesProvider({ selectedId, children }) {
  const [messages, setMessages] = useState([
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
  ]);
  useEffect(() => {
    if (selectedId && selectedId !== 1) {
      setTimeout(() => {
        setMessages([
          { id: 201, user: 'You', text: 'Show me project Q&A', time: 'Yesterday' },
          { id: 202, user: 'AI', text: 'Here are the project Q&A details...', time: 'Yesterday' },
        ]);
      }, 300);
    } else if (selectedId === 1) {
      setMessages([
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
      ]);
    }
  }, [selectedId]);
  return (
    <MessagesContext.Provider value={{ messages, setMessages }}>
      {children}
    </MessagesContext.Provider>
  );
}
