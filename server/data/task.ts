import prisma from './prisma'
import type { Task } from '@prisma/client'

export async function getTasks(project: number) {
	const tasks = await prisma.task.findMany({
		where: {
			project
		}
	})

	return tasks
}

export async function getTask(taskId: number) {
	const task = await prisma.task.findUnique({
		where: { taskId }
	})

	return task
}

export async function createTask(task: Omit<Task, 'taskId'>) {
	const result = await prisma.task.create({
		data: task
	})

	return result
}

export async function updateTask(taskId: number, task: Omit<Task, 'taskId'>) {
	const result = await prisma.task.update({
		data: task,
		where: {
			taskId
		}
	})

	return result
}

export async function removeTask(taskId: number) {
	return await prisma.task.delete({
		where: { taskId }
	})
}
