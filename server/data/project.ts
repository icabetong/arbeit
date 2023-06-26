import prisma from './prisma'
import type { Project } from '@prisma/client'
import generateId from '../util/id'

export async function getProjects() {
	return await prisma.project.findMany()
}

export async function getProject(projectId: string) {
	const project = await prisma.project.findUnique({
		where: { projectId }
	})

	return project
}

export async function createProject(project: Omit<Project, 'projectId'>) {
	const result = await prisma.project.create({
		data: {
			...project,
			projectId: generateId()
		}
	})

	return result
}

export async function updateProject(projectId: string, project: Omit<Project, 'projectId'>) {
	const result = await prisma.project.update({
		data: project,
		where: {
			projectId
		}
	})

	return result
}

export async function removeProject(projectId: string) {
	return await prisma.project.delete({
		where: { projectId }
	})
}
