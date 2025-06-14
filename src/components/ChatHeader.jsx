import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

export default function ChatHeader({ darkMode, setDarkMode }) {
  return (
    <header className={
      `flex justify-between items-center border-b px-8 py-2 min-h-12 shadow-sm ` +
      (darkMode
        ? 'bg-gradient-to-b from-gray-800/80 to-gray-900/60 border-gray-800'
        : 'bg-gradient-to-b from-white/80 to-slate-100/60 border-slate-200')
    } style={{ fontFamily: 'Helvetica, Arial, sans-serif', backdropFilter: 'blur(8px)' }}>
      <nav className={
        `flex gap-6 text-base ` +
        (darkMode ? 'text-blue-300' : 'text-slate-700')
      }>
        <span className="hover:underline cursor-pointer">Your Workspace</span>
        <span className="hover:underline cursor-pointer">Group Workspaces</span>
        <span className={
          `border-b-2 cursor-pointer ` +
          (darkMode ? 'border-blue-300' : 'border-slate-700')
        }>Chat</span>
      </nav>
      <div className="flex items-center gap-6">
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-gray-300' : 'text-gray-700')
        }>Admin</span>
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-gray-300' : 'text-gray-700')
        }>My Account</span>
        <span className={
          `hover:underline cursor-pointer ` +
          (darkMode ? 'text-gray-300' : 'text-gray-700')
        }>Logout</span>
        <button
          className={
            `ml-4 px-3 py-1 rounded border flex items-center gap-1 shadow-sm ` +
            (darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600' : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200')
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
