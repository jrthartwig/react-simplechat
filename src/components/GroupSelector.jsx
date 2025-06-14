import { useGroupWorkspace } from '../providers/GroupWorkspaceProvider';

export default function GroupSelector() {
  const { groups, activeGroupId, setActiveGroupId, loadingGroups } = useGroupWorkspace();
  return (
    <div className="flex items-center gap-4 mb-4">
      <select
        className="rounded-full px-4 py-2 border border-slate-300 bg-slate-100 text-slate-800 focus:outline-none shadow-sm min-w-[200px]"
        value={activeGroupId || ''}
        onChange={e => setActiveGroupId(Number(e.target.value))}
        disabled={loadingGroups || !groups.length}
      >
        {loadingGroups ? (
          <option>Loading groups...</option>
        ) : (
          groups.map(g => (
            <option key={g.id} value={g.id}>{g.name}</option>
          ))
        )}
      </select>
      <button className="rounded px-4 py-2 bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">Change Active Group</button>
      <button className="rounded px-4 py-2 bg-slate-400 text-white font-medium hover:bg-slate-500 transition-colors">My Groups</button>
    </div>
  );
}
