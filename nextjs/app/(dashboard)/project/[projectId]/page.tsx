import React from "react";
interface ProjectPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  return <div>ProjectPage: {params.projectId}</div>;
}
