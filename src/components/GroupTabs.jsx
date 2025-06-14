import { useState } from 'react';
import GroupDocuments from './GroupDocuments';
import GroupPrompts from './GroupPrompts';

export default function GroupTabs() {
  const [tab, setTab] = useState('documents');
  return (
    <div className="w-full">
      <div className="flex border-b border-slate-200 mb-2">
        <button
          className={`px-4 py-2 -mb-px border-b-2 transition-colors text-base focus:outline-none ${tab === 'documents' ? 'border-blue-600 text-blue-600 bg-slate-50' : 'border-transparent text-slate-500 hover:text-blue-600'}`}
          onClick={() => setTab('documents')}
        >
          Group Documents
        </button>
        <button
          className={`px-4 py-2 -mb-px border-b-2 transition-colors text-base focus:outline-none ${tab === 'prompts' ? 'border-blue-600 text-blue-600 bg-slate-50' : 'border-transparent text-slate-500 hover:text-blue-600'}`}
          onClick={() => setTab('prompts')}
        >
          Group Prompts
        </button>
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-b shadow p-4">
        {tab === 'documents' ? <GroupDocuments /> : <GroupPrompts />}
      </div>
    </div>
  );
}
