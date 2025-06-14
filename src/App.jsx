import { useState } from 'react';
import { ConversationsProvider } from './providers/ConversationsProvider';
import ChatPage from './pages/ChatPage';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ConversationsProvider>
      <ChatPage darkMode={darkMode} setDarkMode={setDarkMode} />
    </ConversationsProvider>
  );
}
