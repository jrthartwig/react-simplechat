export default function GroupHeader({ darkMode, title = "Group Workspace", subtitle = "No Groups Available" }) {
  return (
    <div className="pt-8 pb-2 px-8">
      <h1 className={
        `text-3xl font-semibold mb-1 ` +
        (darkMode ? 'text-slate-100' : 'text-gray-900')
      }>{title}</h1>
      <div className={
        `text-lg ` +
        (darkMode ? 'text-slate-400' : 'text-gray-500')
      }>{subtitle}</div>
    </div>
  );
}
