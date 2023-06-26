import prisma from './prisma'
import type { Task } from '@prisma/client'
import generateId from '../util/id'

export async function getTasks(project: string) {
	const tasks = await prisma.task.findMany({
		where: {
			project
		}
	})

	return tasks
}

export async function getTask(taskId: string) {
	const task = await prisma.task.findUnique({
		where: { taskId }
	})

	return task
}

export async function createTask(task: Omit<Task, 'taskId'>) {
	const result = await prisma.task.create({
		data: {
			...task,
			taskId: generateId()
		}
	})

	return result
}

export async function updateTask(taskId: string, task: Omit<Task, 'taskId'>) {
	const result = await prisma.task.update({
		data: task,
		where: {
			taskId
		}
	})

	return result
}

export async function removeTask(taskId: string) {
	return await prisma.task.delete({
		where: { taskId }
	})
}
