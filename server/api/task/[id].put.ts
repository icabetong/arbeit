import { updateTask } from '../../data/task'

export default defineEventHandler(async (event) => {
	const { task } = await readBody(event)
	const id = event.context.params?.id

	if (id) {
		const taskId = parseInt(id, 10)
		let result = updateTask(taskId, task)
		return result
	}

	setResponseStatus(event, 400)
})
