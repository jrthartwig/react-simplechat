import { useState, createContext, useContext } from 'react';

const ConversationsContext = createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useState([
    { id: 1, title: 'Welcome Chat', time: '09:00 AM' },
    { id: 2, title: 'Project Q&A', time: 'Yesterday' },
  ]);
  // In the future, replace with API call in useEffect
  return (
    <ConversationsContext.Provider value={{ conversations, setConversations }}>
      {children}
    </ConversationsContext.Provider>
  );
}
