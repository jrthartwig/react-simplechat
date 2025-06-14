import GroupWorkspaceProvider from '../providers/GroupWorkspaceProvider';
import GroupHeader from '../components/GroupHeader';
import GroupSelector from '../components/GroupSelector';
import GroupTabs from '../components/GroupTabs';


export default function GroupWorkspacePage({ darkMode }) {
  return (
    <GroupWorkspaceProvider>
      <div className={
        `min-h-screen w-full px-0 py-0 flex flex-col items-stretch ` +
        (darkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900')
      } style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}>
        <GroupHeader />
        <div className="w-full max-w-6xl mx-auto mt-4">
          <GroupSelector />
          <GroupTabs />
        </div>
      </div>
    </GroupWorkspaceProvider>
  );
}
