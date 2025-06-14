import { useState } from 'react';
import GroupDocuments from './GroupDocuments';
import GroupPrompts from './GroupPrompts';

export default function GroupTabs({ darkMode, documentsLabel = "Group Documents", promptsLabel = "Group Prompts", documentsDesc = "Documents uploaded here are visible to all group members.", promptsDesc = "Prompts available to all group members for this workspace.", ...rest }) {
  const [tab, setTab] = useState('documents');
  return (
    <div className="w-full">
      <div className="flex border-b border-slate-200 dark:border-gray-700 mb-2">
        <button
          className={`px-4 py-2 -mb-px border-b-2 transition-colors text-base focus:outline-none ${tab === 'documents' ? 'border-blue-600 text-blue-600 bg-slate-50 dark:bg-gray-800 dark:text-blue-300 dark:border-blue-400' : 'border-transparent text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300'}`}
          onClick={() => setTab('documents')}
        >
          {documentsLabel}
        </button>
        <button
          className={`px-4 py-2 -mb-px border-b-2 transition-colors text-base focus:outline-none ${tab === 'prompts' ? 'border-blue-600 text-blue-600 bg-slate-50 dark:bg-gray-800 dark:text-blue-300 dark:border-blue-400' : 'border-transparent text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-300'}`}
          onClick={() => setTab('prompts')}
        >
          {promptsLabel}
        </button>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-b shadow p-4">
        {tab === 'documents' ? <GroupDocuments darkMode={darkMode} description={documentsDesc} {...rest} /> : <GroupPrompts darkMode={darkMode} description={promptsDesc} {...rest} />}
      </div>
    </div>
  );
}
