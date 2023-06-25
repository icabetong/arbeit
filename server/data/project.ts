import prisma from "./prisma";
import type { Project } from "@prisma/client";

export async function getProjects() {
  return await prisma.project.findMany();
}

export async function getProject(projectId: number) {
  const project = await prisma.project.findUnique({
    where: { projectId },
  });

  return project;
}

export async function createProject(project: Omit<Project, "projectId">) {
  const result = await prisma.project.create({
    data: project,
  });

  return result;
}

export async function updateProject(
  projectId: number,
  project: Omit<Project, "projectId">
) {
  const result = await prisma.project.update({
    data: project,
    where: {
      projectId,
    },
  });

  return result;
}

export async function removeProject(projectId: number) {
  return await prisma.project.delete({
    where: { projectId },
  });
}
