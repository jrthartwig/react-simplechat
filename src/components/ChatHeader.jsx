import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';

export default function ChatHeader({ darkMode, setDarkMode }) {
  return (
    <header className={
      `flex justify-between items-center border-b px-8 py-2 min-h-12 shadow-sm ` +
      (darkMode
        ? 'bg-gradient-to-b from-gray-800/80 to-gray-900/60 border-gray-800'
        : 'bg-gradient-to-b from-white/80 to-blue-50/60 border-gray-200')
    } style={{ fontFamily: 'Inter, IBM Plex Sans, Satoshi, sans-serif', backdropFilter: 'blur(8px)' }}>
      <nav className={
        `flex gap-6 text-base ` +
        (darkMode ? 'text-blue-300' : 'text-blue-700')
      }>
        <span className="hover:underline cursor-pointer font-semibold">Your Workspace</span>
        <span className="hover:underline cursor-pointer font-semibold">Group Workspaces</span>
        <span className={
          `font-bold border-b-2 cursor-pointer font-semibold ` +
          (darkMode ? 'border-blue-300' : 'border-blue-700')
        }>Chat</span>
      </nav>
      <div className="flex items-center gap-6">
        <span className={
          `hover:underline cursor-pointer font-semibold ` +
          (darkMode ? 'text-gray-300' : 'text-gray-700')
        }>Admin</span>
        <span className={
          `hover:underline cursor-pointer font-semibold ` +
          (darkMode ? 'text-gray-300' : 'text-gray-700')
        }>My Account</span>
        <span className={
          `hover:underline cursor-pointer font-semibold ` +
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
