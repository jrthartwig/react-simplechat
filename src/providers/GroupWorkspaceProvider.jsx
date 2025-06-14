import { createContext, useContext, useState, useEffect } from 'react';

const GroupWorkspaceContext = createContext();

// Mocked API
const mockApi = {
  fetchGroups: async () => {
    await new Promise(r => setTimeout(r, 400));
    return [
      { id: 1, name: 'AI Research', isActive: true },
      { id: 2, name: 'Frontend Team', isActive: false },
    ];
  },
  fetchDocuments: async (groupId) => {
    await new Promise(r => setTimeout(r, 300));
    if (!groupId) return [];
    return [
      { id: 1, fileName: 'AI_Whitepaper.pdf', title: 'AI Whitepaper', author: 'Alice', keywords: 'AI, research', abstract: 'A paper on AI.', classification: 'Public' },
      { id: 2, fileName: 'Frontend_Guide.docx', title: 'Frontend Guide', author: 'Bob', keywords: 'React, guide', abstract: 'A guide for frontend devs.', classification: 'Internal' },
    ];
  },
  fetchPrompts: async (groupId) => {
    await new Promise(r => setTimeout(r, 200));
    if (!groupId) return [];
    return [
      { id: 1, prompt: 'Summarize this document.' },
      { id: 2, prompt: 'List key findings.' },
    ];
  },
};

export default function GroupWorkspaceProvider({ children }) {
  const [groups, setGroups] = useState([]);
  const [activeGroupId, setActiveGroupId] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [prompts, setPrompts] = useState([]);
  const [loadingGroups, setLoadingGroups] = useState(true);
  const [loadingDocuments, setLoadingDocuments] = useState(false);
  const [loadingPrompts, setLoadingPrompts] = useState(false);

  useEffect(() => {
    setLoadingGroups(true);
    mockApi.fetchGroups().then(data => {
      setGroups(data);
      setActiveGroupId(data[0]?.id || null);
      setLoadingGroups(false);
    });
  }, []);

  useEffect(() => {
    if (!activeGroupId) return;
    setLoadingDocuments(true);
    mockApi.fetchDocuments(activeGroupId).then(setDocuments).finally(() => setLoadingDocuments(false));
    setLoadingPrompts(true);
    mockApi.fetchPrompts(activeGroupId).then(setPrompts).finally(() => setLoadingPrompts(false));
  }, [activeGroupId]);

  return (
    <GroupWorkspaceContext.Provider value={{
      groups, activeGroupId, setActiveGroupId, loadingGroups,
      documents, loadingDocuments,
      prompts, loadingPrompts
    }}>
      {children}
    </GroupWorkspaceContext.Provider>
  );
}

export function useGroupWorkspace() {
  return useContext(GroupWorkspaceContext);
}
