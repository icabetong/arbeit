import { removeTask } from '../../data/task'

export default defineEventHandler(async (event) => {
	const taskId = event.context.params?.id
	if (taskId) {
		let result = removeTask(taskId)
		return result
	}

	setResponseStatus(event, 400)
})
