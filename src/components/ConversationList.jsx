import React from 'react';

export default function ConversationList({ conversations, onSelect, selectedId, onNew, onMenu, darkMode }) {
  return (
    <aside className={
      `w-80 flex flex-col ` +
      (darkMode ? 'bg-gray-900 border-r border-gray-700' : 'bg-white border-r border-gray-200')
    }>
      <div className={
        `flex items-center justify-between px-6 py-4 border-b ` +
        (darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200')
      }>
        <span className={
          `font-semibold text-lg ` + (darkMode ? 'text-gray-100' : 'text-gray-900')
        }>Conversations</span>
        <div className="flex gap-2">
          <button
            className={
              `p-2 rounded ` + (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')
            }
            title="New chat"
            onClick={onNew}
          >
            <span className="text-2xl font-bold">+</span>
          </button>
        </div>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className={
              `group px-6 py-4 cursor-pointer border-b flex items-center justify-between hover:bg-blue-50 ` +
              (conv.id === selectedId
                ? (darkMode ? 'bg-blue-900 font-semibold text-blue-200' : 'bg-blue-100 font-semibold')
                : (darkMode ? 'text-gray-100' : ''))
            }
            onClick={() => onSelect(conv.id)}
          >
            <div className="truncate">
              {conv.title}
              <div className={
                `text-xs mt-1 ` + (darkMode ? 'text-gray-400' : 'text-gray-500')
              }>{conv.time}</div>
            </div>
            <button
              className={
                `ml-2 p-1 rounded opacity-70 group-hover:opacity-100 ` +
                (darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200')
              }
              title="Conversation menu"
              onClick={e => { e.stopPropagation(); onMenu(conv.id); }}
            >
              <span className="text-lg">⋮</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
