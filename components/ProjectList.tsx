import React from "react";
import { Project } from "@/server/db/schema";
import { Card, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { getTimeDifference } from "@/utils/timeUtils";

interface ProjectListProps {
  projects: Project[];
}

function PorjectList({ projects }: ProjectListProps) {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 mdLgrid-cols-2 lg:grid-cols-3">
      {/* TODO: iterate through each project */}
      {projects.map((project) => (
        <Link key={project.id} href={`/project/${project.id}`}>
          <Card className="border border-gray-200 rounded-3xl p-3 hover:border-main hover:scale-[1.01] hover:shadow-md transition-all duration-300">
            <CardHeader className="pb-3 sm:pb-4 lg:pb-5 w-full">
              <CardTitle className="text-lg sm:text-xp lg:text-2xl truncate">
                {project.title}
              </CardTitle>
              <p className="text-xs sm:text-sm text-gray-500 truncate">
                Updated {getTimeDifference(project.updatedAt)}
              </p>
            </CardHeader>
          </Card>
        </Link>
      ))}
    </div>
  );
}
export default PorjectList;
