import { useState, createContext, useContext } from 'react';

const ConversationsContext = createContext();

export function useConversations() {
  return useContext(ConversationsContext);
}

export function ConversationsProvider({ children }) {
  const [conversations, setConversations] = useState([
    { id: 1, summary: 'A friendly welcome chat.' },
    { id: 2, summary: 'Q&A about your project.' },
  ]);
  // Add a new conversation and return its id
  const addConversation = () => {
    const newId = Date.now();
    setConversations(prev => [
      ...prev,
      { id: newId, summary: 'New conversation' }
    ]);
    return newId;
  };
  return (
    <ConversationsContext.Provider value={{ conversations, setConversations, addConversation }}>
      {children}
    </ConversationsContext.Provider>
  );
}
