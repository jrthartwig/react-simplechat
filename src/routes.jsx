import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ChatPage from './pages/ChatPage';
import GroupWorkspacePage from './pages/GroupWorkspacePage';
import ChatHeader from './components/ChatHeader';

export default function AppRoutes({ darkMode, setDarkMode }) {
  return (
    <Router>
      <ChatHeader darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<ChatPage darkMode={darkMode} setDarkMode={setDarkMode} />} />
        <Route path="/group-workspace" element={<GroupWorkspacePage darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
