"server-only";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { eq } from "drizzle-orm";
import { Project, projectsTable } from "./db/schema";

export async function getProjectsForUser(): Promise<Project[]> {
  const { userId } = await auth();
  console.log(userId);

  // verify that the user exists
  if (!userId) {
    throw new Error("User not found");
  }

  const projects = await db.query.projectsTable.findMany({
    where: eq(projectsTable.userId, userId),
    orderBy: (projects, { desc }) => [desc(projects.updatedAt)],
  });

  return projects;
}

export async function getProject(projectId: string) {
  //figure out who the user is
  const { userId } = await auth();

  //verify that the user exists
  if (!userId) {
    throw new Error("User not found");
  }

  const project = await db.query.projectsTable.findFirst({
    where: (project, { eq, and }) =>
      and(eq(project.userId, userId), eq(project.id, projectId)),
  });

  return project;
}
