"use server";

import { auth } from "@clerk/nextjs/server";
import { db } from "./db";
import { projectsTable } from "./db/schema";

export async function createProject() {
  //TODO: figure out who the user is
  const { userId } = auth();

  //TODO: verify that the user exists
  if (!userId) {
    throw new Error("User not found");
  }

  //TODO: create the project in the database
  const newProject = await db
    .insert(projectsTable)
    .values({
      title: "New Project",
      userId,
    })
    .returning();
  //TODO: LATER - redirect to detail view
  // redirect -> `/projects/${newProject[0].id}`;
}
