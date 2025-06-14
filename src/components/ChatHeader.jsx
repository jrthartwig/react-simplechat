import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

export default function ChatHeader({ darkMode, setDarkMode }) {
  const location = useLocation();
  return (
    <header className={
      `flex justify-between items-center px-8 py-2 min-h-12 ` +
      (darkMode
        ? 'bg-gray-900 text-gray-100'
        : 'bg-white text-slate-900 border-b border-slate-200')
    } style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
      <nav className={
        `flex gap-6 text-base ` +
        (darkMode ? 'text-slate-200' : 'text-slate-700')
      }>
        <Link to="/" className={`hover:underline cursor-pointer ${location.pathname === '/' ? 'border-b-2 ' + (darkMode ? 'border-slate-200' : 'border-slate-700') : ''}`}>Chat</Link>
        <Link to="/your-workspace" className={`hover:underline cursor-pointer ${location.pathname === '/your-workspace' ? 'border-b-2 ' + (darkMode ? 'border-slate-200' : 'border-slate-700') : ''}`}>Your Workspace</Link>
        <Link to="/group-workspace" className={`hover:underline cursor-pointer ${location.pathname === '/group-workspace' ? 'border-b-2 ' + (darkMode ? 'border-slate-200' : 'border-slate-700') : ''}`}>Group Workspace</Link>
      </nav>
      <div className="flex items-center gap-6">
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-slate-300' : 'text-gray-700')
        }>Admin</span>
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-slate-300' : 'text-gray-700')
        }>My Account</span>
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-slate-300' : 'text-gray-700')
        }>Logout</span>
        <button
          className={
            `ml-4 px-3 py-1 rounded border flex items-center gap-1 ` +
            (darkMode ? 'bg-gray-800 border-gray-700 text-gray-100 hover:bg-gray-700' : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200')
          }
          onClick={() => setDarkMode((d) => !d)}
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon icon={faCircleHalfStroke} className="w-5 h-5 text-gray-500" />
        </button>
      </div>
    </header>
  );
}
