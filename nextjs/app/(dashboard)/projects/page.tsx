import React from "react";

export default function ProjectsPage() {
  const projects = [
    { name: "Project 1", description: "Description 1" },
    { name: "Project 2", description: "Description 2" },
    { name: "Project 3", description: "Description 3" },
    { name: "Project 4", description: "Description 4" },
    { name: "Project 5", description: "Description 5" },
    { name: "Project 6", description: "Description 6" },
    { name: "Project 7", description: "Description 7" },
    { name: "Project 8", description: "Description 8" },
    { name: "Project 9", description: "Description 9" },
    { name: "Project 10", description: "Description 10" },
  ];
  return (
    <div>
      <h1>Projects Page</h1>
      {projects.map((project, index) => (
        <div key={index}>{project.name}</div>
      ))}
    </div>
  );
}
