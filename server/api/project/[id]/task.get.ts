import { getTasks } from '../../../data/task'

export default defineEventHandler(async (event) => {
	const taskId = event.context.params?.id
	if (taskId) {
		let result = getTasks(taskId)
		return result
	}

	setResponseStatus(event, 400)
})
