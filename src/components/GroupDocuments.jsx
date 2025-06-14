import { useGroupWorkspace } from '../providers/GroupWorkspaceProvider';
import { useState } from 'react';

export default function GroupDocuments({ darkMode, description = "Documents uploaded here are visible to all group members. Allowed extensions: txt, pdf, docx, xlsx, xls, csv, pptx, html, jpg, jpeg, png, bmp, tiff, tif, heif, md, json" }) {
  const { documents, loadingDocuments, activeGroupId } = useGroupWorkspace();
  const [filters, setFilters] = useState({
    fileName: '', author: '', keywords: '', abstract: '', classification: ''
  });

  const handleChange = e => {
    setFilters(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  // Filtered docs (mocked, client-side)
  const filteredDocs = documents.filter(doc =>
    (!filters.fileName || doc.fileName.toLowerCase().includes(filters.fileName.toLowerCase())) &&
    (!filters.author || doc.author.toLowerCase().includes(filters.author.toLowerCase())) &&
    (!filters.keywords || doc.keywords.toLowerCase().includes(filters.keywords.toLowerCase())) &&
    (!filters.abstract || doc.abstract.toLowerCase().includes(filters.abstract.toLowerCase())) &&
    (!filters.classification || doc.classification === filters.classification)
  );

  return (
    <div className="w-full">
      <div className={
        `mb-2 text-gray-500 text-sm ` +
        (darkMode ? 'dark:text-slate-400' : '')
      }>
        {description}
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        <input
          className="rounded px-2 py-1 border border-slate-300 text-sm bg-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          name="fileName"
          placeholder="Enter search term..."
          value={filters.fileName}
          onChange={handleChange}
        />
        <input
          className="rounded px-2 py-1 border border-slate-300 text-sm bg-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          name="author"
          placeholder="Author name..."
          value={filters.author}
          onChange={handleChange}
        />
        <input
          className="rounded px-2 py-1 border border-slate-300 text-sm bg-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          name="keywords"
          placeholder="Keyword..."
          value={filters.keywords}
          onChange={handleChange}
        />
        <input
          className="rounded px-2 py-1 border border-slate-300 text-sm bg-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          name="abstract"
          placeholder="Abstract content..."
          value={filters.abstract}
          onChange={handleChange}
        />
        <select
          className="rounded px-2 py-1 border border-slate-300 text-sm bg-slate-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100"
          name="classification"
          value={filters.classification}
          onChange={handleChange}
        >
          <option value="">(All Classifications)</option>
          <option value="Public">Public</option>
          <option value="Internal">Internal</option>
        </select>
        <button
          className="rounded px-3 py-1 bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-600"
          onClick={e => e.preventDefault()}
        >Apply Filters</button>
        <button
          className="rounded px-3 py-1 bg-slate-400 text-white text-sm font-medium hover:bg-slate-500 transition-colors dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={e => { e.preventDefault(); setFilters({ fileName: '', author: '', keywords: '', abstract: '', classification: '' }); }}
        >Clear Filters</button>
      </div>
      <div className="overflow-x-auto rounded border border-slate-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="min-w-full text-sm dark:bg-gray-900">
          <thead className="dark:bg-gray-900">
            <tr className="bg-slate-100 dark:bg-gray-900">
              <th className="px-4 py-2 text-left font-semibold dark:text-white dark:bg-gray-900">File Name</th>
              <th className="px-4 py-2 text-left font-semibold dark:text-white dark:bg-gray-900">Title</th>
              <th className="px-4 py-2 text-left font-semibold dark:text-white dark:bg-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="dark:bg-gray-900">
            {loadingDocuments ? (
              <tr><td colSpan={3} className="px-4 py-6 text-center text-gray-400 dark:text-white dark:bg-gray-900">Loading...</td></tr>
            ) : !activeGroupId ? (
              <tr><td colSpan={3} className="px-4 py-6 text-center text-gray-400 dark:text-white dark:bg-gray-900">Please select an active group.</td></tr>
            ) : filteredDocs.length === 0 ? (
              <tr><td colSpan={3} className="px-4 py-6 text-center text-gray-400 dark:text-white dark:bg-gray-900">No documents found.</td></tr>
            ) : filteredDocs.map(doc => (
              <tr key={doc.id} className="hover:bg-slate-50 dark:hover:bg-gray-800 transition-colors border-b border-slate-100 dark:border-gray-700 dark:bg-gray-800">
                <td className="px-4 py-2 dark:text-white dark:bg-gray-800">{doc.fileName}</td>
                <td className="px-4 py-2 dark:text-white dark:bg-gray-800">{doc.title}</td>
                <td className="px-4 py-2 dark:text-white dark:bg-gray-800">Actions</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
