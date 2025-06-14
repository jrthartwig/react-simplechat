import { useGroupWorkspace } from '../providers/GroupWorkspaceProvider';

export default function GroupPrompts({ darkMode }) {
  const { prompts, loadingPrompts, activeGroupId } = useGroupWorkspace();
  return (
    <div className="w-full">
      <div className={
        "mb-2 text-gray-500 text-sm " +
        (darkMode ? 'dark:text-slate-400' : '')
      }>
        Prompts available to all group members for this workspace.
      </div>
      <div className="overflow-x-auto rounded border border-slate-200 bg-white dark:bg-gray-900">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-gray-800">
              <th className="px-4 py-2 text-left font-semibold">Prompt</th>
            </tr>
          </thead>
          <tbody>
            {loadingPrompts ? (
              <tr><td className="px-4 py-6 text-center text-gray-400">Loading...</td></tr>
            ) : !activeGroupId ? (
              <tr><td className="px-4 py-6 text-center text-gray-400">Please select an active group.</td></tr>
            ) : prompts.length === 0 ? (
              <tr><td className="px-4 py-6 text-center text-gray-400">No prompts found.</td></tr>
            ) : prompts.map(p => (
              <tr key={p.id} className="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors">
                <td className="px-4 py-2">{p.prompt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
