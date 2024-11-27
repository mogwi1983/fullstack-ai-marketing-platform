import ProjectDetailView from "@/components/project-detail/ProjectDetailView";
import { getProject } from "@/server/queries";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Project Details",
};

interface PageProps {
  params: { projectId: string };
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = params;
  const project = await getProject(projectId);

  if (!project) {
    return notFound();
  }

  const headersList = await headers();
  const contentType = headersList.get("Content-Type");

  return (
    <div className="p-2 sm:p-4 md:p-6 lg:p-8 mt-2">
      <ProjectDetailView project={project} />
    </div>
  );
}
