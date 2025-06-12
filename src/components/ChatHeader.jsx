import React from 'react';

export default function ChatHeader({ darkMode, setDarkMode }) {
  return (
    <header className={
      `flex justify-between items-center border-b px-8 py-3 ` +
      (darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')
    }>
      <nav className={
        `flex gap-6 text-base ` +
        (darkMode ? 'text-blue-300' : 'text-blue-700')
      }>
        <span className="hover:underline cursor-pointer">Your Workspace</span>
        <span className="hover:underline cursor-pointer">Group Workspaces</span>
        <span className={
          `font-bold border-b-2 cursor-pointer ` +
          (darkMode ? 'border-blue-300' : 'border-blue-700')
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
            `ml-4 px-3 py-1 rounded border flex items-center gap-1 ` +
            (darkMode ? 'bg-gray-700 border-gray-600 text-gray-100 hover:bg-gray-600' : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200')
          }
          onClick={() => setDarkMode((d) => !d)}
        >
          {darkMode ? <span>🌙 Dark</span> : <span>☀️ Light</span>}
        </button>
      </div>
    </header>
  );
}
