import React from "react";
import UploadStepHeader from "./UploadStepHeader";

interface ManageUploadStepProps {
  projectId: string;
}

function ManageUploadStep({ projectId }: ManageUploadStepProps) {
  return (
    <div>
      <UploadStepHeader projectId={projectId} />
      {/* TODO: Add the upload body component */}
    </div>
  );
}

export default ManageUploadStep;
