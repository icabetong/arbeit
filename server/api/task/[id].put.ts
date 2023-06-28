import { updateTask } from '../../data/task'

export default defineEventHandler(async (event) => {
	const { task } = await readBody(event)
	const taskId = event.context.params?.id

	if (taskId) {
		let result = updateTask(taskId, task)
		return result
	}

	setResponseStatus(event, 400)
})
