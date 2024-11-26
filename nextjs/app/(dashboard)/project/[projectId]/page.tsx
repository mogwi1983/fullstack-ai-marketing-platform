import ProjectDetailView from "@/components/project-detail/ProjectDetailView";
import { getProject } from "@/server/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Details",
};

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    return notFound();
  }

  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8 mt-2">
      <ProjectDetailView project={project} />
    </div>
  );
}
