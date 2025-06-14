import { useState } from 'react';
import GroupHeader from '../components/GroupHeader';
import GroupTabs from '../components/GroupTabs';
import GroupWorkspaceProvider from '../providers/GroupWorkspaceProvider';

export default function YourWorkspacePage() {
  // For now, reuse group workspace components with mock data for a single user workspace
  return (
    <GroupWorkspaceProvider>
      <div className="flex flex-col flex-1 min-h-0 h-full w-full items-center overflow-auto">
        <div className="w-full max-w-5xl flex flex-col flex-1 min-h-0 h-full px-4 py-8">
          <GroupHeader title="Your Workspace" subtitle="Only you can see documents you upload." />
          <GroupTabs
            documentsLabel="Your Documents"
            promptsLabel="Your Prompts"
            documentsDesc="Only you can see documents you upload. Allowed extensions: txt, pdf, docx, xlsx, xls, csv, pptx, html, jpg, jpeg, png, bmp, tiff, tif, heif, md, json"
            promptsDesc="Prompts available only to you in this workspace."
          />
        </div>
      </div>
    </GroupWorkspaceProvider>
  );
}
