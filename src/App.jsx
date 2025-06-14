import { useState } from 'react';
import { ConversationsProvider } from './providers/ConversationsProvider';
import AppRoutes from './routes';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="h-screen w-screen flex flex-col">
      <ConversationsProvider>
        <AppRoutes darkMode={darkMode} setDarkMode={setDarkMode} />
      </ConversationsProvider>
    </div>
  );
}
