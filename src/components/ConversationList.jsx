import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faStar } from '@fortawesome/free-regular-svg-icons';
import { useConversations } from '../providers/ConversationsProvider';

export default function ConversationList({ onSelect, selectedId, onNew, onMenu, darkMode }) {
  const { conversations } = useConversations();
  return (
    <aside className={
      `w-64 flex flex-col flex-shrink-0 min-w-0 h-full pt-4 ` +
      (darkMode ? 'bg-gray-900 border-r border-gray-700' : 'bg-gray-50 border-r border-gray-200')
    } style={{ fontFamily: 'Inter, IBM Plex Sans, Satoshi, sans-serif', fontSize: '0.97rem' }}>
      <div className={
        `flex items-center justify-between px-4 pb-2 mb-2 border-b ` +
        (darkMode ? 'border-gray-700' : 'border-gray-200')
      }>
        <span className={
          `font-semibold text-base ` + (darkMode ? 'text-gray-100' : 'text-gray-900')
        } style={{ fontWeight: 600 }}>Conversations</span>
        <div className="flex gap-1">
          <button
            className={
              `p-1.5 rounded ` + (darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200')
            }
            title="New chat"
            onClick={onNew}
          >
            <FontAwesomeIcon icon={faCommentDots} className={darkMode ? "w-4 h-4 text-gray-400" : "w-4 h-4 text-gray-500"} />
          </button>
        </div>
      </div>
      <ul className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <li
            key={conv.id}
            className={
              `group px-4 py-2 cursor-pointer flex items-center justify-between rounded-lg mb-1 transition-colors ` +
              (conv.id === selectedId
                ? (darkMode ? 'bg-blue-950 font-semibold text-blue-200' : 'bg-blue-50 font-semibold text-blue-900')
                : (darkMode ? 'hover:bg-gray-800 text-gray-100' : 'hover:bg-gray-100 text-gray-900'))
            }
            onClick={() => onSelect(conv.id)}
          >
            <div className="flex items-center gap-2 truncate">
              <FontAwesomeIcon icon={faStar} className={darkMode ? "w-4 h-4 text-gray-700" : "w-4 h-4 text-gray-300"} />
              <span className="truncate">{conv.title}</span>
              <div className={darkMode ? "text-xs ml-2 text-gray-500" : "text-xs ml-2 text-gray-400"}>{conv.time}</div>
            </div>
            <button
              className={
                `ml-2 p-1 rounded opacity-70 group-hover:opacity-100 ` + (darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-200')
              }
              title="Conversation menu"
              onClick={e => { e.stopPropagation(); onMenu(conv.id); }}
            >
              <span className={darkMode ? "text-lg text-gray-400" : "text-lg"}>⋮</span>
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
